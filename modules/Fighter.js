export default class Fighter {
    #name;
    #health;

    constructor(name, health) {
        this.#name = name;
        this.#health = health;
    }

    getName(){
        return this.#name;
    }

    getHealth(){
        return this.#health;
    }
    setHealth(){
        return this.#health;
    }

    receiveDamage(skill) {
        return this.#health -= skill;
    }
}