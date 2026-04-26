/**
 * GeoFS-V3.9_HUD-Information-Display-Pro
 * The primary draggable information display for GeoFS.
 */

(function() {
    'use strict';

    window.initHUDInformationDisplayPro = function() {
        console.log("[GeoFS-V3.9_HUD-Information-Display-Pro] Initializing core display system...");
        
        if (!window.registerHUDTab || !window.hudCell) {
            console.error("[GeoFS-V3.9_HUD-Information-Display-Pro] Core Library HUD helpers not found!");
            return;
        }

        window.registerHUDTab('id', 'ID DISPLAY', `
            <div class="hud-section-header full-width">Performance</div>
            ${window.hudCell('KIAS', 'N/A', '', 'hud-kias')} ${window.hudCell('V/S', 'N/A', '', 'hud-vs')} ${window.hudCell('ALT', 'N/A', '', 'hud-alt')} ${window.hudCell('AGL', 'N/A', '', 'hud-agl')} ${window.hudCell('G-FORCE', 'N/A', '', 'hud-g')} ${window.hudCell('AOA', 'N/A', '', 'hud-aoa')}
            <div class="hud-section-header full-width">Navigation</div>
            ${window.hudCell('HDG', 'N/A', '', 'hud-hdg')} ${window.hudCell('GS', 'N/A', '', 'hud-gs')} ${window.hudCell('MACH', 'N/A', '', 'hud-mach')} ${window.hudCell('GSLOPE', 'N/A', '', 'hud-gslope')}
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