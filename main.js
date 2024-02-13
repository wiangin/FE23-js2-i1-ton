import Player from "./modules/Player.js";
import Game from "./modules/Game.js";

const formEl = document.querySelector('#form')

formEl.addEventListener('submit', event => {
    event.preventDefault()
    const gameContainer = document.querySelector('#gameContainer');

    const firstPlayerInput = document.querySelector('#player1').value
    const secondPlayerInput = document.querySelector('#player2').value
    const firstPlayerFighter = document.querySelector('#firstPlayerFighter option:checked').value
    const secondPlayerFighter = document.querySelector('#secondPlayerFighter option:checked').value
    
    const player1 = new Player(firstPlayerInput);
    const player2 = new Player(secondPlayerInput);

    player1.addFighter(firstPlayerFighter);
    player2.addFighter(secondPlayerFighter);

    const game = new Game(player1, player2);

    formEl.classList.add('hide')

    game.createGUI(gameContainer);
})