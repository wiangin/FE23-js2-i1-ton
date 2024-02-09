import Fighter from "./Fighter.js";

class Sanchai extends Fighter{
    #skillMoves;
    constructor(){
        super("Sanchai", 500)
        this.#skillMoves = [];
    }
}