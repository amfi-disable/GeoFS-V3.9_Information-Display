(function() {
    'use strict';

    // Shared HUD Manager
    function ensureSharedHUD() {
        if (!globalThis.hudProVisible) globalThis.hudProVisible = true;
        if (globalThis.hudProMinimized === undefined) globalThis.hudProMinimized = false;

        // Inject Core HUD CSS
        if (!document.getElementById('hudModularStyles')) {
            const style = document.createElement('style');
            style.id = 'hudModularStyles';
            style.textContent = `
                .unified-tabs { display: flex; width: 100%; gap: 2px; margin-bottom: 5px; }
                .unified-tab { flex: 1; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-size: 10px; padding: 5px 2px; cursor: pointer; transition: all 0.2s; font-family: sans-serif; font-weight: bold; text-transform: uppercase; }
                .unified-tab:hover { background: rgba(255,255,255,0.2); }
                .unified-tab.active { background: rgba(100,200,255,0.3); border-color: #64c8ff; color: #64c8ff; }
                .unified-content { display: none; }
                .unified-content.active { display: block; }
                .unified-content.unified-grid.active { display: grid; grid-template-columns: 1fr 1fr; gap: 5px 10px; }
                #flightDataDisplay.hud-minimized { display: none !important; }
            `;
            document.head.appendChild(style);
        }

        if (!document.getElementById('hudMinimizeBtn')) {
            const btn = document.createElement('div');
            btn.id = 'hudMinimizeBtn';
            btn.innerHTML = '▣';
            btn.title = 'Toggle Info Display';
            btn.style.left = '0px'; 
            btn.style.top = '50%'; 
            btn.style.transform = 'translateY(-50%)';
            btn.onclick = () => {
                globalThis.hudProMinimized = !globalThis.hudProMinimized;
                document.getElementById('flightDataDisplay')?.classList.toggle('hud-minimized', globalThis.hudProMinimized);
                btn.innerHTML = globalThis.hudProMinimized ? '◈' : '▣';
            };
            document.body.appendChild(btn);
            if (window.initAddonDraggable) window.initAddonDraggable(btn, 'geofs-addonpack-hud-icon-pos');
        }

        if (!document.getElementById('flightDataDisplay')) {
            const panel = document.createElement('div');
            panel.id = 'flightDataDisplay';
            panel.innerHTML = `
                <div id="masterCaution" style="display:none; grid-column: 1 / -1; background: #ef4444; color: #fff; text-align: center; font-weight: 900; padding: 4px; border-radius: 6px; margin-bottom: 8px; animation: cautionPulse 1s infinite; letter-spacing: 2px; font-size: 10px; border: 1px solid #fff;">MASTER CAUTION</div>
                <div class="hud-drag-handle" style="font-size: 9px; letter-spacing: 2px; color: rgba(100,200,255,0.6);">GEOFS HUD PRO v3.9</div>
                <div class="unified-tabs" id="hud-unified-tabs"></div>
            `;
            document.body.appendChild(panel);
            if (window.initAddonDraggable) window.initAddonDraggable(panel, 'geofs-addonpack-hud-pos');
        }

        if (!window.switchHUDProTab) {
            window.switchHUDProTab = function(activeTabId) {
                globalThis.activeHudProTab = activeTabId;
                document.querySelectorAll('#flightDataDisplay .unified-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('#flightDataDisplay .unified-content').forEach(c => c.classList.remove('active'));
                
                const tabBtn = document.getElementById(`tab-btn-${activeTabId}`);
                const tabContent = document.getElementById(`tab-content-${activeTabId}`);
                if (tabBtn) tabBtn.classList.add('active');
                if (tabContent) tabContent.classList.add('active');
                
                globalThis.hudProMinimized = false;
                document.getElementById('flightDataDisplay')?.classList.remove('hud-minimized');
                const btn = document.getElementById('hudMinimizeBtn');
                if (btn) btn.innerHTML = '▣';
            };
        }

        // Visibility Controller
        if (!window._hudVisibilityLoop) {
            window._hudVisibilityLoop = setInterval(() => {
                const btn = document.getElementById('hudMinimizeBtn');
                const panel = document.getElementById('flightDataDisplay');
                if (!btn || !panel) return;

                const isVisible = globalThis.hudProVisible !== false;
                const isMinimized = globalThis.hudProMinimized === true;
                const isPaused = typeof geofs !== 'undefined' && geofs.isPaused && geofs.isPaused();

                btn.style.display = isVisible ? 'flex' : 'none';
                
                if (!isVisible || isMinimized || isPaused) {
                    panel.style.display = 'none';
                } else {
                    panel.style.display = 'grid';
                }
            }, 100);
        }
    }

    function registerHUDTab(tabId, label, contentHTML, isGrid) {
        ensureSharedHUD();
        const tabsContainer = document.getElementById('hud-unified-tabs');
        if (!document.getElementById(`tab-btn-${tabId}`)) {
            const btn = document.createElement('button');
            btn.id = `tab-btn-${tabId}`;
            btn.className = 'unified-tab';
            btn.textContent = label;
            
            // Tab ordering: ID, Fuel, Checks, Realism
            const tabOrder = { 'id': 1, 'fuel': 2, 'checks': 3, 'realism': 4 };
            btn.style.order = tabOrder[tabId] || 99;

            btn.onclick = () => window.switchHUDProTab(tabId);
            tabsContainer.appendChild(btn);
            console.log(`[HUD Shared] Registered tab: ${tabId}`);
        }

        const panel = document.getElementById('flightDataDisplay');
        if (!document.getElementById(`tab-content-${tabId}`)) {
            const content = document.createElement('div');
            content.id = `tab-content-${tabId}`;
            content.className = `unified-content ${isGrid ? 'unified-grid' : ''}`;
            content.innerHTML = contentHTML;
            panel.appendChild(content);
        }

        setTimeout(() => {
            const tabs = Array.from(document.querySelectorAll('#hud-unified-tabs .unified-tab'));
            tabs.sort((a, b) => parseInt(a.style.order) - parseInt(b.style.order));
            const firstTab = tabs[0];
            if (firstTab && !document.querySelector('.unified-tab.active')) {
                window.switchHUDProTab(firstTab.id.replace('tab-btn-', ''));
            }
        }, 500);
    }

    function hudCell(label, value, warnClass, idClass) { 
        return `<div class="hud-cell"><span class="hud-label">${label}</span><span class="hud-value ${idClass || ''} ${warnClass || ''}">${value}</span></div>`; 
    }

    window.initHUDInformationDisplayPro = function() {
        console.log("[GeoFS-V3.9_HUD-Information-Display-Pro] Initializing core display system...");
        
        registerHUDTab('id', 'ID DISPLAY', `
            <div class="hud-section-header full-width">Performance</div>
            ${hudCell('KIAS', 'N/A', '', 'hud-kias')} ${hudCell('V/S', 'N/A', '', 'hud-vs')} ${hudCell('ALT', 'N/A', '', 'hud-alt')} ${hudCell('AGL', 'N/A', '', 'hud-agl')} ${hudCell('G-FORCE', 'N/A', '', 'hud-g')} ${hudCell('AOA', 'N/A', '', 'hud-aoa')}
            <div class="hud-section-header full-width">Navigation</div>
            ${hudCell('HDG', 'N/A', '', 'hud-hdg')} ${hudCell('GS', 'N/A', '', 'hud-gs')} ${hudCell('MACH', 'N/A', '', 'hud-mach')} ${hudCell('GSLOPE', 'N/A', '', 'hud-gslope')}
        `, true);

        setInterval(function () {
            const y = document.getElementById('flightDataDisplay');
            if (!y || y.style.display === 'none') return;
            const v = geofs.animation.values;
            if (!v) return;

            const updateCell = (className, value) => {
                const el = y.querySelector('.' + className);
                if (el) el.textContent = value;
            };

            updateCell('hud-kias', v.kias ? v.kias.toFixed(1) : "N/A");
            updateCell('hud-mach', v.mach ? v.mach.toFixed(2) : "N/A");
            updateCell('hud-alt', v.altitude ? Math.round(v.altitude).toLocaleString() : "N/A");
            updateCell('hud-vs', v.verticalSpeed !== undefined ? Math.round(v.verticalSpeed) : "N/A");
            updateCell('hud-hdg', v.heading360 ? Math.round(v.heading360).toString().padStart(3, '0') : "N/A");
            updateCell('hud-g', v.loadFactor ? v.loadFactor.toFixed(1) : "N/A");
            updateCell('hud-aoa', v.aoa ? v.aoa.toFixed(1) : "N/A");
            updateCell('hud-gs', v.groundSpeed ? v.groundSpeed.toFixed(1) : "N/A");
        }, 100);
    };

    if (window.SafeInit) {
        window.SafeInit('GeoFS-V3.9_HUD-Information-Display-Pro', window.initHUDInformationDisplayPro);
    } else {
        window.initHUDInformationDisplayPro();
    }
})();