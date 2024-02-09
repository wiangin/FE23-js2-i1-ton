import Fighter from "./Fighter.js";

export default class Pikachu extends Fighter {
    #skillMoves;

    constructor() {
        super('Pikachu', 500)
        this.#skillMoves = [];
    }
}