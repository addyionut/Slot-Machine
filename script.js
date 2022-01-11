const gameMsg = document.getElementById('msg');
gameMsg.innerHTML = "Press the lucky button!";
let boxes = ["", "", ""];
let counter = 0;

function winCases() {
  if (boxes[2] === "") {
    gameMsg.innerHTML = "Let's see...wait...";
  }
  else if (boxes[0] === boxes[1] && boxes[1] === boxes[2]) {
    gameMsg.innerHTML = "Congratulations! You won!";
  }
  else {
    gameMsg.innerHTML = "Ooo... Play again!";
  }
}

function playGame() {
  gameMsg.innerHTML = "Let's see...wait...";
  let letters = "ABC";
  let allBoxes = document.querySelectorAll(".counter > div");
  allBoxes.forEach(function(elm) {
    let duration = 1000 + elm.id * 1000;        
    let interval = setInterval(function() {
      let rnd = letters.charAt(Math.random() * letters.length);
      elm.innerText = rnd;
      duration = duration - 50;
      if (duration <= 0) {
        boxes[counter] = rnd;
        ++counter;
        winCases();
        clearInterval(interval);
      } 
    }, 50);
    counter = 0;
  }); 
  boxes = ["", "", ""];
}
