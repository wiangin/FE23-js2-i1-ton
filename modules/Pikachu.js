import Fighter from "./Fighter.js";
import Skill from "./Skill.js";

export default class Pikachu extends Fighter {
    #skillMoves;

    constructor() {
        super('Pikachu', 500)
        this.#skillMoves = [];
        this.#skillMoves = [new Skill('thunderbolt', 30)];
    }

    castSkill(skillName, opponent) {
        const skill = this.#skillMoves.find(s => s.name === skillName)

        opponent.health -= skill.damage
    }
}