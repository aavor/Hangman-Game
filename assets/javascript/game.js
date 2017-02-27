// Variables 

var myWords = ["Hazard", "Costa", "Kante", "Pedro"];
	
var wordChosen = "";
var guessedletters = [];	
var underscores = 0;
var rightGuesses = [];
var wrongGuesses = [];

var wins = 0;
var loses = 0;
var guessRemaining = 10;


function start(){

guessRemaining = 10;
rightGuesses = [];
wrongGuesses = [];

var activeword = myWords[Math.floor(Math.random() * myWords.length)];
console.log(activeword);
var splitWord = activeword.split("");
underscores = splitWord.length

for (var i = 0; i < underscores; i++){
	rightGuesses.push("_") 
}
console.log(rightGuesses);
document.getElementById('guesses').innerHTML = guessRemaining;
document.getElementById('blanks').innerHTML = rightGuesses.join(" ");

}

function letters(param){

	var eachLetter = false;

	for (var i = 0; i < underscores; i++) {
		if(wordChosen[i] === param){
			eachLetter = true;
		}
	}
	if(eachLetter){
		for (var i = 0; i < underscores; i++) {
		if(wordChosen[i] === param){
			rightGuesses[i] = param;
	}
	console.log(underscores);
}
}
	else{
		guessRemaining --;
		wrongGuesses.push(letter);
	}
	console.log(wrongGuesses);
}

var letters2 = letters;
var userText = document.getElementById("user-text");

      start();
      document.onkeyup = function(event) {
        userText.textContent = event.key;

        var userInput = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("this is the letter we tpyed", userInput);
        letters2(userInput);
      };

// function myWordList(param){
	

// 	for (var i = 0; i < param.length; i++) {
// 		console.log(param[i]);
// 		console.log(param[i].length);

// 	};
// };

	



	

