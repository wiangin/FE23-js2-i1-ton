import Fighter from "./Fighter.js";

export default class Sanchai extends Fighter{
    #skillMoves;
    constructor(){
        super("Sanchai", 500)
        this.#skillMoves = [];
    }
}