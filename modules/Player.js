 export default class Player{
    #name;
    #fighter;
    constructor(name){
        this.#name = name;
        this.#fighter;
    }

    addFighter(fighter) {
        return this.#fighter = fighter;
    }
}