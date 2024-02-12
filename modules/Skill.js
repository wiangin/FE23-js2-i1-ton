export default class Skill {
    #name;
    #damage;
    constructor(name, damage) {
        this.#name = name;
        this.#damage = damage;
    }

    getSkillName(){
        return this.#name;
    }
}