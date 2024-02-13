import Fighter from "./Fighter.js";
import Skill from "./Skill.js";

export default class Pikachu extends Fighter {
    #skillMoves;

    constructor() {
        super('Pikachu', 620)
        this.#skillMoves = [new Skill('Thunderbolt', 80), new Skill('Quick Attack', 40), new Skill('Tackle', 60), new Skill('Thunder', 100)];
    }

    getSkillMoves(){
        return this.#skillMoves;
    }

    castSkill(skillName, opponentFighter) {
        const skill = this.#skillMoves.find(s => s.getSkillName() === skillName)
        opponentFighter.receiveDamage(skill.getDamage())
    }
}