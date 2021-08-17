const libraryContainer = document.getElementById("library");

let addCostume = function(id) {
	if (costumeLibrary[id].hidden) return; //Hide hidden items
	//Create
	let costume = document.createElement("div");
	let costumeInner = document.createElement("span");
	//Classes
	costume.classList.add("library-item_library-item_1DcMO");
	costume.classList.add("box_box_2jjDp");
	costumeInner.classList.add("costume-inner");
	//Costume ID
	costume.dataset.costume = id;
	//Function
	costume.onclick = function(){window.location.replace('../index.html?lib='+this.dataset.costume)};
	//Content
	costumeInner.textContent = costumeLibrary[id].name;
	//Append
	costume.appendChild(costumeInner);
	libraryContainer.appendChild(costume);
}

Object.keys(costumeLibrary).forEach((id) => addCostume(id));