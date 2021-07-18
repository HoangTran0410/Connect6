import { CellValue } from "./board.js"

export const Player = {
    BLACK: CellValue.BLACK,
    White: CellValue.WHITE,
}

export default class State {
    constructor(board = new Board(), player = Player.BLACK) {
        this.board = board
        this.player = player
    }

    clone() {}
    isEquals(ptherState) {}
    isTerminal() {}
    hasLegalMoves() {}
    getLegalMoves() {}
    nextState(move) {}
    winner() {}
}
