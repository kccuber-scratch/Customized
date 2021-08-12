if (document.cookie.includes("icons=true")) {
setTimeout(function(){
let elements = document.getElementsByClassName("tool-select-base_tool-select-icon_2TT3t");

for (var i = 0; i < elements.length; i++) {
    elements[i].style.width = "60px";
    elements[i].style.height = "60px";
}

document.getElementsByClassName("paint-editor_mode-selector_1edhd")[0].style.display = "flex"

document.getElementsByClassName("paint-editor_mode-selector_1edhd")[0].style.justifyContent = "center"
}, 700)
}