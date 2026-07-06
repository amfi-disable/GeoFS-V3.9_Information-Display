// ==UserScript==
// @name                GeoFS-V3.9_Information-Display
// @name:vi             GeoFS-V3.9_Hiển-Thị-Thông-Tin
// @name:zh-CN          GeoFS-V3.9_信息显示
// @name:zh-TW          GeoFS-V3.9_資訊顯示
// @name:ja             GeoFS-V3.9_情報表示
// @name:ko             GeoFS-V3.9_정보-표시
// @name:fr             GeoFS-V3.9_Affichage-Des-Informations
// @name:de             GeoFS-V3.9_Informationsanzeige
// @name:es             GeoFS-V3.9_Pantalla-De-Información
// @name:pt-BR          GeoFS-V3.9_Exibição-De-Informações
// @name:pt-PT          GeoFS-V3.9_Exibição-De-Informação
// @name:ru             GeoFS-V3.9_Информационный-Дисплей
// @name:ar             GeoFS-V3.9_عرض-المعلومات
// @name:tr             GeoFS-V3.9_Bilgi-Ekranı
// @name:id             GeoFS-V3.9_Tampilan-Informasi
// @name:th             GeoFS-V3.9_การแสดงข้อมูล
// @name:pl             GeoFS-V3.9_Wyświetlacz-Informacyjny
// @name:nl             GeoFS-V3.9_Informatieweergave
// @name:it             GeoFS-V3.9_Visualizzazione-Delle-Informazioni
// @name:sv             GeoFS-V3.9_Informationsdisplay
// @name:da             GeoFS-V3.9_Informationsdisplay
// @name:fi             GeoFS-V3.9_Tietonäyttö
// @name:nb             GeoFS-V3.9_Informasjonsdisplay
// @name:cs             GeoFS-V3.9_Informační-Displej
// @name:hu             GeoFS-V3.9_Információs-Kijelző
// @name:ro             GeoFS-V3.9_Afișare-Informații
// @name:uk             GeoFS-V3.9_Інформаційний-Дисплей
// @name:hi             GeoFS-V3.9_सूचना-प्रदर्शन
// @name:bn             GeoFS-V3.9_তথ্য-প্রদর্শন
// @name:fa             GeoFS-V3.9_نمایش-اطلاعات
// @name:he             GeoFS-V3.9_תצוגת-מידע
// @name:ms             GeoFS-V3.9_Paparan-Maklumat
// @name:fil            GeoFS-V3.9_Pagpapakita-Ng-Impormasyon
// @name:el             GeoFS-V3.9_Εμφάνιση-Πληροφοριών
// @name:hr             GeoFS-V3.9_Zaslon-Informacija
// @name:sk             GeoFS-V3.9_Informačný-Displej
// @name:bg             GeoFS-V3.9_Информационен-Дисплей
// @name:sr             GeoFS-V3.9_Приказ-Информација
// @name:lt             GeoFS-V3.9_Informacinis-Ekranas
// @name:lv             GeoFS-V3.9_Informācijas-Displejs
// @name:et             GeoFS-V3.9_Teabeekraan
// @name:sl             GeoFS-V3.9_Informacijski-Zaslon
// @name:ca             GeoFS-V3.9_Visualització-D'informació
// @name:af             GeoFS-V3.9_Inligting-Vertoon
// @name:sw             GeoFS-V3.9_Onyesho-La-Habari
// @name:zu             GeoFS-V3.9_Isibonisi-Solwazi
// @name:mn             GeoFS-V3.9_Мэдээллийн-Дэлгэц
// @name:my             GeoFS-V3.9_သတင်းအချက်အလက်ပြသခြင်း။
// @name:km             GeoFS-V3.9_ការបង្ហាញព័ត៌មាន
// @name:lo             GeoFS-V3.9_ການສະແດງຂໍ້ມູນ
// @name:ur             GeoFS-V3.9_معلوماتی-ڈسپلے

