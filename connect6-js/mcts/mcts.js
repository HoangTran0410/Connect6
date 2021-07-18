import State from "../board/state.js"
import Node from "./node.js"

export default class MCTS {
    // normal search mode
    static runSearch(state = new State(), timeout = 1000) {
        let root = new Node(state, null, 0)

        let doneTick = Date.now() + timeout
        while (Date.now() < doneTick) {
            let node = root

            // Phase 1: Selection
            while (node.isFullyExpanded() && node.hasChildNode()) {
                node = node.selectChild(root.state.player)
            }

            // Phase 2: Expansion
            if (!node.isFullyExpanded()) {
                node = node.expandChild()
            }

            // Phase 3: Simulation
            let reward = node.simulate(root.state.player)

            // Phase 4: BackPropagation
            node.backPropagate(reward)
        }

        return MCTS.bestMove(node)
    }

    static bestMove(/**@type Node */ node) {
        let bestMove = null

        let max = Number.MIN_VALUE
        for (let childNode of node.childNodes) {
            if (childNode.visits > max) {
                bestMove = childNode.parentMove
                max = childNode.visits
            }
        }

        return bestMove
    }
}
