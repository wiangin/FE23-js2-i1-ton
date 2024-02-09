 import Pikachu from "./Pikachu.js";
 import Sanchai from "./Sanchai.js";
 
 export default class Player{
    #name;
    #fighter;
    constructor(name){
        this.#name = name;
        this.#fighter;
    }

    addFighter(fighter) {
        if (fighter === 'pikachu') {
            return this.#fighter = new Pikachu();
        }
    
        return this.#fighter = new Sanchai();
    }
}