// ==UserScript==
// @name         GeoFS-V3.9_HUD-Information-Display-Pro
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  The core draggable information display (HUD) for GeoFS.
// @author       AwesomeOddEven-NightKeys-LunarBlink
// @match        https://www.geo-fs.com/geofs.php*
// @match        https://*.geo-fs.com/geofs.php*
// @require      https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Design-System/main/design-system_standalone.user.js
// @require      https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Core-Library/main/core-library_standalone.user.js
// @grant        none
// @updateURL    https://raw.githubusercontent.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_HUD-Information-Display-Pro/main/hud-information-display-pro_standalone.user.js
// @downloadURL  https://raw.githubusercontent.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_HUD-Information-Display-Pro/main/hud-information-display-pro_standalone.user.js
// ==/UserScript==

(function() {
    'use strict';
    const hudUrl = 'https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_HUD-Information-Display-Pro/main/hud-information-display-pro.js';

    function loadHUD() {
        if (window.initHUDInformationDisplayPro) return;
        const script = document.createElement('script');
        script.src = hudUrl;
        document.head.appendChild(script);
        console.log('[GeoFS-V3.9_HUD-Information-Display-Pro] Standalone module script injected.');
    }

    // Wait for foundations then load
    const checker = setInterval(() => {
        if (window.SafeInit && document.getElementById('geofs-addon-design-system')) {
            clearInterval(checker);
            console.log('[GeoFS-V3.9_HUD-Information-Display-Pro] Foundations detected. Booting Pro UI...');
            loadHUD();
        }
    }, 500);
})();
