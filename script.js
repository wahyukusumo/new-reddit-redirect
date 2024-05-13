// ==UserScript==
// @name         New Reddit Redirect
// @namespace    http://tampermonkey.net/
// @version      2024-05-01
// @description  Redirect to new.reddit.com
// @author       NK*Chief
// @match        https://www.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href
    let newUrl = url.replace('https://www.reddit.com', 'https://new.reddit.com')
    window.location.replace(newUrl)
})();
