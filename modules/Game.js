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
            const skillbtn = document.createElement('button');
            skillbtn.classList.add('playerOneSkillBtn')
            skillbtn.innerText = skill1.getSkillName();
            skillDiv1.append(skillbtn);

            this.btnListener(skillbtn, health2)
        }
        
        card2.innerText = this.#players[1].getPlayerName();
        card2.classList.add('card2');
        health2.innerText = `Health: ${this.#players[1].getFighter().getHealth()}`;

        for(const skill of this.#players[1].getFighter().getSkillMoves()){
            const skillbtn = document.createElement('button');
            skillbtn.classList.add('playerTwoSkillBtn')
            skillbtn.innerText = skill.getSkillName();
            skillDiv2.append(skillbtn);

            this.btnListener(skillbtn, health1)
        }
        
        card1.append(health1, skillDiv1);
        card2.append( health2, skillDiv2);
        container.append(card1, card2);
        

    }

    btnListener(skillBtn, healthEl) {
        skillBtn.addEventListener('click', event => {
            event.preventDefault()
            const playerOneFighter = this.#players[0].getFighter()
            const playerTwoFighter = this.#players[1].getFighter()

            if(playerOneFighter.getSkillMoves().find(skill => skill.getSkillName() === skillBtn.innerText)) {
                playerOneFighter.castSkill(skillBtn.innerText, playerTwoFighter)
                this.updateGameInfo(healthEl, playerTwoFighter)
                this.disableOpponentsButton()
            }

            if(playerTwoFighter.getSkillMoves().find(skill => skill.getSkillName() === skillBtn.innerText)) {
                playerTwoFighter.castSkill(skillBtn.innerText, playerOneFighter)
                this.updateGameInfo(healthEl, playerOneFighter)
                this.disableOpponentsButton()
            }
        })
    }

    updateGameInfo(healthEl, fighter) {
        console.log(fighter);
        healthEl.innerText = `Health: ${fighter.getHealth()}`;
        console.log(fighter.getHealth());
        if(fighter.getHealth() <= 0 ){
            console.log('KO');
            healthEl.innerText = 'KO';
        }
    }

    disableOpponentsButton() {
        const playerOneBtns = document.querySelectorAll('.playerOneSkillBtn')
        const playerTwoBtns = document.querySelectorAll('.playerTwoSkillBtn')

        

        // for(const player of this.#players) {
        //     if(player.getTurnToAttack()) {

        //         player.toggleTurnToAttack();
        //     }
        // }

        // if(this.#players[0].getTurnToAttack()) {
        //     playerOneBtns.forEach(btn => btn.disabled = true)
        //     playerTwoBtns.forEach(btn => btn.disabled = false)
        //     this.#players[0].toggleTurnToAttack()
        //     this.#players[1].toggleTurnToAttack()
        // }
        // else if(this.#players[1].getTurnToAttack()) {
        //     playerTwoBtns.forEach(btn => btn.disabled = true)
        //     playerOneBtns.forEach(btn => btn.disabled = false)
        //     this.#players[1].toggleTurnToAttack()
        //     this.#players[0].toggleTurnToAttack()
        // }
    }
}