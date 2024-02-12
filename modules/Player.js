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

    toggleTurnToAttack() {
        if(!this.#playersTurn) this.#playersTurn = true;
        else this.#playersTurn = false;
    }

    getplayersTurn() {
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