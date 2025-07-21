
function getComputerChoice(){
    let seed=Math.floor(Math.random()*3);
    switch (seed){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        default:
            return 'scissors';
    }
}

function getHumanChoice(){
    return prompt('Your choice? (Rock,Paper,Scissors)','Rock').toLocaleLowerCase();
}

function playRound(humanChoice,computerChoice){
    if (humanChoice==computerChoice){
        console.log('Even!');
        return;
    }
    if (humanChoice=='rock'){
        switch (computerChoice){
            case 'paper': 
                console.log('You lose!');
                computerScore ++;
                break;
            default: 
                console.log('You win!');
                humanScore ++;
        } 
    }else if (humanChoice=='paper'){
        switch (computerChoice){
            case 'scissors': 
                console.log('You lose!');
                computerScore ++;
                break;
            default: 
                console.log('You win!');
                humanScore ++;
        } 
    }else if (humanChoice=='scissors'){
        switch (computerChoice){
            case 'rock': 
                console.log('You lose!');
                computerScore ++;
                break;
            default: 
                console.log('You win!');
                humanScore ++;
        } 
    }else {console.log('Invalid Input')}
}

function playGame(){
    for (let i=0; i<5; i++){
        let computerChoice=getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice,computerChoice);
        console.log('Computer:',computerChoice,'You:',humanChoice,'\nComputer score:',computerScore,'Your score:',humanScore);
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();



