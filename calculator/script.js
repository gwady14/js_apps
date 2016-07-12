//operation functions
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

// Create variables to store numbers and operations
var number = "";
var operation = [];

// displays returned values on screen
var display = function(entry) {
    document.getElementById("screen").innerHTML = entry;
}

// Clear stored numbers
var clear = function() {
    number = "";
}

// Return current number as integer
var getNum = function() {
    num = parseInt(number);
    return num;
}

// store and display correct digit
var addDigit = function(digit) {
    number += digit;
    display(getNum());
}

// Display 0 when number explicitly cleared
var displayClear = function() {
    clear();
    display(0);
}

// Store current number as a new operation. Clears out used number.
var createOperation = function(op) {
	operation = [];
	operation = [op, getNum()];
	clear();
}

// Evaluate current operation and next number and store result as current number. Return current number if no operation exists
var equals = function() {
	num2 = getNum();
	if (operation !== []) {
		clear();
		switch(operation[0]) {
			case add:
				return add(operation[1], num2);
				break;
			case subtract:
				return subtract(operation[1], num2);
				break;
			case multiply:
				return multiply(operation[1], num2);
				break;
			case divide:
				return divide(operation[1], num2);
				break;
		}
	} else {
			return num2;
	}
}

// Display result of evaluation and store in number
var displayEquals = function() {
	var result = equals();
	number = result.toString();
	var show = Math.round(number*100)/100;
	display(parseInt(show));
}