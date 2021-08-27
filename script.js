btnRoll = document.querySelector('.btn-roll');

btnRoll.addEventListener('click', ()  => {
    if(gamePlaying) {
        // 1. Random number
        let dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';

        //3. Update the round score IF the rolled number was NOT a 1
        if else (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }    
});


