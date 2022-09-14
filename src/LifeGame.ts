export type Grid = Cell[][];

class Cell {
  status: 0 | 1; // 0 dead, 1 live
  row: number;
  column: number;

  constructor(status: 0 | 1, row: number, column: number) {
    this.status = status;
    this.row = row;
    this.column = column;
  }

  setNextState(liveNeighbours: number) {
    // 游戏规则：
    // - Any live cell with two or three live neighbours survives.
    // - Any dead cell with three live neighbours becomes a live cell.
    // - All other live cells die in the next generation. Similarly, all other dead cells stay dead.

    if (this.status === 1) {
      if (!(liveNeighbours === 2 || liveNeighbours === 3)) {
        this.status = 0;
      }
    } else {
      if (liveNeighbours === 3) {
        this.status = 1;
      }
    }
  }
}

class LifeGame {
  rows: number;
  columns: number;
  grid: Grid;
  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.grid = [];
  }

  initRandomly() {
    return initGrid(this.rows, this.columns, this.grid);
  }

  initWithDeadCells() {
    return initGrid(this.rows, this.columns, this.grid, 0);
  }

  iterate(): Grid {
    const rows = this.rows;
    const columns = this.columns;
    const previousGrid = this.grid;
    const nextGrid: Cell[][] = [];
    for (var i = 0; i < rows; i++) {
      nextGrid[i] = [];
      for (var j = 0; j < columns; j++) {
        const cell = new Cell(previousGrid[i][j].status, i, j);
        cell.setNextState(
          this.getAliveNeighbors(previousGrid, i, j, cell.status)
        );
        nextGrid[i][j] = cell;
      }
    }
    this.grid = nextGrid;
    return nextGrid;
  }

  getAliveNeighbors(grid: Grid, x: number, y: number, status: 0 | 1) {
    let lives = 0;
    for (var i = -1; i <= 1; i++) {
      for (var j = -1; j <= 1; j++) {
        if (grid[x + i] && grid[x + i][y + j]) {
          lives = lives + grid[x + i][y + j].status;
        }
      }
    }
    return lives - status;
  }
}

function initGrid(
  rows: number,
  columns: number,
  grid: Grid,
  initStatus?: 0 | 1
) {
  for (var i = 0; i < rows; i++) {
    grid[i] = grid[i] || [];
    for (var j = 0; j < columns; j++) {
      const state = initStatus === 0 ? initStatus : random0or1();
      grid[i][j] = new Cell(state, i, j);
    }
  }
  return grid;
}

function random0or1() {
  return Math.random() > 0.5 ? 1 : 0;
}

export default LifeGame;
