// ==UserScript==
// @name         Remove Habitica Rewards
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  removes the rewards module and sets widths for habits, dailies, and to-do to 33%
// @author       You
// @include      https://habitica.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var sheet = document.createElement('style');
    sheet.innerHTML = ".col-md-3{width:33%}";
    document.body.appendChild(sheet);
    
    // Not loaded at first, so wait a bit
    setTimeout(function(){
        document.getElementsByClassName('rewards-module')[0].remove();
    }, 7000);
})();