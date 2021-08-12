if (document.cookie.includes("swatches=true") || new URL(window.location).searchParams.has("swatches") /* Debug for testing locally */) {
	
	//Function for dragging sliders
	let dragSlider = function(num) {
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
	let applySliders = function() {
		dragSlider(0);
		dragSlider(1);
		dragSlider(2);
	}

	//Function for unselecting all swatches
	let unselect = function() {
		document.querySelectorAll(".color-swatch.color-picker_active-swatch_2U6UP").forEach(element => element.classList.remove("color-picker_active-swatch_2U6UP"));
	}

	//Function for setting sliders to a color
	let setSliders = function(c,s,b, swatch) {
		document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = c * 1.24 + "px";
		document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = s * 1.24 + "px";
		document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = b * 1.24 + "px";
		applySliders();
	}

	//Function for adding a swatch
	let addSwatch = function(color, saturation, brightness) {
		
		//Function for clamping
		let clamp = function(x,a,b) {return Math.max(a,Math.min(x, b))}
		
		//The swatch element
		let swatch = document.createElement("span");
		
		//RGB colors for the swatch
		let colors = HSVtoRGB(
			clamp(color,0,100) / 100,
			clamp(saturation,0,100) / 100,
			clamp(brightness,0,100) / 100
		);
		
		swatch.classList.add("color-swatch");
		swatch.classList.add("color-picker_clickable_1qAhZ");
		swatch.dataset.color = color;
		swatch.dataset.saturation = saturation;
		swatch.dataset.brightness = brightness;
		swatch.dataset.bgcolor = "rgb("  + colors.r + ", " + colors.g + ", " + colors.b + ")"
		swatch.style["background-color"] = swatch.dataset.bgcolor;
		swatch.onclick = function() {
			setSliders(color, saturation, brightness, swatch);
			swatch.classList.add("color-picker_active-swatch_2U6UP");
		};
		
		swatchesContainer.appendChild(swatch);
	}
	//Function for adding a linebreak to the swatches
	let addBr = function() {swatchesContainer.appendChild(document.createElement("br"))}

	//Prepare variables
	var swatchesContainer;

	//Prepare style
	let style = document.createElement("style");
	style.textContent =  "#color-swatches-container { margin: 10px -30px; display: block; line-height: 0px;} .color-swatch { width: 18px; height: 20px; border-radius: 4px; display: inline-block; margin: 2.5px; border: solid 1px rgba(0, 0, 0, 0.25); } .color-swatch.color-picker_active-swatch_2U6UP { border: 1px solid #4C97FF !important; } .Popover-body { padding: 4px 10px; }";
	document.head.appendChild(style);
	
	//Function for adding the gradient button events to the color picker
	let addGradientPickerEvents = function(popoverbody) {
		popoverbody.querySelectorAll(".color-picker_gradient-swatches-row_1laEb > div, .color-picker_gradient-swatches-row_1laEb > span").forEach(e => e.addEventListener("click", unselect));
	}
	
	//Function for creating a set of swatches
	let createSwatches = function(popoverbody) {
		//No need to recreate it if it's already added
		if (popoverbody.querySelector("#color-swatches-container")) return;
		//Also this
		if (!popoverbody.querySelector(".color-picker_row-header_23YDh")) return;
		
		//Swatch elements
		swatchesContainer = document.createElement("center");
		swatchesContainer.id = "color-swatches-container";
		
		//The actual swatches
		//Rainbow colors
		addSwatch(0, 100, 100);
		addSwatch(8, 81, 100);
		addSwatch(14, 88, 100);
		addSwatch(36, 67, 88);
		addSwatch(55, 50, 100);
		addSwatch(63, 80, 100);
		addSwatch(72, 60, 100);
		//Grays
		addBr();
		addSwatch(0, 0, 0);
		addSwatch(0, 0, 16);
		addSwatch(0, 0, 33);
		addSwatch(0, 0, 50);
		addSwatch(0, 0, 66);
		addSwatch(0, 0, 83);
		addSwatch(0, 0, 100);
		//Skin colors
		addBr();
		addSwatch(7, 69, 30);
		addSwatch(7, 64, 42);
		addSwatch(7, 62, 51);
		addSwatch(8, 54, 71);
		addSwatch(9, 43, 89);
		addSwatch(9, 36, 93);
		addSwatch(9, 29, 99);
		
		//Element to insert swatches before
		let swatchAfter = popoverbody.querySelector(".color-picker_row-header_23YDh").parentElement;
		//Insert swatches
		swatchAfter.parentElement.insertBefore(swatchesContainer, swatchAfter);
		
		//Unselect swatches when other ways to change color used
		popoverbody.querySelectorAll(".slider_handle_2M_mA").forEach(e => e.addEventListener("mousedown", unselect));
		popoverbody.querySelectorAll(".color-picker_clickable_1qAhZ:not(.color-swatch), .slider_container_2U0n6").forEach(e => e.addEventListener("click", unselect));
		popoverbody.querySelectorAll(".color-picker_gradient-picker-row_2ZOSs > img").forEach(
			e => e.addEventListener("click",
				() => setTimeout(
					() => addGradientPickerEvents(popoverbody), 50
				)
			)
		);
	};

	let createAllSwatches = function() {
		setTimeout(function() {
			document.querySelectorAll(".Popover-body").forEach(element => createSwatches(element));
		}, 10)
	};

	document.getElementsByClassName("color-button_color-button_2-mXT")[0].addEventListener("click", createAllSwatches);
	document.getElementsByClassName("color-button_color-button_2-mXT")[1].addEventListener("click", createAllSwatches);

}

//Function for converting HSV to RGB, thanks stackoverflow (actually from gist.github.com/mjackson/5311256)
//Slightly minified
//Keeping this outside in case something else wants to use it, accepts HSV values from 0 to 1, not 0 to 100, so divide by 100
function HSVtoRGB(h, s, v) {var r, g, b, i, f, p, q, t;
	i = Math.floor(h * 6); f = h * 6 - i; p = v * (1 - s); q = v * (1 - f * s); t = v * (1 - (1 - f) * s);
	switch (i % 6) { case 0: r = v, g = t, b = p; break; case 1: r = q, g = v, b = p; break; case 2: r = p, g = v, b = t; break; case 3: r = p, g = q, b = v; break; case 4: r = t, g = p, b = v; break; case 5: r = v, g = p, b = q; break;}
	return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)};
}