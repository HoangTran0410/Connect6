import State from "../board/state.js"

export default class Node {
    constructor(state = new State(), parentNode, parentMove) {
        this.state = state
        this.parentMove = parentMove

        // MCTS stuff
        this.visits = 0
        this.wins = 0

        // Tree stuff
        this.parentNode = parentNode
        this.untriedMoves = state.getLegalMoves()
        this.childNodes = []
    }

    selectChild(rootPlayer) {}
    getUcb1(isRootPlayer) {}
    expandChild() {}
    simulate(rootPlayer) {}
    backPropagate(reward) {}

    isFullyExpanded() {
        return this.untriedMoves.length == 0
    }
    hasChildNode() {
        return this.childNodes.length != 0
    }
    isLeaf() {
        return this.isFullyExpanded() && !this.hasChildNode()
    }
}
