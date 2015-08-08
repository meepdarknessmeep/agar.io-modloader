// ==UserScript==
// @name        Agar.io Modifications
// @namespace   agar.io
// @include     http://agar.io/
// @version     1
// @author      MeepDarknessMeep
// @grant       none
// @description An Agar.io modification loader
// ==/UserScript==

var CreateModTable = function()
{
    var mods = [];
    window.agar_mods = mods;
    return mods;
}

var PopulateAgarModTable = function()
{
    var event = document.createEvent("Event");
    event.initEvent("PopulateAgarModTable", true, true);
    
    document.dispatchEvent(event);
    
}

var RunModFunctions = function(functions, script_contents)
{
    for (var i = 0; i < functions.length; i++)
    {
        var temp = functions[i](script_contents);
        script_contents = temp ? temp : script_contents;
    }
    return script_contents;
}

document.addEventListener("DOMContentLoaded", function()
{
    var all_scripts = document.getElementsByTagName("script"); 
    var script;
    for (var k = 0; k < all_scripts.length; k++) 
    { 
        if(all_scripts[k].innerHTML.startsWith("\ni1")) 
            script = all_scripts[k]; 
    }

    var parent = script.parentElement;

    var new_script = document.createElement("script");

    var canvas = document.getElementById("canvas");

    canvas.parentElement.insertBefore(canvas.cloneNode(true), canvas);
    canvas.parentElement.removeChild(canvas);

    
    var mods = CreateModTable();
    
    PopulateAgarModTable(mods);
    
    new_script.innerHTML = RunModFunctions(mods, script.innerHTML);

    parent.insertBefore(new_script, script);
    parent.removeChild(script);
    script = undefined;

});