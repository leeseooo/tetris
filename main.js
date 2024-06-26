// access drawing context
const canvas = document.getElementById('board');
const context = canvas.getContext('2d');

// calculate canvas size
context.canvas.width = COLS * BLOCK_SIZE;
context.canvas.height = ROWS * BLOCK_SIZE;

context.scale(BLOCK_SIZE, BLOCK_SIZE);

// -------------------------

const board = new Board();

function play() {
  board.reset();
  const piece = new Piece(context);
  piece.draw();

  board.piece = piece;
}

// -------------------------

const moves = {
  [KEY.LEFT]: (pos) => ({ ...pos, x: pos.x - 1 }),
  [KEY.RIGHT]: (pos) => ({ ...pos, x: pos.x + 1 }),
  [KEY.DOWN]: (pos) => ({ ...pos, y: pos.y + 1 }),
};

document.addEventListener('keydown', (event) => {
  if (moves[event.keyCode]) {
    event.preventDefault();

    const p = moves[event.keyCode](board.piece);
    if (board.valid(p)) {
      board.piece.move(p);

      // clear the old position before drawing
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      board.piece.draw();
    }
  }
});
