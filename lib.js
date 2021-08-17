window.addEventListener('load', (event) => {
document.getElementsByClassName("paint-editor_mod-mode-tools_1IXSj")[0].insertAdjacentHTML("beforeEnd", `<div style="border-left: 1px dashed #D9D9D9;margin-left: 15px; padding-left: 15px;"><button class="playground_playgroundButton_hZeTH" style="display: inline-block;cursor:pointer;" onclick="window.location.replace('lib/index.html');">Library</button></div>`);
});

//Redirecting to costume library
let windowUrl = new URL(window.location);

if (!windowUrl.searchParams.has("lib")) {
window.location.replace("lib/index.html");
}

//Costume library logic
if (costumeLibrary.hasOwnProperty(windowUrl.searchParams.get("lib"))) {
	svgString = costumeLibrary[windowUrl.searchParams.get("lib")].costume;
} else {
	svgString = costumeLibrary.blank;
}

//Costume
var svgString;