const gameMsg = document.getElementById('msg');
gameMsg.innerHTML = "Press the lucky button!";
var boxes = ["", "", ""];

function randomChars() {
    var characters = 'ABC';
    var charsLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charsLength));
}

function playGame() {
	for (let i = 1; i <= 3; ++i) {
		var rnd = randomChars();
		var div = document.getElementById(i);
		div.innerHTML = rnd;
		boxes[i - 1] = rnd;
	}
	win();
}

function win() {
	if (boxes[0] === boxes[1] && boxes[1] === boxes[2]) {
		gameMsg.innerHTML = "You won!";
	}
	else {
		gameMsg.innerHTML = "Play again!";
	}
}
