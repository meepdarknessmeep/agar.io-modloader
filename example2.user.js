// ==UserScript==
// @name        Agar.io Setting Setter
// @namespace   agar.io
// @include     http://agar.io/
// @version     1
// @author      MeepDarknessMeep
// @grant       none
// @description Agar.io modification to set your settings on startup
// ==/UserScript==


document.addEventListener("PostModification", function()
{
    
    window.setDarkTheme(true);
    document.querySelector("input[onchange^=\"setDark\"]").checked = true;
    
    window.setShowMass(true);
    
    document.querySelector("input[onchange^=\"setShowMass\"]").checked = true;
    
    window.setSkins(false);
    document.querySelector("input[onchange^=\"setSkin\"]").checked = true;
    
    document.querySelector("input[id=\"nick\"]").value = "A Modder";
    
    console.log("Set Settings!");
    
});