function red() {
document.getElementById('redselector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "7px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "100px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "124px"
}

function yellow() {
document.getElementById('yellowselector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "16px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "116px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "124px"
}

function green() {
document.getElementById('greenselector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "40px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "112px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "118px"
}

function blue() {
document.getElementById('blueselector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "72px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "96px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "124px"
}

function pink() {
document.getElementById('pinkselector').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "100px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "92px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "123px"
}

function red2() {
document.getElementById('redselector2').style.border = "1px solid blue";
document.getElementsByClassName("slider_handle_2M_mA")[0].style.left = "7px"
document.getElementsByClassName("slider_handle_2M_mA")[1].style.left = "100px"
document.getElementsByClassName("slider_handle_2M_mA")[2].style.left = "124px"
}

let swatches = `<center>
<div style="margin-top:10px;">
<img onclick="red()" id="redselector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23ff8847' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="yellow()" id="yellowselector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23ffce1f' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="green()" id="greenselector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%231aed1d' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="blue()" id="blueselector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%234C97FF' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="pink()" id="pinkselector" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23e354eb' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
<img onclick="red2()" id="redselector2" class="color-picker_clickable_1qAhZ" draggable="false" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Efill-solid-enabled%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='fill-solid-enabled' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-opacity='0.15'%3E %3Crect id='Solid' stroke='%23000000' fill='%23ff8847' x='0.5' y='0.5' width='19' height='19' rx='4'%3E%3C/rect%3E %3C/g%3E %3C/svg%3E">
</div>
</center>`;

document.getElementsByClassName("color-button_color-button_2-mXT")[0].addEventListener("click", function(){
setTimeout(function(){
document.querySelectorAll('[dir=ltr]')[1].insertAdjacentHTML("beforeBegin", swatches)

document.getElementsByClassName("color-picker_gradient-picker-row_2ZOSs")[0].style.display = "none";
}, 10)
});

function unselect() {
document.getElementById('redselector').style.border = "none";
document.getElementById('redselector2').style.border = "none";
document.getElementById('yellowselector').style.border = "none";
document.getElementById('greenselector').style.border = "none";
document.getElementById('blueselector').style.border = "none";
document.getElementById('pinkselector').style.border = "none";
}
