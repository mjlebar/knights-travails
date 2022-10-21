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

const knight = new Knight([3, 3]);

console.log(knight.possibleMoves());
