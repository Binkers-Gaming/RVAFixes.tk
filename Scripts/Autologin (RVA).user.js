// ==UserScript==
// @name         Autologin (RVA)
// @namespace    https://www.RVAFixes.tk/
// @version      0.1
// @description  Autologin To Buzz! (Buzz API fix needed for this to work)
// @author       wickedstar
// @match        https://wen.geniussis.com/PublicWelcome.aspx
// @match        https://wen.geniussis.com/PublicWelcome.aspx*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geniussis.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var name = "USERNAME" //Change Me
    var pass = "PASSWORD" //Change Me
    document.getElementById('tbLogin').value = name
    document.getElementById('tbPassword').value = pass
})();
document.getElementById("btLogin").click()
