function change() {
	document.cookie = "darkmode=" + document.getElementById("dark").value + ";expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/"

	document.cookie = "swatches=" + document.getElementById("swatches").value + ";expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/"

	document.cookie = "icons=" + document.getElementById("icons").value + ";expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/"
}

function save() {
	change();

	window.location.replace("../index.html");
}

function apply() {
	change();

	alert("Changes applied!");
}

//Automatically set selected options
function setOption(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}
if (document.cookie.includes("darkmode=true")) setOption("dark", "true");
if (document.cookie.includes("swatches=true")) setOption("swatches", "true");
if (document.cookie.includes("swatches=experimental")) setOption("swatches", "experimental");ű
if (document.cookie.includes("icons=true")) setOption("icons", "true");