function rollTheDice() {
  setTimeout(function () {
    var player1 = "Player 1";
    var player2 = "Player 2";
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src",
      "dice" + randomNumber1 + ".png");

    document.querySelector(".img2").setAttribute("src",
      "dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "Tie!";
    }

    else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML
        = (player2 + " WINS!");
    }

    else {
      document.querySelector("h1").innerHTML
        = (player1 + " WINS!");
    }
  }, 500);
}
