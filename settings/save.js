function change() {
if (document.getElementById("dark").value == "true") {
  document.cookie = "darkmode=true;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/"
}else{
  document.cookie = "darkmode=false;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/"
}

if (document.getElementById("swatches").value == "true") {
  document.cookie = "swatches=true;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/"
}else{
  document.cookie = "swatches=false;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/"
}
}

function save() {
change();

window.location.href = "https://lankybox01.leahcimto.com/Customized/"
}

function apply() {
change()

alert("Changes applied!")
}