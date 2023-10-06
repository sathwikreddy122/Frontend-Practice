var timer = 60;
var score = 0;
var randomHitNumber = 0;

function bubbleMaker(){
    var clutter = '';

    for(var i = 1; i <= 175; i++){
        var bubbleNUmber = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${bubbleNUmber}</div>`;
    }
    document.querySelector('#buttom-panel').innerHTML = clutter;
}

function startTimer(){
    var timerIntervel = setInterval(function(){
        if(timer >= 0){
            document.querySelector('#time-value').textContent = timer--;
        }
        else{
            clearInterval(timerIntervel);
            document.querySelector('#buttom-panel').innerHTML = `<h1>Game Over and your total score is ${score}</h1>`;
        }
    }, 1000);
} 

function hitBubble(){
    randomHitNumber = Math.floor(Math.random() * 10);
    document.querySelector('#hit-val').textContent = randomHitNumber;
}

function increaseScore(){
    score += 10;
    document.querySelector('#score-val').textContent = score;
}

document.querySelector('#buttom-panel').addEventListener('click', function(details){
    var clickNUmber = Number(details.target.textContent);
    if(clickNUmber === randomHitNumber){
        increaseScore();
        bubbleMaker();
        hitBubble();
    }
});

bubbleMaker();
hitBubble();
startTimer();