// @description         Precision flight data HUD featuring glassmorphic telemetry readouts. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:vi      Dữ liệu chuyến bay chính xác HUD có các chỉ số đo từ xa dạng thủy tinh. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-CN   具有玻璃形态遥测读数的精确飞行数据 HUD。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-TW   具有玻璃形態遙測讀數的精確飛行數據 HUD。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ja      グラスモーフィックテレメトリ読み出し機能を備えた高精度の飛行データ HUD。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ko      유리 형태의 원격 측정 판독 기능을 갖춘 정밀 비행 데이터 HUD. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fr      HUD de données de vol de précision avec lectures de télémétrie glassmorphic. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:de      Präzises Flugdaten-HUD mit glasmorphischen Telemetrieanzeigen. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:es      HUD de datos de vuelo de precisión con lecturas de telemetría glassmorphic. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-BR   HUD de dados de voo de precisão com leituras de telemetria glassmorphic. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-PT   HUD de dados de voo de precisão com leituras de telemetria glassmorphic. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ru      HUD прецизионных полетных данных со считыванием гласморфной телеметрии. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ar      شاشة HUD لبيانات الطيران الدقيقة تتميز بقراءات القياس عن بعد ذات الشكل الزجاجي. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:tr      Cam biçimli telemetri okumaları içeren hassas uçuş verileri HUD'u. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:id      Data penerbangan presisi HUD menampilkan pembacaan telemetri glassmorphic. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:th      ข้อมูลการบินที่แม่นยำ HUD พร้อมการอ่านค่าการวัดและส่งข้อมูลทางไกลแบบ glassmorphic © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pl      Precyzyjny HUD danych lotu z odczytami telemetrii szklistej. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:nl      Precisievluchtgegevens-HUD met glasmorfe telemetrie-uitlezingen. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:it      HUD dei dati di volo di precisione con letture telemetriche vetromorfiche. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sv      Precisionsflygdata HUD med glasmorfiska telemetriavläsningar. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:da      Præcis flyvedata HUD med glasmorfisk telemetriudlæsning. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fi      Tarkat lentotiedot HUD, jossa on lasimorfiset telemetrian lukemat. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:nb      Presisjons flydata HUD med glassmorfe telemetriavlesninger. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:cs      Přesné letové údaje HUD se skleněným telemetrickým zobrazením. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hu      Precíziós repülési adatok HUD üvegmorf telemetriai kijelzésekkel. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ro      HUD de precizie pentru date de zbor cu citiri de telemetrie glassmorphic. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:uk      HUD із точними даними про польоти, що містить скломорфні дані телеметрії. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hi      सटीक उड़ान डेटा HUD जिसमें ग्लासमॉर्फिक टेलीमेट्री रीडआउट शामिल हैं। © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:bn      গ্লাসমর্ফিক টেলিমেট্রি রিডআউট সমন্বিত নির্ভুল ফ্লাইট ডেটা HUD। © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fa      داده‌های دقیق پرواز HUD با خوانش‌های تله‌متری شیشه‌ای. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:he      HUD של נתוני טיסה מדויקים הכוללים קריאות טלמטריה מזכוכית מורפית. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ms      Data penerbangan ketepatan HUD menampilkan bacaan telemetri glassmorphic. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fil     Precision flight data HUD na nagtatampok ng glassmorphic telemetry readouts. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:el      Δεδομένα πτήσης ακριβείας HUD με υαλομορφικές ενδείξεις τηλεμετρίας. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hr      HUD preciznih podataka o letu koji sadrži staklomorfna telemetrijska očitavanja. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sk      Presné letové údaje HUD so sklomorfnými telemetrickými údajmi. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:bg      HUD за прецизни данни за полета, включващ стъкломорфни телеметрични показания. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sr      Прецизни ХУД података о лету са телеметријским очитањима стаклене морфологије. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lt      Tikslūs skrydžio duomenų HUD su stiklo morfiniais telemetrijos rodmenimis. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lv      Precīzi lidojuma datu HUD ar stikla morfiskiem telemetrijas rādījumiem. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:et      Täppislennuandmete HUD, millel on klaasmorfsed telemeetrianäidud. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sl      HUD za natančne podatke o letu, ki vsebuje steklomorfne telemetrične odčitke. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ca      HUD de dades de vol de precisió amb lectures de telemetria glassmòrfica. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:af      Presisievlugdata HUD met glasmorfiese telemetrie-uitlesings. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sw      Data ya usahihi ya ndege ya HUD inayoangazia usomaji wa telemetry ya glassmorphic. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zu      Idatha yendiza enembile i-HUD efaka ukufundwa kwe-glassmorphic telemetry. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:mn      Шилэн хэлбэрийн телеметрийн уншилтуудыг агуулсан нислэгийн нарийвчлалын өгөгдөл HUD. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:my      glassmorphic telemetry readout များပါရှိသော တိကျသောပျံသန်းမှုဒေတာ HUD။ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:km      ទិន្នន័យហោះហើរភាពជាក់លាក់ HUD បង្ហាញពីការអាន telemetry glassmorphic ។ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lo      ຂໍ້​ມູນ​ການ​ບິນ​ຄວາມ​ຊັດ​ເຈນ HUD ມີ​ການ​ອ່ານ telemetry glassmorphic​. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ur      عین مطابق فلائٹ ڈیٹا HUD جس میں گلاسمورفک ٹیلی میٹری ریڈ آؤٹس شامل ہیں۔ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.

