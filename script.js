
//Bring in the elements using DOM
const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")


//Add Event Listener
fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

for (const empty of empties){
	empty.addEventListener("dragover",dragOver)
	empty.addEventListener("dragenter",dragEnter)
	empty.addEventListener("dragleave",dragLeave)
	empty.addEventListener("drop",dragDrop)
}


//create drag functions

function dragStart() {
	//retains class fill and adds hold class
	this.className += " hold"
	//we also want the box go blank (no border)
	//add a timeout function 
	setTimeout( ()=> this.className = "invisible", 0 )
	 
}

function dragEnd() {
	//readd class name to fill
	//if you let go it goes back to same place
	this.className = "fill"

}

function dragOver(e) {
	e.preventDefault()
}

function dragEnter(e) {
	e.preventDefault()
	this.className += " hovered"
}

function dragLeave() {
	console.log("drag leave")
}

function dragDrop() {
	//connected to drag enter and over
	this.className = "empty"
	this.append(fill)
}