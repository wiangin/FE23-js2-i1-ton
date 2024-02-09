import Pikachu from "./modules/Pikachu.js";
import Sanchai from "./modules/Sanchai.js";

const formEl = document.querySelector('#form')

formEl.addEventListener('submit', event => {
    event.preventDefault()

    const firstPlayerInput = document.querySelector('#player1').value
    const secondPlayerInput = document.querySelector('#player2').value

    formEl.reset()
})
