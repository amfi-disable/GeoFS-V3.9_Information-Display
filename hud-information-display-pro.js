/**
 * GeoFS-V3.9_HUD-Information-Display-Pro
 * The primary draggable information display for GeoFS.
 * Includes tabs for Flight Data, Realism toggles, Fuel management, and Checklists.
 */

(function() {
    'use strict';

    window.initHUDInformationDisplayPro = function() {
        console.log("[GeoFS-V3.9_HUD-Information-Display-Pro] Initializing core display system...");
        let isDragging = false, dragTarget = null, dragMoved = false, dragOffsetX = 0, dragOffsetY = 0;
        globalThis.hudProVisible = true; 
        globalThis.hudProMinimized = false;
        globalThis.activeHudProTab = globalThis.activeHudProTab || 'id';

        if (!window.realismSettings) {
            console.log("[GeoFS-V3.9_HUD-Information-Display-Pro] Realism settings not found, initializing defaults.");
            window.realismSettings = { gBreath: true, cameraShake: true, blackout: true, propwash: true, fbw: true, wingflex: true };
        }

        function toggleHud() {
            globalThis.hudProMinimized = !globalThis.hudProMinimized;
            console.log("[GeoFS-V3.9_HUD-Information-Display-Pro] UI state changed: minimized =", globalThis.hudProMinimized);
            const hud = document.getElementById('flightDataDisplay');
            if (hud) hud.classList.toggle('hud-minimized', globalThis.hudProMinimized);
            const btn = document.getElementById('hudMinimizeBtn');
            if (btn) { 
                btn.innerHTML = globalThis.hudProMinimized ? '◈' : '▣'; 
                btn.title = globalThis.hudProMinimized ? 'Restore info display' : 'Minimize info display'; 
            }
        }

        window.switchHUDProTab = function (tabName) {
            console.log("[GeoFS-V3.9_HUD-Information-Display-Pro] Switching to tab:", tabName);
            globalThis.activeHudProTab = tabName;
            globalThis.hudProVisible = true;
            globalThis.hudProMinimized = false;
            const panel = document.getElementById('flightDataDisplay');
            if (panel) panel.classList.remove('hud-minimized');
            document.querySelectorAll('#flightDataDisplay .unified-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('#flightDataDisplay .unified-content').forEach(c => c.classList.remove('active'));
            const tabBtn = document.getElementById(`tab-btn-${tabName}`);
            const tabContent = document.getElementById(`tab-content-${tabName}`);
            if (tabBtn) tabBtn.classList.add('active');
            if (tabContent) tabContent.classList.add('active');
            const btn = document.getElementById('hudMinimizeBtn');
            if (btn) { btn.innerHTML = '▣'; btn.title = 'Minimize info display'; }
        };

        function hudCell(label, value, warnClass, idClass) { 
            return `<div class="hud-cell"><span class="hud-label">${label}</span><span class="hud-value ${idClass || ''} ${warnClass || ''}">${value}</span></div>`; 
        }

        function makeToggle(label, key) {
            return `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 4px 0;">
                    <span style="font-size: 0.85rem; color: rgba(255,255,255,0.9);">${label}</span>
                    <div onclick="window.toggleRealismParam('${key}')" id="toggle_${key}" style="width: 36px; height: 18px; background: ${window.realismSettings[key] ? '#3b82f6' : 'rgba(255,255,255,0.1)'}; border-radius: 9px; cursor: pointer; position: relative; transition: all 0.3s;">
                        <div style="width: 14px; height: 14px; background: #fff; border-radius: 50%; position: absolute; top: 2px; left: ${window.realismSettings[key] ? '20px' : '2px'}; transition: all 0.3s;"></div>
                    </div>
                </div>`;
        }

        const hudMinBtn = document.createElement('div');
        hudMinBtn.id = 'hudMinimizeBtn'; 
        hudMinBtn.title = 'Toggle [K]'; 
        hudMinBtn.innerHTML = '▣';
        hudMinBtn.style.left = '0px'; 
        hudMinBtn.style.top = '50%'; 
        hudMinBtn.style.transform = 'translateY(-50%)';
        document.body.appendChild(hudMinBtn);
        console.log("[GeoFS-V3.9_HUD-Information-Display-Pro] Minimize toggle created.");
        
        if (window.initAddonDraggable) {
            window.initAddonDraggable(hudMinBtn, 'geofs-addonpack-hud-icon-pos');
        }

        hudMinBtn.addEventListener('click', () => { toggleHud(); });

        setInterval(function () {
            if (!geofs.animation.values) return;

            let y = document.getElementById("flightDataDisplay");
            if (!y) {
                console.log("[GeoFS-V3.9_HUD-Information-Display-Pro] Creating main display DOM elements.");
                y = document.createElement("div");
                y.id = "flightDataDisplay";
                y.innerHTML = `
                    <div id="masterCaution" style="display:none; grid-column: 1 / -1; background: #ef4444; color: #fff; text-align: center; font-weight: 900; padding: 4px; border-radius: 6px; margin-bottom: 8px; animation: cautionPulse 1s infinite; letter-spacing: 2px; font-size: 10px; border: 1px solid #fff;">MASTER CAUTION</div>
                    <div class="hud-drag-handle" style="font-size: 9px; letter-spacing: 2px; color: rgba(100,200,255,0.6);">GEOFS HUD PRO v3.9</div>
                    <div class="unified-tabs">
                        <button id="tab-btn-id" class="unified-tab active" onclick="window.switchHUDProTab('id')">ID DISPLAY</button>
                        <button id="tab-btn-realism" class="unified-tab" onclick="window.switchHUDProTab('realism')">REALISM</button>
                        <button id="tab-btn-fuel" class="unified-tab" onclick="window.switchHUDProTab('fuel')">FUEL</button>
                        <button id="tab-btn-checks" class="unified-tab" onclick="window.switchHUDProTab('checks')">CHECKS</button>
                    </div>
                    <div id="tab-content-id" class="unified-content active unified-grid">
                        <div class="hud-section-header full-width">Performance</div>
                        ${hudCell('KIAS', 'N/A', '', 'hud-kias')} ${hudCell('V/S', 'N/A', '', 'hud-vs')} ${hudCell('ALT', 'N/A', '', 'hud-alt')} ${hudCell('AGL', 'N/A', '', 'hud-agl')} ${hudCell('G-FORCE', 'N/A', '', 'hud-g')} ${hudCell('AOA', 'N/A', '', 'hud-aoa')}
                        <div class="hud-section-header full-width">Navigation</div>
                        ${hudCell('HDG', 'N/A', '', 'hud-hdg')} ${hudCell('GS', 'N/A', '', 'hud-gs')} ${hudCell('MACH', 'N/A', '', 'hud-mach')} ${hudCell('GSLOPE', 'N/A', '', 'hud-gslope')}
                    </div>
                    <div id="tab-content-realism" class="unified-content">
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            ${makeToggle("G-Breathing & Sounds", "gBreath")}
                            ${makeToggle("Dynamic Camera Shake", "cameraShake")}
                            ${makeToggle("High-G Blackout", "blackout")}
                            ${makeToggle("Engine Propwash", "propwash")}
                            ${makeToggle("Fly-By-Wire (Jets)", "fbw")}
                            ${makeToggle("Advanced Wingflex", "wingflex")}
                            <div style="margin-top: 10px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <span class="stat-label">Current Load</span>
                                    <span id="realismGVal" class="stat-value highlight" style="font-size: 1.1rem;">1.0 G</span>
                                </div>
                                <div style="width: 100%; height: 4px; background: rgba(0,0,0,0.3); border-radius: 2px; overflow: hidden;">
                                    <div id="realismGBar" style="width: 10%; height: 100%; background: #3b82f6; transition: width 0.1s linear;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-content-fuel" class="unified-content unified-grid">
                        <div class="hud-section-header full-width">Tank Status</div>
                        <div id="hud-fuel-warning" style="grid-column: 1 / -1; color: #ff6b6b; font-size: 10px; text-align: center; display: none;">LOAD FUEL MODULE FOR CONTROLS</div>
                        ${hudCell('FUEL %', 'N/A', '', 'hud-fuel')}
                        ${hudCell('TOTAL MASS', 'N/A', '', 'hud-mass')}
                    </div>
                    <div id="tab-content-checks" class="unified-content">
                        <div id="hud-checklist-display" style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 6px; border: 1px solid rgba(100,200,255,0.1); margin: 4px 0;">
                            <div id="hud-check-phase" style="color: #64c8ff; font-weight: 800; font-size: 9px; text-transform: uppercase;">LOAD CHECKLIST MODULE</div>
                        </div>
                    </div>
                `;
                document.body.appendChild(y);
                if (window.initAddonDraggable) {
                    window.initAddonDraggable(y, 'geofs-addonpack-hud-pos');
                }
                window.switchHUDProTab(globalThis.activeHudProTab);
            }

            if (hudMinBtn) hudMinBtn.style.display = globalThis.hudProVisible ? 'flex' : 'none';
            if (!globalThis.hudProVisible || globalThis.hudProMinimized || (geofs.isPaused && geofs.isPaused())) {
                if (y) y.style.display = 'none';
                return;
            } else {
                if (y) y.style.display = 'grid';
            }

            // Update Logic
            const v = geofs.animation.values;
            if (!v) return;

            const kias = v.kias ? v.kias.toFixed(1) : "N/A";
            const mach = v.mach ? v.mach.toFixed(2) : "N/A";
            const gs = v.groundSpeed ? v.groundSpeed.toFixed(1) : "N/A";
            const alt = v.altitude ? Math.round(v.altitude).toLocaleString() : "N/A";
            const vs = v.verticalSpeed !== undefined ? Math.round(v.verticalSpeed) : "N/A";
            const hdg = v.heading360 ? Math.round(v.heading360).toString().padStart(3, '0') : "N/A";
            const loadFactor = v.loadFactor ? v.loadFactor.toFixed(1) : "N/A";
            
            const updateCell = (panel, className, value) => {
                const el = panel.querySelector('.' + className);
                if (el) el.textContent = value;
            };

            updateCell(y, 'hud-kias', kias);
            updateCell(y, 'hud-mach', mach);
            updateCell(y, 'hud-alt', alt);
            updateCell(y, 'hud-vs', vs);
            updateCell(y, 'hud-hdg', hdg);
            updateCell(y, 'hud-g', loadFactor);
            
            const realismGVal = y.querySelector("#realismGVal");
            const realismGBar = y.querySelector("#realismGBar");
            if (realismGVal) realismGVal.textContent = loadFactor + " G";
            if (realismGBar) {
                const gRatio = Math.min(100, (parseFloat(loadFactor) / 9) * 100);
                realismGBar.style.width = gRatio + "%";
            }
        }, 100);
    };

    if (window.SafeInit) {
        window.SafeInit('GeoFS-V3.9_HUD-Information-Display-Pro', window.initHUDInformationDisplayPro);
    } else {
        window.initHUDInformationDisplayPro();
    }
})();
