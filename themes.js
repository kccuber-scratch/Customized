function themes() {
	if (document.cookie.includes("themes=dark")) {
		document.body.style.backgroundColor = "#171717";
		document.body.style.color = "white";
		document.querySelectorAll("img").forEach((e)=>e.style.filter="brightness(5)")
	};
	if (document.cookie.includes("themes=scratch")) {
		document.body.style.backgroundColor = "#4d97ff";
		document.body.style.color = "white";

		document.querySelectorAll("img").forEach((e)=>e.style.filter="brightness(5)")
		document.querySelectorAll("button").forEach((e)=>{e.style.backgroundColor = "white";e.style.color = "black"})

		document.getElementsByClassName("paint-editor_bitmap-button_GsX3L")[0].style.border = "2px solid white";
	}
}