if (document.cookie.includes("swatches=true")) {

	//Function for dragging sliders
	function dragSlider(num) {
		//Slider
		let element = document.getElementsByClassName("slider_handle_2M_mA")[num];
		
		//For measurements
		const sliderLeft = element.style.left.substring(0, 2);
			
		//Mouse events
		const mouseDownEvent = new MouseEvent('mousedown', {
		  clientX: element.getBoundingClientRect().left,
		  clientY: element.getBoundingClientRect().top,
		  bubbles: true,
		  cancelable: true
		});
		const mouseMoveEvent = new MouseEvent('mousemove', {
		  clientX: element.getBoundingClientRect().left + sliderLeft>5 ? -1 : 1,
		  clientY: element.getBoundingClientRect().top,
		  bubbles: true,
		  cancelable: true
		});
		const mouseMove2Event = new MouseEvent('mousemove', {
		  clientX: element.getBoundingClientRect().left,
		  clientY: element.getBoundingClientRect().top,
		  bubbles: true,
		  cancelable: true
		});
		const mouseUpEvent = new MouseEvent('mouseup', {
		  bubbles: true,
		  cancelable: true
		});

		// Simulate the mouse moving
		element.dispatchEvent(mouseDownEvent);
		element.dispatchEvent(mouseMoveEvent);
		element.dispatchEvent(mouseMove2Event);
		element.dispatchEvent(mouseUpEvent);
	}

	//Function for applying color changes
	function applySliders() {
		dragSlider(0);
		dragSlider(1);
		dragSlider(2);
	}

	//Function for unselecting all swatches
	function unselect() {
		document.querySelectorAll(".color-swatch.color-picker_active-swatch_2U6UP").forEach(element => element.classList.remove("color-picker_active-swatch_2U6UP"));
	}

	//Function for setting sliders to a color
	function setSliders(c,s,b, swatch) {
		document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = c * 1.24 + "px";
		document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = s * 1.24 + "px";
		document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = b * 1.24 + "px";
		applySliders();
	}

	//Function for adding a swatch
	function addSwatch(color, saturation, brightness, bgcolor) {
		let swatch = document.createElement("span");
		
		swatch.classList.add("color-swatch");
		swatch.classList.add("color-picker_clickable_1qAhZ");
		swatch.dataset.color = color;
		swatch.dataset.saturation = saturation;
		swatch.dataset.brightness = brightness;
		swatch.style["background-color"] = bgcolor;
		swatch.onclick = function() {
			setSliders(color, saturation, brightness, swatch);
			swatch.classList.add("color-picker_active-swatch_2U6UP");
		};
		
		swatchesDiv.appendChild(swatch);
	}
	//Function for adding a linebreak to the swatches
	function addBr() {swatchesDiv.appendChild(document.createElement("br"))}

	//Prepare variables
	var swatchesContainer;
	var swatchesDiv;

	//Prepare style
	var style = document.createElement("style");
	style.textContent =  "#color-swatches-container { margin: 10px -30px; line-height: 0px;} .color-swatch { width: 18px; height: 20px; border-radius: 4px; display: inline-block; margin: 2.5px; border: solid 1px rgba(0, 0, 0, 0.25); } .color-swatch.color-picker_active-swatch_2U6UP { border: 1px solid #4C97FF !important; } .Popover-body { padding: 4px 10px; }";
	document.head.appendChild(style);
	
	//Function for adding the gradient button events to the color picker
	const addGradientPickerEvents = function(popoverbody) {
		popoverbody.querySelectorAll(".color-picker_gradient-swatches-row_1laEb > div, .color-picker_gradient-swatches-row_1laEb > span").forEach(e => e.addEventListener("click", unselect));
	}
	
	//Function for creating a set of swatches
	const createSwatches = function(popoverbody) {
		//No need to recreate it if it's already added
		if (popoverbody.querySelector("#color-swatches-container")) return;
		//Also this
		if (!popoverbody.querySelector(".color-picker_row-header_23YDh")) return;
		
		//Swatch elements
		swatchesContainer = document.createElement("center");
		swatchesContainer.id = "color-swatches-container";
		swatchesDiv = document.createElement("div");
		swatchesContainer.appendChild(swatchesDiv);
		
		//The actual swatches
		//Rainbow colors
		addSwatch(0, 100, 100, "#ff0000");
		addSwatch(8, 81, 100, "#ff8d30");
		addSwatch(14, 88, 100, "#ffda1f");
		addSwatch(36, 67, 88, "#4ae05e");
		addSwatch(55, 50, 100, "#80dbff");
		addSwatch(63, 80, 100, "#3363ff");
		addSwatch(72, 60, 100, "#9666ff");
		//Grays
		addBr();
		addSwatch(0, 0, 0, "#000000");
		addSwatch(0, 0, 16, "#292929");
		addSwatch(0, 0, 33, "#545454");
		addSwatch(0, 0, 50, "#808080");
		addSwatch(0, 0, 66, "#a8a8a8");
		addSwatch(0, 0, 83, "#d4d4d4");
		addSwatch(0, 0, 100, "#ffffff");
		//Skin colors
		addBr();
		addSwatch(7, 69, 30, "#4d2e18");
		addSwatch(7, 64, 42, "#6a4226");
		addSwatch(7, 62, 51, "#825331");
		addSwatch(8, 54, 71, "#b58453");
		addSwatch(9, 43, 89, "#e3b581");
		addSwatch(9, 36, 93, "#eec699");
		addSwatch(9, 29, 99, "#fcdab3");
		
		//Element to insert swatches before
		let swatchAfter = popoverbody.querySelector(".color-picker_row-header_23YDh").parentElement;
		//Insert swatches
		swatchAfter.parentElement.insertBefore(swatchesContainer, swatchAfter);
		
		//Unselect swatches when other ways to change color used
		popoverbody.querySelectorAll(".slider_handle_2M_mA").forEach(e => e.addEventListener("mousedown", unselect));
		popoverbody.querySelectorAll(".color-picker_clickable_1qAhZ:not(.color-swatch), .slider_container_2U0n6").forEach(e => e.addEventListener("click", unselect));
		popoverbody.querySelectorAll(".color-picker_gradient-picker-row_2ZOSs > img").forEach(e => e.addEventListener("click", ()=>setTimeout(()=>addGradientPickerEvents(popoverbody), 50)));
	};

	const createAllSwatches = function() {
		setTimeout(function() {
			document.querySelectorAll(".Popover-body").forEach(element => createSwatches(element));
		}, 10)
	};

	document.getElementsByClassName("color-button_color-button_2-mXT")[0].addEventListener("click", createAllSwatches);
	document.getElementsByClassName("color-button_color-button_2-mXT")[1].addEventListener("click", createAllSwatches);

}