// @require             https://update.greasyfork.org/scripts/581510/code.js
// @require             https://update.greasyfork.org/scripts/581511/code.js

// @homepageURL         https://sites.google.com/view/geofs-v39-ecosystem/home
// @connect             greasyfork.org
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          safari
// @compatible          brave
// @compatible          opera
// @copyright           2026, _init (https://greasyfork.org/users/1594049)

// @namespace           https://greasyfork.org/users/1594049
// @version             2.0.0
// @author              _init
// @icon                https://geofs-assets.evengao6688.workers.dev/icons/information-display.png
// @match               https://www.geo-fs.com/geofs.php*
// @grant               none
// @license             MIT
// ==/UserScript==

(function() {
    'use strict';

    /**
     * Initialization routine: Registers the INFORMATION tab within the HUD.
     * Requires Core Library helper functions (registerHUDTab, hudCell).
     */
    window.initHUDInformationDisplayPro = function() {
        if (window.hudInformationDisplayPro) return;
        
        console.log("[GeoFS-V3.9_Information-Display] >> Initializing telemetry display...");
        
        // Validation: Verify presence of HUD registry helpers
        if (typeof window.registerHUDTab !== 'function' || typeof window.hudCell !== 'function') {
            console.error("[GeoFS-V3.9_Information-Display] >> HUD helpers missing. Kernel might be unstable.");
            return;
        }

        // Telemetry state persistence
        let lastAcId = null;
        let lastKias = 0;
        let trend = "";

        /**
         * Safe cell wrapper to ensure that ReferenceErrors do not propagate if
         * hudCell is temporarily unavailable during DOM injection.
         * 
         * @param {string} l - Cell label.
         * @param {string} v - Cell value.
         * @param {string} w - Cell style/width/extra class.
         * @param {string} i - Cell element ID.
         * @returns {string} The cell HTML structure.
         */
        const safeCell = (l, v, w, i) => {
            try { return window.hudCell(l, v, w, i); } catch(e) { return ""; }
        };

        // UI Definition: Performance and Navigation grids
        const idHTML = `
            <div id="hud-ac-header" style="grid-column: 1 / -1; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 10px;">
                <div id="hud-ac-name" style="font-size: 11px; font-weight: 900; color: #fff;">Loading Aircraft...</div>
                <div id="hud-ac-id-badge" style="display: inline-block; font-size: 7px; padding: 1px 4px; background: #ff9f05; color: #000; border-radius: 3px; font-weight: 800; margin-top: 4px;">ID: --</div>
            </div>
            <div class="hud-section-header full-width">Performance</div>
            ${safeCell('KTS KIAS', 'N/A', '', 'hud-kias')} 
            ${safeCell('M MACH', 'N/A', '', 'hud-mach')} 
            ${safeCell('DEG AOA', 'N/A', '', 'hud-aoa')}
            ${safeCell('G G-FORCE', 'N/A', '', 'hud-g')} 
            ${safeCell('FPM V/S', 'N/A', '', 'hud-vs')} 
            ${safeCell('FT ALT', 'N/A', '', 'hud-alt')} 
            ${safeCell('FT AGL', 'N/A', '', 'hud-agl')} 
            <div class="hud-section-header full-width">Navigation</div>
            ${safeCell('DEG HDG', 'N/A', '', 'hud-hdg')} 
            ${safeCell('KTS GS', 'N/A', '', 'hud-gs')} 
            ${safeCell('DEG GSLOPE', 'N/A', '', 'hud-gslope')}
        `;
        
        // Registration: Inject into the HUD tab manager
        window.registerHUDTab('id', 'INFORMATION', idHTML, true);
        window.hudInformationDisplayPro = true;

        /**
         * Primary Refresh Loop: Telemetry Processing
         * Updates UI elements every 100ms based on current aircraft animation values.
         */
        setInterval(function () {
            const y = document.getElementById('flightDataDisplay');
            // Halt if the display panel is obscured
            if (!y || y.style.display === 'none') return;
            
            const v = geofs.animation.values;
            const ac = geofs.aircraft.instance;
            if (!v || !ac) return;

            // Identity Resolution: Resolve aircraft names and registries
            if (ac.id !== lastAcId) {
                lastAcId = ac.id;
                const nameEl = document.getElementById('hud-ac-name');
                const badgeEl = document.getElementById('hud-ac-id-badge');
                if (nameEl && badgeEl) {
                    const data = (window.AIRCRAFT_DATA && window.AIRCRAFT_DATA[ac.id]) ? window.AIRCRAFT_DATA[ac.id] : null;
                    
                    if (data) {
                        // Known Aircraft: Use registry name
                        nameEl.textContent = data.name;
                        badgeEl.style.background = "#ff9f05"; 
                        badgeEl.textContent = `REG: ${ac.id}`;
                    } else {
                        // Unknown Aircraft: Stochastic "Identity Obfuscation" Logic
                        const jokes = [
                            "Mystery Flying Object", "Classified Area 51 Project", "Paper Plane with Jet Engines",
                            "UFO (Unidentified Flying Object)", "Identity Obscured by Clouds", "Skunkworks Prototype",
                            "Experimental Lawn Ornament", "Ghost Flight 99", "Stealthy Pizza Delivery", "Aerodynamic Brick"
                        ];
                        const joke = jokes[Math.floor(Math.random() * jokes.length)];
                        
                        let rawName = ac.definition.externalName || ac.definition.name || "Unknown Aircraft";
                        let cleanName = rawName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                        
                        nameEl.innerHTML = `<span style="opacity: 0.6; font-style: italic;">${joke}</span><br><span style="font-size: 9px; font-weight: 400;">(${cleanName})</span>`;
                        badgeEl.style.background = "#94a3b8"; 
                        badgeEl.textContent = `ID: ${ac.id}`;
                    }
                    if (window.V39_NOTIF) window.V39_NOTIF.info(`Identity Resolved: ${ac.id}`);
                }
            }

            // Airspeed Trend: Calculate velocity delta
            if (Math.abs(v.kias - lastKias) > 0.1) {
                trend = v.kias > lastKias ? " ▲" : " ▼";
                lastKias = v.kias;
            } else if (Math.abs(v.kias - lastKias) < 0.01) {
                trend = "";
            }

            /**
             * Updates a specific telemetry cell's text and color.
             * 
             * @param {string} className - The CSS class of the target element.
             * @param {string} value - The new text value to assign.
             * @param {string} [color] - The color value to apply.
             */
            const updateCell = (className, value, color) => {
                const el = y.querySelector('.' + className);
                if (el) {
                    el.textContent = value;
                    el.style.color = color || "#fff";
                }
            };

            // Dynamic Coloring: Threshold-based status alerts
            const vsColor = v.verticalSpeed > 100 ? "#22c55e" : (v.verticalSpeed < -1000 ? "#ef4444" : "#fff");
            const gColor = (v.loadFactor > 3 || v.loadFactor < -1) ? "#ef4444" : "#fff";
            const aoaColor = v.aoa > 16 ? "#ef4444" : (v.aoa > 12 ? "#eab308" : "#fff");

            // Element Synchronization
            updateCell('hud-kias', (v.kias ? v.kias.toFixed(1) : "N/A") + trend);
            updateCell('hud-mach', v.mach ? v.mach.toFixed(2) : "N/A");
            updateCell('hud-alt', v.altitude ? Math.round(v.altitude).toLocaleString() : "N/A");
            updateCell('hud-vs', (v.verticalSpeed !== undefined ? Math.round(v.verticalSpeed) : "N/A"), vsColor);
            updateCell('hud-hdg', v.heading360 ? Math.round(v.heading360).toString().padStart(3, '0') : "N/A");
            updateCell('hud-g', (v.loadFactor ? v.loadFactor.toFixed(1) : "N/A"), gColor);
            updateCell('hud-aoa', (v.aoa ? v.aoa.toFixed(1) : "N/A"), aoaColor);
            updateCell('hud-gs', v.groundSpeed ? v.groundSpeed.toFixed(1) : "N/A");
        }, 100);
    };

    /**
     * Entry Point: Foundation Verification
     * Ensures the display module initializes only when core HUD dependencies are met.
     */
    if (window.SafeInit) {
        window.SafeInit('GeoFS-V3.9_Information-Display', window.initHUDInformationDisplayPro);
    } else {
        const checker = setInterval(() => {
            if (window.registerHUDTab && window.hudCell) {
                clearInterval(checker);
                window.initHUDInformationDisplayPro();
            }
        }, 100);
    }
})();
