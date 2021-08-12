function change() {
document.cookie = "darkmode=" + document.getElementById("dark").value + ";expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/"

document.cookie = "swatches=" + document.getElementById("swatches").value + ";expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/"

document.cookie = "icons=" + document.getElementById("icons").value + ";expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/"
}

function save() {
change();

window.location.href = "https://lankybox01.leahcimto.com/Customized/"
}

function apply() {
change()

alert("Changes applied!")
}