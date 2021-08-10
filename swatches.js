if (document.cookie.includes("swatches=true")) {

function eyedrop1() {
let element = document.getElementsByClassName("slider_handle_2M_mA")[0];

const mouseDownEvent = new MouseEvent('mousedown', {
  clientX: element.getBoundingClientRect().left,
  clientY: element.getBoundingClientRect().top,
  bubbles: true,
  cancelable: true
});

const mouseMoveEvent = new MouseEvent('mousemove', {
  clientX: element.getBoundingClientRect().left + 1,
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
element.dispatchEvent(mouseUpEvent);
}

function eyedrop2() {
let element = document.getElementsByClassName("slider_handle_2M_mA")[1];

const mouseDownEvent = new MouseEvent('mousedown', {
  clientX: element.getBoundingClientRect().left,
  clientY: element.getBoundingClientRect().top,
  bubbles: true,
  cancelable: true
});

const mouseMoveEvent = new MouseEvent('mousemove', {
  clientX: element.getBoundingClientRect().left + 1,
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
element.dispatchEvent(mouseUpEvent);
}

function eyedrop3() {
let element = document.getElementsByClassName("slider_handle_2M_mA")[2];

const mouseDownEvent = new MouseEvent('mousedown', {
  clientX: element.getBoundingClientRect().left,
  clientY: element.getBoundingClientRect().top,
  bubbles: true,
  cancelable: true
});

const mouseMoveEvent = new MouseEvent('mousemove', {
  clientX: element.getBoundingClientRect().left + 1,
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
element.dispatchEvent(mouseUpEvent);
}

function triggerEyeDropper() {
eyedrop1();
eyedrop2();
eyedrop3();
}

function skin1() {
unselect();
document.getElementById('s1selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "8px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "84px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "30px"
triggerEyeDropper()
}

function skin2() {
unselect();
document.getElementById('s2selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "1px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "44px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "39px"
triggerEyeDropper()
}

function skin3() {
unselect();
document.getElementById('s3selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "6px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "37px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "50px"
triggerEyeDropper()
}

function skin4() {
unselect();
document.getElementById('s4selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "14px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "47px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "102px"
triggerEyeDropper()
}

function skin5() {
unselect();
document.getElementById('s5selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "12px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "35px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "114px"
triggerEyeDropper()
}

function skin6() {
unselect();
document.getElementById('s6selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "13px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "24px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "124px"
triggerEyeDropper()
}

function grey1() {
unselect();
document.getElementById('1selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "114px"
triggerEyeDropper()
}

function grey2() {
unselect();
document.getElementById('2selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "107px"
triggerEyeDropper()
}

function grey3() {
unselect();
document.getElementById('3selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "95px"
triggerEyeDropper()
}

function grey4() {
unselect();
document.getElementById('4selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "73px"
triggerEyeDropper()
}

function grey5() {
unselect();
document.getElementById('5selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "61px"
triggerEyeDropper()
}

function grey6() {
unselect();
document.getElementById('6selector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "0px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "13px"
triggerEyeDropper()
}

function red() {
unselect();
document.getElementById('redselector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "7px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "100px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "124px"
triggerEyeDropper()
}

function yellow() {
unselect();
document.getElementById('yellowselector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "16px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "116px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "124px"
triggerEyeDropper()
}

function green() {
unselect();
document.getElementById('greenselector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "40px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "112px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "118px"
triggerEyeDropper()
}

function blue() {
unselect();
document.getElementById('blueselector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "72px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "96px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "124px"
triggerEyeDropper()
}

function pink() {
unselect();
document.getElementById('pinkselector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "100px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "92px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "123px"
triggerEyeDropper()
}

function red2() {
unselect();
document.getElementById('redselector2').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "7px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "100px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "124px"
triggerEyeDropper()
}

let swatches = `
<center>
<div style="margin-top:10px;">
<img onclick="red()" id="redselector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23ff8847' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="yellow()" id="yellowselector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23ffce1f' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="green()" id="greenselector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%231aed1d' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="blue()" id="blueselector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%234C97FF' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="pink()" id="pinkselector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23e354eb' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="red2()" id="redselector2" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23ff8847' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<br>
<img onclick="grey6()" id="6selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%231f1f1f' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="grey5()" id="5selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23424242' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="grey4()" id="4selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23757575' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="grey3()" id="3selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23a8a8a8' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="grey2()" id="2selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23d9d9d9' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="grey1()" id="1selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23f0f0f0' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<br>
<img onclick="skin1()" id="s1selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23422a00' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="skin2()" id="s2selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%234f3c1a' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="skin3()" id="s3selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%237a6540' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="skin4()" id="s4selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23d6ba87' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="skin5()" id="s5selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23f5d9a6' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="skin6()" id="s6selector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23ffe8bd' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
</div>
</center>`;

document.getElementsByClassName("color-button_color-button_2-mXT")[0].addEventListener("click", function(){
setTimeout(function(){
document.querySelectorAll('[dir=ltr]')[1].insertAdjacentHTML("beforeBegin", swatches)

document.getElementsByClassName("color-picker_gradient-picker-row_2ZOSs")[0].style.display = "none";
}, 10)
});

document.getElementsByClassName("color-button_color-button_2-mXT")[1].addEventListener("click", function(){
setTimeout(function(){
document.getElementsByClassName("color-picker_gradient-picker-row_2ZOSs")[0].remove();
document.getElementsByClassName("color-picker_divider_3Hq7P")[0].remove();
}, 10)
});

function unselect() {
document.getElementById('redselector').style.border = "none";
document.getElementById('redselector2').style.border = "none";
document.getElementById('yellowselector').style.border = "none";
document.getElementById('greenselector').style.border = "none";
document.getElementById('blueselector').style.border = "none";
document.getElementById('pinkselector').style.border = "none";
document.getElementById('1selector').style.border = "none";
document.getElementById('2selector').style.border = "none";
document.getElementById('3selector').style.border = "none";
document.getElementById('4selector').style.border = "none";
document.getElementById('5selector').style.border = "none";
document.getElementById('6selector').style.border = "none";

document.getElementById('s1selector').style.border = "none";
document.getElementById('s2selector').style.border = "none";
document.getElementById('s3selector').style.border = "none";
document.getElementById('s4selector').style.border = "none";
document.getElementById('s5selector').style.border = "none";
document.getElementById('s6selector').style.border = "none";
}
}