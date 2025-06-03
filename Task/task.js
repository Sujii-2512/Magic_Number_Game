let secretNumber = Math.floor(Math.random() * 20) + 1; 
let score = 20; 
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guessNum = Number(document.querySelector('.guess').value);

    if(!guessNum){
       document.querySelector('.message').textContent = "Please enter a number!";
       return;
    }

    
    if(guessNum == secretNumber){
        document.querySelector('body').style.background = "green";
        document.querySelector('.number').textContent = guessNum;
        document.querySelector('.message').textContent = "You Won Yay! Correct Number...";
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 
    } 

    if(guessNum != secretNumber){
        if(guessNum < secretNumber){
            document.querySelector('.message').textContent = "Sorry! Try Higher number";
        } 
        else if(guessNum > secretNumber){
            document.querySelector('.message').textContent = "Sorry! Try Lower number";
        }

        //Guessing Wrong Number
        score = score - 1;
        document.querySelector('.score').textContent = score;

        if(score < 1){
            document.querySelector('.message').textContent = "You Lost...Better Luck Next Time!";
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1; 

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start Guessing!";
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.background = "#222";
});

