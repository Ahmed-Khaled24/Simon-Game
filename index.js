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

function playSound(soundName){
    new Audio("sounds/" + soundName + ".mp3").play();
}
 
function levelUp(){
    UserInputs = [];
    compareIndex = 0;
    level++;
    document.querySelector("h1").innerText = "Level " + level;  
}

function gameOver(){
    // Animate the screen
    playSound("wrong");
    document.querySelector("body").classList.add("wrong");
    setTimeout(function(){document.querySelector("body").classList.remove("wrong");}, 200);

    // change h1
    document.querySelector("h1").innerText = "Game Over, press any key to restart";

    // reset all variables
    level = 1;
    compareIndex = 0;
    UserInputs = [];
    computerInputs = [];  
}

// event listeners
document.addEventListener("keypress", function(){
    var h1 = document.querySelector("h1");
    if(h1.innerText === "Press any key to start" || h1.innerText === "Game Over, press any key to restart"){
        h1.innerText = "Level " + level;
        setTimeout(computerTurn, 500);
    }
});

document.querySelectorAll("button").forEach(function(btn){
    btn.addEventListener("click", function(){
         // Animate the click and store it in its array.
        playSound(btn.innerText);
        btn.classList.add("btn-pressed");  
        setTimeout(function(){btn.classList.remove("btn-pressed")}, 100);
        UserInputs.push(btn.innerText);

        // compare user inputs with computer inputs.
        if(this.innerText === computerInputs[compareIndex] && compareIndex+1 < computerInputs.length){
            compareIndex++;
        }
        else if(this.innerText === computerInputs[compareIndex] && compareIndex+1 == computerInputs.length){
            levelUp();
            setTimeout(computerTurn, 500);
        }
        else if(this.innerText !== computerInputs[compareIndex]){
            gameOver();
        }
    })
})