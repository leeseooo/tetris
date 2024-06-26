class Piece {
  x;
  y;
  color;
  shape;
  context;

  constructor(context) {
    this.context = context;
    this.init();
  }

  init() {
    this.color = 'blue';
    this.shape = [
      [2, 0, 0],
      [2, 2, 2],
      [0, 0, 0],
    ];

    // starting position
    this.x = 3;
    this.y = 0;
  }

  draw() {
    this.context.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.context.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  move(position) {
    this.x = position.x;
    this.y = position.y;
  }
}
