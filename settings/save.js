function save() {
if (document.getElementById("dark").value == "true") {
  document.cookie = "darkmode=true;path=/"
}else{
  document.cookie = "darkmode=false;path=/"
}

if (document.getElementById("swatches").value == "true") {
  document.cookie = "swatches=true;path=/"
}else{
  document.cookie = "swatches=false;path=/"
}

if (document.getElementById("expand").value == "true") {
  document.cookie = "expand=true;path=/"
}else{
  document.cookie = "expand=false;path=/"
}

window.location.href = "https://lankybox01.leahcimto.com/Customized/"
}