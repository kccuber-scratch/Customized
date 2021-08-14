if (document.cookie.includes("themes=dark")) {
window.onload = function() {
document.body.style.backgroundColor = "#171717";
document.body.style.color = "white";
document.getElementsByClassName("dropdown_dropdown_2cQyf")[0].style.borderColor = "#404040";
};

setTimeout(function(){
var els = document.getElementsByTagName("img");
for(var i = 0; i < els.length; i++)
{
  els[i].style.filter = "brightness(5)";
}
}, 500)
}

if (document.cookie.includes("themes=scratch")) {
window.onload = function() {
document.body.style.backgroundColor = "#4d97ff";
document.body.style.color = "white";

setTimeout(function(){
var els = document.getElementsByTagName("img");
for(var i = 0; i < els.length; i++)
{
  els[i].style.filter = "brightness(5)";
}
}, 500)

setTimeout(function(){
var els = document.getElementsByTagName("button");
for(var i = 0; i < els.length; i++)
{
  els[i].style.backgroundColor = "white";
  els[i].style.color = "black";
}
}, 500)

var els = document.getElementsByClassName("paint-editor_bitmap-button_GsX3L")[0];
els.style.border = "2px solid white";
}
} 