function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  let playerChoice = document.getElementById('playerChoice').value;

  if(playerChoice == "paper") {
    var prsDictionary = {}

    prsDictionary[0] = "rock";
    prsDictionary[1] = "paper";
    prsDictionary[2] = "scissors";
  }

  if(playerChoice == "rock") {
    var prsDictionary = {}

    prsDictionary[0] = "scissors";
    prsDictionary[1] = "rock";
    prsDictionary[2] = "paper";
  }

  if(playerChoice == "scissors") {
    var prsDictionary = {}

    prsDictionary[0] = "paper";
    prsDictionary[1] = "scissors";
    prsDictionary[2] = "rock";
  }

  playerChoiceNumber = 1;

  let computerChoiceNumber = getRandomInt(0, 2);
  let computerChoiceText = prsDictionary[computerChoiceNumber];
  alert("computer: " + computerChoiceText);

  if(playerChoiceNumber > computerChoiceNumber) {
    var result = "you win!";
  }
  else if (playerChoiceNumber < computerChoiceNumber) {
    var result = "you lose.";
  }
  else if (playerChoiceNumber == computerChoiceNumber) {
    var result = "tie!";
  }
  else {
    var result = "";
  }
  alert(result);

  document.getElementById("computerChoiceDiv").innerHTML = " computer: " + computerChoiceText + "<br><br>" + result;

}
