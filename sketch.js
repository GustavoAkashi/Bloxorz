let grid;
let movements = 0;

function setup() {
  createCanvas(800,400);
  grid = [
          [-1, -1, -1, -1, -1, -1, -1],
          [-1, 10, 0, 0, 0, 0, -1],
          [-1, 0, 0, 0, 0, 0, -1],
          [-1, 0, 0, 0, 0, 0, -1],
          [-1, 0, 0, 0, 0, 0, -1],
          [-1, 0, 0, 0, 0, 0, -1],
          [-1, 0, 0, 0, 0, 9, -1],
          [-1, -1, -1, -1, -1, -1, -1]
        ];
}

function emptyGrid() {
  return [
    [-1, -1, -1, -1, -1, -1, -1],
    [-1, 10, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 9, -1],
    [-1, -1, -1, -1, -1, -1, -1]
  ];
}

function moveRight(grid) {
  movements++;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 10) {
        grid[i][j] = 0;
        checkGameCondition(i+1, j, 11);
        checkGameCondition(i+2, j, 11);
        return grid;
      } else if (grid[i][j] === 11 && grid[i+1][j] === 11) {
        grid[i][j] = 0;
        grid[i+1][j] = 0;
        checkGameCondition(i+2, j, 10);
        return grid;
      } else if (grid[i][j] === 11 && grid[i][j+1] === 11) {
        grid[i][j] = 0;
        grid[i][j+1] = 0;
        checkGameCondition(i+1, j, 11);
        checkGameCondition(i+1, j+1, 11);
        return grid;
      }
    }
  }
}

function moveLeft(grid) {
  movements++;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 10) {
        grid[i][j] = 0;
        checkGameCondition(i-1, j, 11);
        checkGameCondition(i-2, j, 11);
        return grid;
      } else if (grid[i][j] === 11 && grid[i+1][j] === 11) {
        grid[i][j] = 0;
        grid[i+1][j] = 0;
        checkGameCondition(i-1, j, 10);
        return grid;
      } else if (grid[i][j] === 11 && grid[i][j+1]) {
        grid[i][j] = 0;
        grid[i][j+1] = 0;
        checkGameCondition(i-1,j, 11);
        checkGameCondition(i-1,j+1, 11);
        return grid;
      }
    }
  }
}

function moveDown(grid) {
  movements++;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 10) {
        grid[i][j] = 0;
        checkGameCondition(i, j+1, 11);
        checkGameCondition(i, j+2, 11);
        return grid;
      } else if (grid[i][j] === 11 && grid[i][j+1] === 11) {
        grid[i][j] = 0;
        grid[i][j+1] = 0;
        checkGameCondition(i, j+2, 10);
        return grid;
      } else if (grid[i][j] === 11 && grid[i+1][j] === 11) {
        grid[i][j] = 0;
        grid[i+1][j] = 0;
        checkGameCondition(i, j+1, 11);
        checkGameCondition(i+1, j+1, 11);
        return grid;
      }
    }   
  }
}

function moveUp(grid) {
  movements++;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 10) {
        grid[i][j] = 0;
        checkGameCondition(i, j-1, 11);
        checkGameCondition(i, j-2, 11);
        return grid;
      } else if (grid[i][j] === 11 && grid[i][j+1] === 11) {
        grid[i][j] = 0;
        grid[i][j+1] = 0;
        checkGameCondition(i, j-1, 10);
        return grid;
      } else if (grid[i][j] === 11 && grid[i+1][j] === 11) {
        grid[i][j] = 0;
        grid[i+1][j] = 0;
        checkGameCondition(i, j-1, 11);
        checkGameCondition(i+1, j-1, 11);
        return grid;
      }
    }   
  }
}

function checkGameCondition(i, j, state) {
  if (grid[i][j] === -1) {
    window.alert("Você perdeu !");
    grid = emptyGrid();
    movements = 0;
  } else if (grid[i][j] === 9 && state === 10) {
    window.alert("Você Venceu !");
    grid = emptyGrid();
    movements = 0;
  } else if (grid[i][j] === 9 && state === 11) {
    grid[i][j] = state;
  } else {
    grid[i][j] = state;
    grid[searchGoal(emptyGrid(), 0)][searchGoal(emptyGrid(), 1)] = 9;
  }
}

function searchGoal (grid, index) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 9) {
        if (index === 0) {
          return i;
        } else if (index === 1) {
          return j;
        }
      }
    }
  }
}


function keyPressed() {
  if (keyCode ==  RIGHT_ARROW) {
    moveRight(grid);
  } else if (keyCode == LEFT_ARROW) {
    moveLeft(grid);
  } else if (keyCode == DOWN_ARROW) {
    moveDown(grid);
  } else if(keyCode == UP_ARROW) {
    moveUp(grid);
  }
}

function drawGrid() {
  let w = 50;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        fill(52);
        strokeWeight(2);
        stroke(0);
        rect(i*w + w, j*w+w, w, w);
      } else if (grid[i][j] === 10 || grid[i][j] === 11) {
        fill(111,66,66);
        strokeWeight(2);
        stroke(0);
        rect(i*w + w, j*w+w, w, w);
      } else if (grid[i][j] === -1) {
        fill(165,42,42);
        strokeWeight(2);
        stroke(0);
        rect(i*w + w, j*w+w, w, w);
      } else if (grid[i][j] === 9) {
        fill(0);
        strokeWeight(2);
        stroke(0);
        rect(i*w + w, j*w+w, w, w);
      }
    }
  }
}
function drawArrayIndex() {
  let w = 50;
  for (let i = 0; i < grid.length + 1; i++) {
    noFill();
    strokeWeight(2);
    stroke(0);
    rect(i*w, w, w, w);
    
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255, 0, 0);
    noStroke();
    text(i, i*w + w/2, w/2);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length + 1; j++) {
    noFill();
    strokeWeight(2);
    stroke(0);
    rect(w, j*w, w, w);
    
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255, 0, 0);
    noStroke();
    text(j, w/2, j*w+w/2);
    }
  }
}

function drawPoints() {
  fill(255);
  strokeWeight(2);
  stroke(0);
  rect(470, 50, 200, 200);


  textAlign(LEFT);
  textSize(16);
  textFont('Georgia')
  fill(0);
  noStroke(0);
  text("Movimentos: "+movements, 480,70)
  
}

function draw() {
  background(255);
  drawGrid();
  drawArrayIndex();
  drawPoints();
}

