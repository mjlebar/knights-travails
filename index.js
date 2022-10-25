// function makeBoard() {
//   let board = [];

//   for (let i = 0; i < 8; i++) {
//     let row = [];
//     for (let j = 0; j < 8; j++) {
//       row.push([i, j]);
//     }
//     board.push(row);
//   }
//   return board;
// }

// const board = makeBoard();
// console.log(board);
//Don't think this is actually necessary

class Knight {
  constructor(spot) {
    this.spot = spot;
  }

  possibleMoves() {
    let moves = [];
    let r = this.spot[0];
    let c = this.spot[1];
    if (r + 1 < 8) {
      if (c + 2 < 8) {
        moves.push([r + 1, c + 2]);
      }
      if (c - 2 >= 0) {
        moves.push([r + 1, c - 2]);
      }
    }
    if (r - 1 >= 0) {
      if (c + 2 < 8) {
        moves.push([r - 1, c + 2]);
      }
      if (c - 2 >= 0) {
        moves.push([r - 1, c - 2]);
      }
    }

    if (r + 2 < 8) {
      if (c + 1 < 8) {
        moves.push([r + 2, c + 1]);
      }
      if (c - 1 >= 0) {
        moves.push([r + 2, c - 1]);
      }
    }
    if (r - 2 >= 0) {
      if (c + 1 < 8) {
        moves.push([r - 2, c + 1]);
      }
      if (c - 1 >= 0) {
        moves.push([r - 2, c - 1]);
      }
    }
    return moves;
  } //there are eight possible moves a knight can make... however, before we can add them, we need to verify they don't take us off the board. That's what the if statements in here do
}

// console.log(knight.possibleMoves());

function knightMoves(start, end) {
  let queue = [[start]]; //queue of spots to be called

  while (queue.length > 0) {
    const next = queue.shift();

    let possiblePath = checkMoves(next);

    if (possiblePath) return possiblePath;
  } //runs the queue until we find the possible path... since there's always a possible path this should always complete. technically we could have put in something like while(true)

  function checkMoves(pathSoFar) {
    const last = pathSoFar[pathSoFar.length - 1];
    if (last[0] === end[0] && last[1] === end[1]) {
      return pathSoFar;
    } else {
      let knight = new Knight(last);
      let moves = knight.possibleMoves();
      for (let move of moves) {
        queue.push(pathSoFar.concat([move]));
      }
      return 0;
    }
  } //defined in scope of function moves so it has access to queue variable... given a possible path, returns the path if it ends at the target square, otherwise adds possible moves from the last square in the path, adds all the resulting paths to the queue and returns 0
} //Performs a BFS of possible moves until we find a path from the start to the end. Returns that path as an array

console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([3, 3], [4, 3]));
