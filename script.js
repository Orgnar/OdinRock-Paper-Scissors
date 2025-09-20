


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

let buttons = document.querySelectorAll("button");
let buttonContainer = document.querySelector("#buttons")
let textboard = document.querySelector("#textboard")
let score = document.querySelector("#score")
let roundDiv = document.querySelector("#round");

let humanScore = 0;
let computerScore = 0;
let round = 1;
let humanChoice = null;
buttons.forEach((button) =>{
    button.addEventListener("click",(event) =>
    {   
        humanChoice = event.target.id;
        playRound();
    })
})



function playRound(){
    console.log(round)
    let computerChoice = getComputerChoice()
    console.log("Human : " + humanChoice + "\nComputer : " + computerChoice) 
    
    if((humanChoice == "rock" && computerChoice == "scissors") || 
      (humanChoice == "paper" &&  computerChoice == "rock") || 
      (humanChoice == "scissors" && computerChoice == "paper")){
        
       ++humanScore
       textboard.textContent = humanChoice + " beats " + computerChoice + "! You Win!";
       score.textContent = "Human : " + humanScore + " Computer : " + computerScore;
    }else if(humanChoice == computerChoice){
        ++humanScore;
        ++computerScore;
        score.textContent = "Human : " + humanScore + " Computer : " + computerScore;
        textboard.textContent = humanChoice + " and " + computerChoice + " is a tie!";
    }else{
        ++computerScore;
        textboard.textContent = humanChoice + " beats " + computerChoice + "! You Lose!";
       score.textContent = "Human : " + humanScore + " Computer : " + computerScore;
        
    }
            if(round == 5){
                if(humanScore > computerScore){
                  textboard.textContent = "Human Wins The Game!"
                        }else if(humanScore < computerScore){
                            textboard.textContent ="Computer Wins The Game!";
                        }else{
                            textboard.textContent ="Its a tie!";
                        }
                    buttons.forEach(button => {
                        button.disabled = true;
                    })
                    let retryButton = document.createElement("button");
                    buttonContainer.appendChild(retryButton);
                    retryButton.textContent = "Play Again"
                    retryButton.addEventListener("click", () => {
                        computerScore = 0;
                        humanScore = 0;
                        score.textContent = "Human : " + humanScore + " Computer : " + computerScore;
                        textboard.textContent = "Click to start playing!"
                        round = 1;
                        roundDiv.textContent = "Round : " + round;
                        buttons.forEach(button => {
                            button.disabled = false;
                        })
                        buttonContainer.removeChild(retryButton);
                    })
                    
                }else{
                    ++round;
                    roundDiv.textContent = "Round : " + round;
                }
}
    

// function playGame(){
//     console.log("Score")
//     console.log("Human : " + humanScore + "| Computers : " + computerScore); 
//     for(let i = 0; i <= 5; i++){
//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice();
//     playRound(humanChoice,computerChoice);
//     console.log("Score")
//     console.log("Human : " + humanScore + "| Computers : " + computerScore); 
//     }

//     console.log("Final Score")
//     console.log("Human : " + humanScore + "| Computers : " + computerScore); 
//     if(humanScore > computerScore){
//         console.log("Human Wins The Game!")
//     }else{
//         console.log("Computer Wins The Game!")
//     }
// }

// playGame();