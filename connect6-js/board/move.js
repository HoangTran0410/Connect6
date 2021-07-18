export default class Move {
    static COLUMN_NAME = "abcdefghijklmnopqrs"

    constructor(row, col) {
        this.row = row
        this.col = col
    }

    static toNotation(/**@type Move*/ move) {
        return Move.COLUMN_NAME[move.col] + (move.row + 1)
    }

    static toMove(/**@type String*/ notation) {
        let col = Number.parseInt(
            Move.COLUMN_NAME.indexOf(notation[0].toLowerCase())
        )
        let row = Number.parseInt(notation.slice(1)) - 1
        return new Move(row, col)
    }
}
