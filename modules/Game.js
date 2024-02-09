export default class Game {
    #players

    constructor() {
        this.#players = []
    }

    addPlayer(players) {
        return this.#players.push(...players)
    }
}