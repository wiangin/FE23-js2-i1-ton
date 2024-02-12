export default class Game {
    #players

    constructor(fight1, fight2) {
        console.log(fight1.getSkillMoves());
        console.log(fight2);
        this.#players = []
        this.fight1 = fight1;
        this.fight2 = fight2;

    }

    addPlayer(players) {
        return this.#players.push(...players)
    }

    createFighterCard(container){
        const card1 = document.createElement('div');
        const card2 = document.createElement('div');
        const health1 = document.createElement('div');
        const skillDiv1 = document.createElement('div');
        const health2 = document.createElement('div');
        const skillDiv2 = document.createElement('div');

       
        card1.innerText = this.fight1.getName();
        card1.classList.add('card1');
        health1.innerText = `Health: ${this.fight1.getHealth()}`;

        for(const skill1 of this.fight1.getSkillMoves()){
            console.log(skill1.getSkillName());
            const skillbtn = document.createElement('button');
            skillbtn.innerText = skill1.getSkillName();

            skillDiv1.append(skillbtn);
        }

        card1.addEventListener('click',(event)=>{
            event.preventDefault();
       
        })

        
        
        card2.innerText = this.fight2.getName();
        card2.classList.add('card2');
        health2.innerText = `Health: ${this.fight2.getHealth()}`;

        for(const skill of this.fight2.getSkillMoves()){
            console.log(skill.getSkillName());
            const skillbtn = document.createElement('button');
            skillbtn.innerText = skill.getSkillName();

            skillDiv2.append(skillbtn);
        }
        
        card1.append(health1, skillDiv1);
        card2.append( health2, skillDiv2);
        container.append(card1, card2);
         
    }
}