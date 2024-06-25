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
  console.table(board.grid);
}
