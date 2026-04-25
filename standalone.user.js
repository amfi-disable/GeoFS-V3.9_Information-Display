// ==UserScript==
// @name         GeoFS-V3.9_Unified-HUD
// @namespace    http://tampermonkey.net/
// @version      3.0.0
// @description  The core draggable information display (HUD) for GeoFS.
// @author       AwesomeOddEven-NightKeys-LunarBlink
// @match        https://www.geo-fs.com/geofs.php*
// @match        https://*.geo-fs.com/geofs.php*
// @require      https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Design-System/main/standalone.user.js
// @require      https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Core-Library/main/standalone.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const hudUrl = 'https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Unified-HUD/main/src/hud.js';

    function loadHUD() {
        if (document.getElementById('flightDataDisplay')) return;
        const script = document.createElement('script');
        script.src = hudUrl;
        document.head.appendChild(script);
        console.log('GeoFS [Unified HUD]: Standalone module loaded.');
    }

    // Wait for foundations then load
    const checker = setInterval(() => {
        if (window.SafeInit && document.getElementById('geofs-addon-design-system')) {
            clearInterval(checker);
            loadHUD();
        }
    }, 500);
})();
