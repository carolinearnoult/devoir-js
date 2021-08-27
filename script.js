const playingGame = document.querySelector('.btn-roll');
playingGame.addEventListener('click', (e) => {
    if (playingGame) {
        const dice = Math.floor(Math.random() * 6) + 1;
        const diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'face-' + dice + '.png';
    } else {
         NextPlayer()
    }
})

