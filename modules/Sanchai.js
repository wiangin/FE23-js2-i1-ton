import Fighter from "./Fighter.js";
import Skill from "./Skill.js";

export default class Sanchai extends Fighter{
    #skillMoves;
    constructor(){
        super("Sanchai", 500)
        this.#skillMoves = [new Skill('low king', 30)];
    }
    castSkill(skillName, opponent) {
        const skill = this.#skillMoves.find(s => s.name === skillName)
        
        opponent.health -= skill.damage
    }
}