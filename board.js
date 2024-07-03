class Board {
  grid;
  piece;

  reset() {
    this.grid = this.getEmptyBoard();
  }

  getEmptyBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  valid(piece) {
    return piece.shape?.every((row, dy) => {
      return row.every((value, dx) => {
        const x = piece.x + dx;
        const y = piece.y + dy;
        return this.isEmpty(value) || (this.insideWalls(x) && this.aboveFloor(y));
      });
    });
  }

  isEmpty(p) {
    return p === 0;
  }

  insideWalls(x) {
    return x >= 0 && x < COLS;
  }

  aboveFloor(y) {
    return y >= 0 && y < ROWS;
  }

  rotate(p) {
    const clone = Object.assign({}, p);

    for (let y = 0; y < clone.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [clone.shape[x][y], clone.shape[y][x]] = [clone.shape[y][x], clone.shape[x][y]];
      }
    }
    clone.shape.forEach((row) => row.reverse());
    return clone;
  }
}
