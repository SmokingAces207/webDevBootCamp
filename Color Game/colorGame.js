"use strict"
let numOfSquares = 6;
let colors = []
let selectedColor;

let squares = document.querySelectorAll('.square');
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#resetBtn');
let modeButtons = document.querySelectorAll('.mode');
let colorDisplay = document.getElementById('colorDisplay');

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons () {
    
    for (let i = 0; i < modeButtons.length; i++) {
    
        /* Add event listener to each mode button,
         * so when difficulty buttons are changed,
         * we reset the num of squares and do a reset */
        modeButtons[i].addEventListener('click', function() {

            removeClassFromList('selected', modeButtons);
            this.classList.add('selected');
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        });
    }
}

// Remove a given cssClass from the list provided
function removeClassFromList (cssClass, list) {
    
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove(cssClass);
    }
}

function setupSquares () {
    
    for (let i = 0; i < squares.length; i++) {
    
        // Add initial colours to squares
        squares[i].style.backgroundColor = colors[i];

        // Add click listeners to squares
        squares[i].addEventListener("click", function() {

            // Grab Colour of picked square
            let clickedColor = this.style.backgroundColor;

            // Compare colour to selectedColour
            console.log(clickedColor, selectedColor);
            
            if (clickedColor === selectedColor) {
                
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                h1.style.background = clickedColor;
                changeColors(clickedColor);
                
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}


resetButton.addEventListener('click', function() {
	reset();
});

/*
* Generate all new colours, Pick a new random colour from array,
* Change colorDisplay to match picked colour
*/
function reset () {
    
    colors = generateRandomColours(numOfSquares);
    selectedColor = pickColor();
    colorDisplay.textContent = selectedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    
    refreshSquares();
}

// Change colour of squares and change number of squares
function refreshSquares () {

	for (let i = 0; i < squares.length; i++) {
        
		if (colors[i]) {
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

function changeColors (color) {
	//loop through all squares
	for(let i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor () {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColours (num) {
    
    let arr = [];
    
    for (let i = 0; i < num; i++) {
        arr.push(randomColour());
    }
    return arr;
}

function randomColour () {
    // Pick a RED value from 0 to 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
    