
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
        outcome.textContent='Even!';
        return;
    }
    if (humanChoice=='rock'){
        switch (computerChoice){
            case 'paper': 
                console.log('You lose!');
                outcome.textContent='You lose!';
                computerScore ++;
                break;
            default: 
                console.log('You win!');
                outcome.textContent='You win!';
                humanScore ++;
        } 
    }else if (humanChoice=='paper'){
        switch (computerChoice){
            case 'scissors': 
                console.log('You lose!');
                outcome.textContent='You lose!';
                computerScore ++;
                break;
            default: 
                console.log('You win!');
                outcome.textContent='You win!';
                humanScore ++;
        } 
    }else if (humanChoice=='scissors'){
        switch (computerChoice){
            case 'rock': 
                console.log('You lose!');
                outcome.textContent='You lose!';
                computerScore ++;
                break;
            default: 
                console.log('You win!');
                outcome.textContent='You win!';
                humanScore ++;
        } 
    }else {console.log('Invalid Input')}
}

function playGame(event){
    let computerChoice=getComputerChoice();
    let humanChoice = event.target.textContent.toLowerCase();
    playRound(humanChoice,computerChoice);

    console.log('Computer:',computerChoice,'You:',humanChoice,'\nComputer score:',computerScore,'Your score:',humanScore);
    computer.textContent=`Computer:${computerChoice},\u00A0\u00A0Score:${computerScore}`;
    human.textContent=`Human:${humanChoice},\u00A0\u00A0Score:${humanScore}`;
    
}

let humanScore = 0;
let computerScore = 0;





