 import Pikachu from "./Pikachu.js";
 import Sanchai from "./Sanchai.js";
 
 export default class Player{
    #name;
    #fighter;
    #playersTurn;
    constructor(name,fighter){
        this.#name = name;
        this.#fighter = fighter;
        this.#playersTurn = true;
    }

    togglePlayerTurn() {
        if(!this.#playersTurn) this.#playersTurn = true;
        else this.#playersTurn = false;
    }

    getPlayerTurn() {
        return this.#playersTurn;
    }

    getFighter() {
        return this.#fighter;
    }

    getPlayerName() {
        return this.#name;
    }

    addFighter(fighter) {
        if (fighter === 'pikachu') {
            return this.#fighter = new Pikachu();
        }
    
        return this.#fighter = new Sanchai();
    }
}