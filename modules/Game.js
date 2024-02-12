export default class Game {
    #players;

    constructor(player1, player2) {
        this.#players = [player1, player2]
    }

    createGUI(container){
        const card1 = document.createElement('div');
        const card2 = document.createElement('div');
        const health1 = document.createElement('div');
        const skillDiv1 = document.createElement('div');
        const health2 = document.createElement('div');
        const skillDiv2 = document.createElement('div');
       
        card1.innerText = this.#players[0].getPlayerName();
        card1.classList.add('card1');
        health1.innerText = `Health: ${this.#players[0].getFighter().getHealth()}`;

        for(const skill1 of this.#players[0].getFighter().getSkillMoves()){
            console.log(skill1.getSkillName());
            const skillbtn = document.createElement('button');
            skillbtn.innerText = skill1.getSkillName();
            skillDiv1.append(skillbtn);

            this.btnListener(skillbtn)
        }
        
        card2.innerText = this.#players[1].getPlayerName();
        card2.classList.add('card2');
        health2.innerText = `Health: ${this.#players[1].getFighter().getHealth()}`;

        for(const skill of this.#players[1].getFighter().getSkillMoves()){
            console.log(skill.getSkillName());
            const skillbtn = document.createElement('button');
            skillbtn.innerText = skill.getSkillName();
            skillDiv2.append(skillbtn);

            this.btnListener(skillbtn)
        }
        
        card1.append(health1, skillDiv1);
        card2.append( health2, skillDiv2);
        container.append(card1, card2);
        

    }

    btnListener(skillBtn) {
        skillBtn.addEventListener('click', event => {
            event.preventDefault()

            this.#players[0].getFighter().castSkill(skillBtn.innerText, this.#players[1].getFighter())
            // this.#players[1].getFighter().castSkill(skillBtn.innerText, this.#players[0].getFighter())

        })
    }
}