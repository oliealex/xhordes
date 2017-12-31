// ==UserScript==
// @name         XHordes
// @namespace    http://tampermonkey.net/
// @version      0.5.1
// @description  A modded version of the Hordes.io client
// @author       LegusX
// @match        https://hordes.io/
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
//@run-at document-start
// ==/UserScript==
(function(){
    window.stop();
    GM_xmlhttpRequest({
        method: 'GET',
        url: "https://hordes.io",
        onload: function(ev) {
            document.open();
            let index = ev.responseText.replace('<script src="script/dist.min.js"></script>', '<script src="https://cdn.rawgit.com/LegusX/xhordes/c3a70b05/src/levelup/levelup.js"></script> ');
            index = index.replace('<link rel="stylesheet" href="gamestyles.css">', '<link rel="stylesheet" href="https://cdn.rawgit.com/LegusX/xhordes/c096f202/src/ads/hordesads.css">');
            document.write(index);
            document.close();
        }
    });
})();
