import Fighter from "./Fighter.js";
import Skill from "./Skill.js";

export default class Sanchai extends Fighter{
    #skillMoves;

    constructor() {
        super("Sanchai", 500)
        this.#skillMoves = [
            new Skill('Roundhouse Kick', 60),
            new Skill('Double Knee', 80),
            new Skill('Spinning Elbow', 40),
            new Skill('Horse Skull Kick', 100)];
    }

    getSkillMoves(){
        return this.#skillMoves;
    }

    castSkill(skillName, opponentFighter) {
        const skill = this.#skillMoves.find(s => s.getSkillName() === skillName)
        opponentFighter.receiveDamage(skill.getDamage())
    }

}