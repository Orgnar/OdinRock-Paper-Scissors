console.log("Hello World!")

console.log(Math.floor(Math.random()*3));

function getComputerChoice(){
    switch(Math.random()*3){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}


function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?")
    console.log(humanChoice);
}

let humanScore = 0;
let computerScore = 0;


getHumanChoice();