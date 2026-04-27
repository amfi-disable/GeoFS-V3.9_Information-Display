(function() {
    'use strict';

    window.initHUDInformationDisplayPro = function() {
        if (window.hudInformationDisplayPro) return;
        
        console.log("[GeoFS-V3.9_HUD-Information-Display-Pro] Initializing core display system...");
        
        if (typeof window.registerHUDTab !== 'function' || typeof window.hudCell !== 'function') {
            console.error("[GeoFS-V3.9_HUD-Information-Display-Pro] FATAL: HUD helpers not found on window! Core Library might be missing or failed.");
            return;
        }

        // Hardened: Ensure variables exist to avoid template literal errors
        const safeCell = (l, v, w, i) => {
            try { return window.hudCell(l, v, w, i); } catch(e) { return ""; }
        };

        const idHTML = `
            <div class="hud-section-header full-width">Performance</div>
            ${safeCell('KIAS', 'N/A', '', 'hud-kias')} 
            ${safeCell('V/S', 'N/A', '', 'hud-vs')} 
            ${safeCell('ALT', 'N/A', '', 'hud-alt')} 
            ${safeCell('AGL', 'N/A', '', 'hud-agl')} 
            ${safeCell('G-FORCE', 'N/A', '', 'hud-g')} 
            ${safeCell('AOA', 'N/A', '', 'hud-aoa')}
            <div class="hud-section-header full-width">Navigation</div>
            ${safeCell('HDG', 'N/A', '', 'hud-hdg')} 
            ${safeCell('GS', 'N/A', '', 'hud-gs')} 
            ${safeCell('MACH', 'N/A', '', 'hud-mach')} 
            ${safeCell('GSLOPE', 'N/A', '', 'hud-gslope')}
        `;
        
        window.registerHUDTab('id', 'ID DISPLAY', idHTML, true);
        window.hudInformationDisplayPro = true;

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
        // Fallback for direct load
        const checker = setInterval(() => {
            if (window.registerHUDTab && window.hudCell) {
                clearInterval(checker);
                window.initHUDInformationDisplayPro();
            }
        }, 100);
    }
})();