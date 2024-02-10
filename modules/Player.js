 import Pikachu from "./Pikachu.js";
 import Sanchai from "./Sanchai.js";
 
 export default class Player{
    #name;
    #fighter;
    constructor(name,fighter){
        this.#name = name;
        this.#fighter = fighter;
    }

    addFighter(fighter) {
        // return this.#fighter = fighter;
        if (fighter === 'pikachu') {
            return this.#fighter = new Pikachu();
        }
    
        return this.#fighter = new Sanchai();
    }
}