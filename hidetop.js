if (document.cookie.includes("expand=true")) {
  setTimeout(function(){ // wait for dark mode to load first, if applied ;)
document.getElementsByClassName("paint-editor_editor-container-top_23HHq")[0].style.display = "none";

document.getElementById("paper-view-0").style.height = null;

document.getElementsByClassName("paint-editor_mode-selector_1edhd")[0].insertAdjacentHTML("beforeEnd", `<button onclick="switch_()" style="cursor:pointer;" id="switch_">Open</button>`)
}, 500)

function show() {
  document.getElementsByClassName("paint-editor_editor-container-top_23HHq")[0].style.display = "initial";
}

function hide() {
  document.getElementsByClassName("paint-editor_editor-container-top_23HHq")[0].style.display = "none";
}

function switch_() {
  if (document.getElementById("switch_").innerText == "Open") {
    document.getElementById("switch_").innerText = "Close"
    document.getElementsByClassName("paint-editor_editor-container-top_23HHq")[0].style.display = "initial";
  }else{
    document.getElementById("switch_").innerText = "Open"
    document.getElementsByClassName("paint-editor_editor-container-top_23HHq")[0].style.display = "none";
  }
}
}