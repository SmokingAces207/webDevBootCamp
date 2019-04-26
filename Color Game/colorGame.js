let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

let squares = document.querySelectorAll('.square');

let selectedColor = colors[3];

console.log(selectedColor);

let colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = selectedColor;

for (let i = 0; i < squares.length; i++) {
    
    // Add initial colours to squares
    squares[i].style.backgroundColor = colors[i];
    
    // Add click listeners to squares
    squares[i].addEventListener("click", function() {
        
        // Grab Colour of picked square
        let clickedColor = this.style.backgroundColor;
        
        // Compare colour to selectedColour
       if (clickedColor === selectedColor) {
           alert("you chose the right color");
       } else {
           alert("wrong try again");
       }
        
    });
}