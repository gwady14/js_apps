//Build a function my_max() which takes an array and returns the maximum number.
var myArray = [1, 2, 3, 54, 32];

function my_max(variable) {
  return Math.max.apply(null, variable);
}

console.log(my_max(myArray));
console.log(5);

//Build a function vowel_count() which takes a string and returns the number of vowels (AEIOUY).
var sentence = "Andy, my name is Grady."

function vowel_count(variable){
	for (var i = 0; i < variable.length; i++) {
		var letter = variable[i].toLowerCase();
		if (letter === "a" || letter === "i" || letter === "e" || letter === "o" || letter === "u" || letter === "y") {
			console.log(letter);
		}
	}
}

console.log(vowel_count(sentence));
console.log(5);

//Build a function reverse() which takes a string and returns all the characters in the opposite position, e.g. reverse("this is a string") // "gnirts a si siht"
var sentence = "Andy, my name is Grady."

function reverse(variable) {
  	var backwards = [];
    for (var i = variable.length - 1; i >= 0; i--){
    	backwards.push(variable[i]);
  	}
    var newSentence = backwards.join("");
    console.log(newSentence);
}

console.log(reverse(sentence));
console.log(5);