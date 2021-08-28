let scoreBoard, scores, activePlayer, isPlaying;

init();

        //BTN-ROLL

document.querySelector('.btn-roll').addEventListener('click', () => {
    let dice = Math.floor(Math.random() * 6 + 1);
   
    if (dice != 1) {
        scoreBoard += dice;
        document.getElementById('current-' + activePlayer).innerText = scoreBoard;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = './images/face-' + dice + '.png';
    } else {
        //changer de joueur
        switchPlayer();
    }
});

        //BTN-HOLD
document.querySelector('.btn-hold').addEventListener('click', () => {
        //score global
    scores[activePlayer] = scoreBoard;
        //Si les point sont >= 100 la joueur gagne
    if (scores[activePlayer] >=100) {
        document.querySelector('.payer-'+ activePlayer + '-panel').classList.add('winner');
        isPlaying = false;
    }  else {
        //changer de joueur
        switchPlayer();
    } 
});

function switchPlayer() {
    scoreBoard = 0;
    document.getElementById('current-' + activePlayer).innerText = scoreBoard;
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

function init () {
    scoreBoard = 0;
    scores = [0, 0];
    activePlayer = 0;
    isPlaying = true;

    //link-visuals
    document.getElementById('name-0').innerText = 'Player 1';
    document.getElementById('name-1').innerText = 'Player 2';
    document.getElementById('current-0').innerText = '0';
    document.getElementById('current-1').innerText = '0';
    document.getElementById('score-0').innerText = '0';
    document.getElementById('score-1').innerText = '0';
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

}



