export default class Game {
    #players;

    constructor(player1, player2) {
        this.#players = [player1, player2]
    }

    createGUI(container){
        const card1 = document.createElement('div');
        const card2 = document.createElement('div');
        const health1 = document.createElement('p');
        const skillDiv1 = document.createElement('div');
        const health2 = document.createElement('p');
        const skillDiv2 = document.createElement('div');
       
        card1.innerText = this.#players[0].getPlayerName();
        card1.classList.add('playerOneCard', `${this.#players[0].getPlayerName()}`, `${this.#players[0].getFighter().getName().toLowerCase()}`);
        health1.innerText = `Health: ${this.#players[0].getFighter().getHealth()}`;
        

        for(const skill1 of this.#players[0].getFighter().getSkillMoves()){
            const skillbtn = document.createElement('button');
            skillbtn.classList.add(`skill-btn`)
            skillbtn.innerText = skill1.getSkillName();
            skillDiv1.append(skillbtn);

            this.btnListener(skillbtn, health2)
        }
        
        card2.innerText = this.#players[1].getPlayerName();
        card2.classList.add('playerTwoCard', `${this.#players[1].getPlayerName()}`, `${this.#players[1].getFighter().getName().toLowerCase()}`);
        health2.innerText = `Health: ${this.#players[1].getFighter().getHealth()}`;

        for(const skill of this.#players[1].getFighter().getSkillMoves()){
            const skillbtn = document.createElement('button');
            skillbtn.classList.add(`skill-btn`)
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

            if(event.target.closest('.playerOneCard')) {
                playerOneFighter.castSkill(skillBtn.innerText, playerTwoFighter)
                this.updateGameInfo(healthEl, this.#players[1])
                this.disablePlayerButtons(this.#players[0], this.#players[1])
            }

            if(event.target.closest('.playerTwoCard')) {
                playerTwoFighter.castSkill(skillBtn.innerText, playerOneFighter)
                this.updateGameInfo(healthEl, this.#players[0])
                this.disablePlayerButtons(this.#players[1], this.#players[0])
            }
        })
    }

    updateGameInfo(healthEl, player) {
        healthEl.innerText = `Health: ${player.getFighter().getHealth()}`;
        
        if(player.getFighter().getHealth() <= 0 ){
            healthEl.innerText = `Health: 0`;
            this.displayKO(player)
        }
    }

    disablePlayerButtons(player, opponent) {
        
        const playerBtns = document.querySelectorAll(`.${player.getPlayerName()} > div > button`)
        const opponentBtns = document.querySelectorAll(`.${opponent.getPlayerName()} > div > button`)

        player.togglePlayerTurn()
        opponent.togglePlayerTurn()

        if(!player.getPlayerTurn() && !opponent.getPlayerTurn()) opponent.togglePlayerTurn()

        playerBtns.forEach(btn => !player.getPlayerTurn() ? btn.disabled = true : btn.disabled = false)
        opponentBtns.forEach(btn => opponent.getPlayerTurn() ? btn.disabled = false : btn.disabled = true)

    }

    displayKO(defeatedPlayer) {
        const defeatedPlayerEl = document.querySelector(`.${defeatedPlayer.getPlayerName()} > div`)
        defeatedPlayerEl.innerText = 'KO'
    }
}