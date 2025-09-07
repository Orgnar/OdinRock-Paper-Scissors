console.log("Hello World!")


function getComputerChoice(){
    switch(Math.floor(Math.random()*3)){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}


function getHumanChoice(){
    let humanChoice = (prompt("Rock, Paper, or Scissors?").toLowerCase()).trim();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice){
    console.log("Human : " + humanChoice + "Computer : " + computerChoice)
    if((humanChoice == "rock" && computerChoice == "scissors") || 
      (humanChoice == "paper" &&  computerChoice == "rock") || 
      (humanChoice == "scissors" && computerChoice == "paper")){
        
       ++humanScore
       console.log(humanChoice + " beats " + computerChoice + "! You Win!")
       console.log("Your Score : " + humanScore + "Computer Score : " + computerScore);
    }else if(humanChoice == computerChoice){
       console.log(humanChoice + " and " + computerChoice + " is a tie!")
       ++humanScore;
       ++computerScore;
    }else{
        console.log(computerChoice + " beats " + humanChoice + "! You Lose!")
      ++computerScore;
    }

    }
let humanChoice;
let computerChoice;

function playGame(){
    console.log("Score")
    console.log("Human : " + humanScore + "| Computers : " + computerScore); 
    for(let i = 0; i <= 5; i++){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
    console.log("Score")
    console.log("Human : " + humanScore + "| Computers : " + computerScore); 
    }

    console.log("Final Score")
    console.log("Human : " + humanScore + "| Computers : " + computerScore); 
    if(humanScore > computerScore){
        console.log("Human Wins The Game!")
    }else{
        console.log("Computer Wins The Game!")
    }
}

playGame();