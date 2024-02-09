import Pikachu from "./modules/Pikachu.js";
import Sanchai from "./modules/Sanchai.js";
import Player from "./modules/Player.js";
import Game from "./modules/Game.js";

const formEl = document.querySelector('#form')
formEl.addEventListener('submit', event => {
    event.preventDefault()

    const firstPlayerInput = document.querySelector('#player1').value;
   
    const secondPlayerInput = document.querySelector('#player2').value;

    const firstPlayerfighter = document.querySelector("#firstPlayerFighter option:checked")
    const secondPlayerfighter = document.querySelector("#secondPlayerFighter option:checked")
    console.log(firstPlayerfighter.value);
    console.log(secondPlayerfighter.value);

    
    const fighter1 = new Sanchai();
    console.log(fighter1);

    const first = new Player(firstPlayerInput, fighter1);
    console.log(first);

})

