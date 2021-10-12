const chessBoard = [
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
]

const convertPoint = (loc) => {
    const col = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8
    }
    const letter = loc.charAt(0)
    const num = loc.charAt(1)
    return [Number(num), col[letter]]
}

const possibleMoves = (position) => {
    const moves = []
    moves.push([position[0] + 1, position[1] - 2])
    moves.push([position[0] + 1, position[1] + 2])
    moves.push([position[0] - 1, position[1] - 2])
    moves.push([position[0] - 1, position[1] + 2])
    moves.push([position[0] + 2, position[1] - 1])
    moves.push([position[0] + 2, position[1] + 1])
    moves.push([position[0] - 2, position[1] - 1])
    moves.push([position[0] - 2, position[1] + 1])
    return moves
}

function shortestPath(start, end) {
    start = convertPoint(start)
    end = convertPoint(end)

    for (let i = 1; i < chessBoard.length; i++) {
        const element = chessBoard[i];
        for (let j = 1; j < element.length; j++) {
            const el = element[j];
            if (j === start[0]) {
                console.log(j);
            }
        }
    }
}
shortestPath('a3', 'b5');