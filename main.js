import Pikachu from "./modules/Pikachu.js";
import Sanchai from "./modules/Sanchai.js";
import Player from "./modules/Player.js";
import Game from "./modules/Game.js";
import Fighter from "./modules/Fighter.js";

const gameContainer = document.querySelector('#gameContainer');
gameContainer.classList.add('gameContainerFlex');
const formEl = document.querySelector('#form')

formEl.addEventListener('submit', event => {
    event.preventDefault()

    const firstPlayerInput = document.querySelector('#player1').value
    const secondPlayerInput = document.querySelector('#player2').value
    const firstPlayerFighter = document.querySelector('#firstPlayerFighter option:checked').value
    const secondPlayerFighter = document.querySelector('#secondPlayerFighter option:checked').value
    
    const player1 = new Player(firstPlayerInput);
    const player2 = new Player(secondPlayerInput);

    player1.addFighter(firstPlayerFighter);
    player2.addFighter(secondPlayerFighter);

    const game = new Game(player1, player2);

    game.createGUI(gameContainer);

    formEl.classList.add('hide');

})