// Given two different positions on a chess board, find the least number of moves it would take a knight to get from one to the other. The positions will be passed as two arguments in algebraic notation. For example, knight("a3", "b5") should return 1.

// The knight is not allowed to move off the board. The board is 8x8.

// For information on knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29

// For information on algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_%28chess%29

// (Warning: many of the tests were generated randomly. If any do not work, the test cases will return the input, output, and expected output; please post them.)

const chessBoard = [
    ['a1','b1','c1','d1', 'e1', 'f1', 'g1', 'h1'], 
    ['a2','b2','c2','d2', 'e2', 'f2', 'g2', 'h2'], 
    ['a3','b3','c3','d3', 'e3', 'f3', 'g3', 'h3'], 
    ['a4','b4','c4','d4', 'e4', 'f4', 'g4', 'h4'], 
    ['a5','b5','c5','d5', 'e5', 'f5', 'g5', 'h5'],
    ['a6','b6','c6','d6', 'e6', 'f6', 'g6', 'h6'],
    ['a7','b7','c7','d7', 'e7', 'f7', 'g7', 'h7'], 
    ['a8','b8','c8','d8', 'e8', 'f8', 'g8', 'h8']
]

let possibleMoves = [
    [1, 2],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [2,1],
    [-2,-1],
    [-2,1],
    [2,-1]
]

const getAllLandingPositions = (position, possibleMoves) => {
    const arrOfMoves = possibleMoves.map(move => {
        let [moveX,moveY] = move;
        let [positionX, positionY] = position;
        return [moveX + positionX, moveY + positionY]
    })
    return arrOfMoves
}

const findValidMoves = (landingPositions) => {
    return landingPositions.filter(move => {
        let [moveX, moveY] = move
        const validPosX = moveX >= 0 && moveX <= 7
        const validPosY = moveY >= 0 && moveY <= 7
        return validPosX && validPosY
    })
}

const getCoordonatesFromField = (fieldCode, chessBoard) => {
    for (let row = 0; row < chessBoard.length; row++) {
        const rows = chessBoard[row];
        for (let column = 0; column < rows.length; column++) {
            if(chessBoard[row][column] === fieldCode) {
                return [row, column]
            }
        }
    }
    
}

const findCoordinates = (endFieldCode, chessBoard) => {
    const validMoves = findValidMoves(endFieldCode)
    console.log(validMoves, 'start');
}

const positions = getCoordonatesFromField('d5', chessBoard)

console.log('possible moves', findValidMoves(positions));

// find coodinates of finish
//  check if the finish coordinates is in validMoves array