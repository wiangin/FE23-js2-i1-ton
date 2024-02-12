import Fighter from "./Fighter.js";
import Skill from "./Skill.js";

export default class Sanchai extends Fighter{
    #skillMoves;
    constructor(){
        super("Sanchai", 500)
        this.#skillMoves = [
            new Skill('low kick', 30),
            new Skill('High Kick', 50),
            new Skill('Spinning Elbow', 100)];
    }

    getSkillMoves(){
        return this.#skillMoves;
    }

    castSkill(skillName, opponent) {
        const skill = this.#skillMoves.find(s => s.name === skillName)
        
        opponent.health -= skill.damage
    }

}