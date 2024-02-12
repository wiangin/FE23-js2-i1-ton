import Fighter from "./Fighter.js";
import Skill from "./Skill.js";

export default class Pikachu extends Fighter {
    #skillMoves;

    constructor() {
        super('Pikachu', 500)
        this.#skillMoves = [];
        this.#skillMoves = [new Skill('Thunderbolt', 80), new Skill('Quick Attack', 40), new Skill('Electro Ball', 60), new Skill('Volt Tackle', 100)];
    }

    getSkillMoves(){
        return this.#skillMoves;
    }

    castSkill(skillName, opponentFighter) {
        const skill = this.#skillMoves.find(s => s.getSkillName() === skillName)
        console.log(skill);

        opponentFighter.receiveDamage(skill.getDamage())
    }
}