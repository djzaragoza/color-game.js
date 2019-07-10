var numSquares = 6; // numSquares variables stores number of squares that will be available in the game as per the mode.
var colors = []; // is an empty array which contains the random six or three RGB color
var pickedColor; //color/option block selected hby the user upon every click
var squares = document.querySelectorAll(".square"); // array of all the squares on the page that are available as options
var resetButton = document.querySelector("#reset"); // variable is the "new game" button in the control panel
var modeButtons = document.querySelectorAll(".mode"); //array which has easy and hard mode buttons

var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",
    "rgb(255, 225, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)"
];
var squares = document.querySelectorAll(.squares);
for (i = 0; i < squares.length; i++) {
    squares.style.backgroundColor = colors[i]
}