// ==UserScript==
// @name        Agar.io Scrollzoom unlocker
// @namespace   agar.io
// @include     http://agar.io/
// @version     1
// @author      MeepDarknessMeep
// @grant       none
// @description Agar.io modification to allow you to scroll in/out infinitely
// ==/UserScript==

document.addEventListener("PopulateAgarModTable", function(array)
{
    agar_mods.push(function(script)
    {
        var varname = script.match(/Math\.pow\(.*?\).*;1>(.*?)&&/)[1];

        return script.replace(
            new RegExp("&&\\("+varname+"=", "g"), 
            "&&(window.veryfake="
        );
    });
    
    
    console.log("Successfully put function into loader!");
});