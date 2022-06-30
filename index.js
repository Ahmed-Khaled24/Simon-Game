// Global scope
var UserInputs = [];
var computerInputs = [];
var buttons = ["red", "green", "yellow", "blue"];
var level = 1;
var compareIndex = 0;

function computerTurn(){
    var computerChoice = buttons[Math.floor(Math.random()*4)];                  // get a random choice from the computer
    document.querySelector("."+computerChoice).classList.add("btn-pressed");    // Animate the click
    setTimeout(function(){document.querySelector("." + computerChoice).classList.remove("btn-pressed")}, 200);
    playSound(computerChoice);
    computerInputs.push(computerChoice);
}