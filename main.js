import Pikachu from "./modules/Pikachu.js";
import Sanchai from "./modules/Sanchai.js";
import Player from "./modules/Player.js";
import Game from "./modules/Game.js";

const formEl = document.querySelector('#form')
formEl.addEventListener('submit', event => {
    event.preventDefault()

    const firstPlayerInput = document.querySelector('#player1').value
    const secondPlayerInput = document.querySelector('#player2').value
    const firstPlayerFighter = document.querySelector('#firstPlayerFighter option:checked').value
    const secondPlayerFighter = document.querySelector('#secondPlayerFighter option:checked').value
    
    const player1 = new Player(firstPlayerInput)
    const player2 = new Player(secondPlayerInput)

    if(firstPlayerFighter === 'pikachu') player1.addFighter(new Pikachu())
    else if(firstPlayerFighter === 'sanchai') player1.addFighter(new Sanchai())
    
    if(secondPlayerFighter === 'pikachu') player2.addFighter(new Pikachu())
    else if(secondPlayerFighter === 'sanchai') player2.addFighter(new Sanchai())

    console.log(player1, player2);

    formEl.reset()
})
