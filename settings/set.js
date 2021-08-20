//Automatically set selected options
function setOption(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}
if (document.cookie.includes("themes=scratch")) setOption("dark", "scratch");
if (document.cookie.includes("themes=dark")) setOption("dark", "dark");
if (document.cookie.includes("bigger=true")) setOption("bigger", "true");
if (document.cookie.includes("swatches=true")) setOption("swatches", "true");
if (document.cookie.includes("swatches=experimental")) setOption("swatches", "experimental");
if (document.cookie.includes("icons=true")) setOption("icons", "true");
if (document.cookie.includes("fonts=true")) setOption("fonts", "true");
if (document.cookie.includes("customfonts=true")) setOption("customfonts", "true");