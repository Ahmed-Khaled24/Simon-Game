// Global scope
var UserInputs = [];
var computerInputs = [];
var buttons = ["red", "green", "yellow", "blue"];
var gameOn = false;
var level = 1;
document.addEventListener("keypress", function(){
    if(gameOn === false)
        gameOn = true;
        document.querySelector("h1").innerText = "Level " + level;
});


function playSound(soundName){
    new Audio("sounds/"+soundName+".mp3").play();
}

function applyButtonEventListeners(){
    document.querySelectorAll("button").forEach(function(btn){
        btn.addEventListener("click", function(){
            playSound(btn.innerText);
            btn.classList.add("btn-pressed");   // Animate the click
            setTimeout(function(){btn.classList.remove("btn-pressed")}, 100);
            UserInputs.push(btn.innerText);
        })
    })
}

function computerTurn(){
    // generate a random choice
    var computerChoice = buttons[Math.floor(Math.random()*4)];
    document.querySelector("."+computerChoice).classList.add("btn-pressed");    // Animate the click
    setTimeout(function(){document.querySelector("."+computerChoice).classList.remove("btn-pressed")}, 100);
    playSound(computerChoice);
    computerInputs.push(computerChoice);
}

function main(){
    applyButtonEventListeners();
    
}


main();