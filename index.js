let computerGuess;
let usrGuess = [];

let startSound = new Audio("./audio/start.wav");
let endGame = new Audio("./audio/gameover.mp3");
let clickButton = new Audio("./audio/click.wav");

let inputBox = document.getElementById("inputBox");
const init = () => {
	computerGuess = Math.floor(Math.random() * 100);
	startSound.play();
};

const newGameStart = () => {
	window.location.reload();
};

document.getElementById("newGameButton").style.display = "none";
document.getElementById("gameArea").style.display = "none";

const startGame = () => {
	document.getElementById("gameArea").style.display = "block";

	document.getElementById("welcomeScreen").style.display = "none";
	clickButton.play();
};

const easyMode = () => {
	maxGuess = 10;
	startGame();
};
const hardMode = () => {
	maxGuess = 5;
	startGame();
};

const startNewGame = () => {
	document.getElementById("newGameButton").style.display = "inline";
	inputBox.setAttribute("disabled", true);
	endGame.play();
};

const compareGuess = () => {
	clickButton.play();
	const usrNumber = Number(document.getElementById("inputBox").value);
	usrGuess = [...usrGuess, usrNumber];
	document.getElementById("guesses").innerHTML = usrGuess;

	if (usrGuess.length < maxGuess) {
		if (usrNumber > computerGuess) {
			document.getElementById("textOutput").innerHTML = "You Guess Is High 😲";
			inputBox.value = "";
		} else if (usrNumber < computerGuess) {
			document.getElementById("textOutput").innerHTML = "You Guess Is Low ☹";
			inputBox.value = "";
		} else if (usrNumber == computerGuess) {
			document.getElementById("textOutput").innerHTML = "it's Correct 🎉";
			inputBox.value = "";
			startNewGame();
		}
	} else {
		if (usrNumber > computerGuess) {
			document.getElementById(
				"textOutput"
			).innerHTML = `You Loose!! Correct Number Was ${computerGuess}`;
			inputBox.value = "";
			startNewGame();
		} else if (usrNumber < computerGuess) {
			document.getElementById(
				"textOutput"
			).innerHTML = `You Loose!! Correct Number Was ${computerGuess}`;
			inputBox.value = "";
			startNewGame();
		} else if (usrNumber == computerGuess) {
			document.getElementById("textOutput").innerHTML = "it's Correct 🎉";
			inputBox.value = "";
		}
	}
	document.getElementById("attempts").innerHTML = usrGuess.length;
};
