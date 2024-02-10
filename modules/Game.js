export default class Game {
    #players

    constructor(fight1, fight2) {
        console.log(fight1);
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

        card1.innerText = this.fight1.getName();
        card2.innerText = this.fight2.getName();
        card1.classList.add('card1');
        card2.classList.add('card2');
       
        
        container.append(card1, card2);
      
        
    }
}