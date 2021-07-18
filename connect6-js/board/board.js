import Move from "./move.js"

export const CellValue = {
    BLACK: -1,
    WHITE: 1,
    EMPTY: 0,
}

export default class Board {
    static ROW = 19
    static COL = 19

    constructor() {
        this.cells = []
        for (let row = 0; row < Board.ROW; row++) {
            this.cells[row] = []
            for (let col = 0; col < Board.COL; col++) {
                this.cells[row][col] = CellValue.EMPTY
            }
        }

        this.cells[9][9] = CellValue.BLACK
    }

    clone() {
        let board = new Board()
        for (let row = 0; row < Board.ROW; row++) {
            for (let col = 0; col < Board.COL; col++) {
                board.cells[row][col] = this.cells[row][col]
            }
        }
        return board
    }
    isEquals(otherBoard) {
        for (let row = 0; row < Board.ROW; row++) {
            for (let col = 0; col < Board.COL; col++) {
                if (otherBoard.cells[row][col] != this.cells[row][col])
                    return false
            }
        }
        return true
    }
    makeMove(player, move1, move2) {}
    isLegalMove(player, move1, move2) {
        return (
            this._isLegalMove(player, move1) && this._isLegalMove(player, move2)
        )
    }
    _isLegalMove(player, move) {
        return this.cells[move.rol][move.col] == CellValue.EMPTY
    }
    getLegalMoves(player) {
        let legalMoves = []
        for (let row = 0; row < Board.ROW; row++) {
            for (let col = 0; col < Board.COL; col++) {
                if (this.cells[row][col] == CellValue.EMPTY)
                    legalMoves.push(new Move(row, col))
            }
        }
        return legalMoves
    }
    display() {
        console.table(this.cells)
    }
}
