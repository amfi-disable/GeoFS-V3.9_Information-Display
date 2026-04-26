/**
 * GeoFS-V3.9_HUD-Information-Display-Pro
 * The primary draggable information display for GeoFS.
 * Includes tabs for Flight Data, Realism toggles, Fuel management, and Checklists.
 */

(function() {
    'use strict';

    // Shared HUD Manager
    function ensureSharedHUD() {
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
    }

    function registerHUDTab(tabId, label, contentHTML, isGrid) {
        ensureSharedHUD();
        const tabsContainer = document.getElementById('hud-unified-tabs');
        if (!document.getElementById(`tab-btn-${tabId}`)) {
            const btn = document.createElement('button');
            btn.id = `tab-btn-${tabId}`;
            btn.className = 'unified-tab';
            btn.textContent = label;
            btn.onclick = () => window.switchHUDProTab(tabId);
            tabsContainer.appendChild(btn);
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
            const firstTab = document.querySelector('#hud-unified-tabs .unified-tab');
            if (firstTab && !document.querySelector('.unified-tab.active')) {
                firstTab.click();
            }
        }, 100);
    }

    function hudCell(label, value, warnClass, idClass) { 
        return `<div class="hud-cell"><span class="hud-label">${label}</span><span class="hud-value ${idClass || ''} ${warnClass || ''}">${value}</span></div>`; 
    }

    window.initHUDInformationDisplayPro = function() {
        console.log("[GeoFS-V3.9_HUD-Information-Display-Pro] Initializing core display system...");
        globalThis.hudProVisible = true; 
        globalThis.hudProMinimized = false;
        
        // Register ID Tab
        registerHUDTab('id', 'ID DISPLAY', `
            <div class="hud-section-header full-width">Performance</div>
            ${hudCell('KIAS', 'N/A', '', 'hud-kias')} ${hudCell('V/S', 'N/A', '', 'hud-vs')} ${hudCell('ALT', 'N/A', '', 'hud-alt')} ${hudCell('AGL', 'N/A', '', 'hud-agl')} ${hudCell('G-FORCE', 'N/A', '', 'hud-g')} ${hudCell('AOA', 'N/A', '', 'hud-aoa')}
            <div class="hud-section-header full-width">Navigation</div>
            ${hudCell('HDG', 'N/A', '', 'hud-hdg')} ${hudCell('GS', 'N/A', '', 'hud-gs')} ${hudCell('MACH', 'N/A', '', 'hud-mach')} ${hudCell('GSLOPE', 'N/A', '', 'hud-gslope')}
        `, true);

        // Main Loop
        setInterval(function () {
            const hudMinBtn = document.getElementById('hudMinimizeBtn');
            const y = document.getElementById('flightDataDisplay');

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
                const el = panel?.querySelector('.' + className);
                if (el) el.textContent = value;
            };

            updateCell(y, 'hud-kias', kias);
            updateCell(y, 'hud-mach', mach);
            updateCell(y, 'hud-alt', alt);
            updateCell(y, 'hud-vs', vs);
            updateCell(y, 'hud-hdg', hdg);
            updateCell(y, 'hud-g', loadFactor);
        }, 100);
    };

    if (window.SafeInit) {
        window.SafeInit('GeoFS-V3.9_HUD-Information-Display-Pro', window.initHUDInformationDisplayPro);
    } else {
        window.initHUDInformationDisplayPro();
    }
})();
