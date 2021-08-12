//Automatically set selected options
function setOption(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}
if (document.cookie.includes("darkmode=true")) setOption("dark", "true");
if (document.cookie.includes("swatches=true")) setOption("swatches", "true");
if (document.cookie.includes("swatches=experimental")) setOption("swatches", "experimental");
if (document.cookie.includes("icons=true")) setOption("icons", "true");
