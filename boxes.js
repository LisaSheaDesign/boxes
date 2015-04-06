window.onload = init;

function init() {
	var genBtn = document.getElementById("generateButton");
	genBtn.onclick = generate;
	
	var clearBtn = document.getElementById("clearButton");
	clearBtn.onclick = clear;
}

// box object constructor
function Box (id, name, color) {
	this.id = id;
	this.name = name;
	this.color = color;
	
//method that creates the boxes
	this.createBox	= function() {
			
//creates a div with class of box append it to scene
	scene = document.getElementById("scene");
	div = document.createElement("div");				
	div.setAttribute("class", "box");

//set the id of box element	
	div.setAttribute("id", id);

//get the x and y position of each box	
	var x = Math.floor(Math.random() * (scene.offsetWidth-101));
	var y = Math.floor(Math.random() * (scene.offsetHeight-101));

	div.style.left = x + "px";
	div.style.top = y + "px";
		
//and set the color for each box	
	div.style.backgroundColor = color;
	
//add div to scene
	scene.appendChild(div);
	
	div.innerHTML = '"' + name + '"';
	//div.innerHTML += "Your box color is: " + color + "<br>";	
		
	div.onclick = display;	
		
	}// create box END
} // obj END

//put box object in an array
var boxList = [];

// keep count of box and add a unique id to each box
var counter = document.querySelectorAll(".box").length;


// display box id name and style properties for each box
function display(e) {
	
	//console.log(e); 
	//console.log(e.currentTarget.id); 
   //console.log(e.currentTarget.getAttribute('style'));
  //console.log(x,y);
   
	var element;
	var id;
	var name;
	var style;
	var color;
	var x;
	var y;
	
	
	if ( e.srcElement ) {
	
	element = e.target || window.event.target;
	id = e.srcElement.id;
	name = e.srcElement.textContent;
	style = element.getAttribute('style');
	color = e.srcElement.style.backgroundColor;
	x = e.srcElement.style.left;
	y = e.srcElement.style.top;
	
	} else {
	
	element = e.target || window.event.target;
	id = e.currentTarget.id;
	name = e.currentTarget.textContent;
	style = e.currentTarget.getAttribute('style');
	color = e.currentTarget.style.backgroundColor;
	x = e.currentTarget.style.left;
	y = e.currentTarget.style.top;
	
	}
	
	// OR I could do this ONLY
/*	
	var element = e.target || window.event.target;
	var id = e.currentTarget.id;
	var name = e.currentTarget.textContent;
	var style = e.currentTarget.getAttribute('style');
	var color = e.currentTarget.style.backgroundColor;
	var x = e.currentTarget.style.left;
	var y = e.currentTarget.style.top;
	
*/	

   
    
alert("You clicked on a box with id " + id + 
", named Box of " + name + ", whose color is " + color + 
" at position " + x + ", " + y)

}


function generate() {
	
//get the value of the form
	var formData = document.forms.data;
	var name = formData.elements.name.value;
		
// get the selected color from options 
	var colorSelect = document.getElementById("color");
	var colorOption = colorSelect.options[colorSelect.selectedIndex];
	var color = colorOption.value;

// value of the amount radio buttons
	var amountArray = formData.elements.amount;
	var createAmount = amountArray.value;
	//console.log(createAmount);
	
	// get the values of the amount radio btns
		for (var i = 0; i < amountArray.length; i++) {
			if (amountArray[i].checked) {
			createAmount = amountArray[i].value;
			console.log(createAmount);
				}
			}
	
	
// dont generate without a name
	if (name == null || name == "") {
		alert("Must enter a name to make your box");
		return; 
// dont generate without a number
	} else if (createAmount == null || createAmount == "") {
		alert("Must chose a number to make your box");
		return; 	
	} else {
		
// get the values of the amount radio btns
		if (createAmount == "5") {
			 	for (var createAmount = 5; createAmount > 0; createAmount--) {
				var id = "bx" + counter++;
				var box = new Box (id, name, color);
				boxList.push(box);
				box.createBox();
				}
			}
			 else if (createAmount == "10") {
			for (var createAmount = 10; createAmount > 0; createAmount--) {
				var id = "bx" + counter++;
				var box = new Box (id, name, color);
				boxList.push(box);
				box.createBox();
				}
			}
			else if (createAmount == "15") {
			for (var createAmount = 15; createAmount > 0; createAmount--) {
				var id = "bx" + counter++;
				var box = new Box (id, name, color);
				boxList.push(box);
				box.createBox();
				}
			}
		} // amountArray END

//resets the form
		data.reset(clear);
			
} // generate END

// to clear all divs form parent div scene
function clear() {
	var data = document.getElementById("data");
	data.reset();
	var sceneDivs = document.querySelectorAll("#scene div");
	for (var i = 0; i < sceneDivs.length; i++) {
	var clearBoxes = document.getElementsByTagName("div")[1];
	scene.removeChild(clearBoxes);}
	counter = 0;
	boxList.length = 0
} // clear form btn END