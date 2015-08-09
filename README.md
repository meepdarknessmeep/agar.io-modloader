# agar.io-modloader
An Agar.io Modloader

A very coherent mod loader for Agar.io

===

To use, just install with greasemonkey/tampermonkey! Simply visit the file you want to use and hit raw.

===
# API

To load after modifications have been done:

```
document.addEventListener("PostModification", function()
{
    // I have finished modding the script file and ready for other things!
})
```

To modify the script file:

```
document.addEventListener("PopulateAgarModTable", function()
{
    
    agar_mods.push(function(scriptfile)
    {
            return scriptfile.."\r\nconsole.log('hi from post script execution! :D');";
    })
    
})
```