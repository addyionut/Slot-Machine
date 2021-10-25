const gameMsg = document.getElementById('msg');
gameMsg.innerHTML = "Press the lucky button!";

function randomChars() {
    var characters = 'ABC';
    var charsLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charsLength));
}
function count() {
  var letters = "ABC";
  var allCounters = document.querySelectorAll(".counter > div");

  allCounters.forEach(function(el) {
    var duration = 1000 + Array.from(allCounters).indexOf(el) * 1000;        
    var interval = setInterval(function() {
      el.innerText = letters.charAt(Math.random() * letters.length);
      duration = duration - 50;
      if (duration <= 0) {
        clearInterval(interval);
        el.innerText = el.getAttribute("data-final");
      }
    }, 50);
  });
}
