let gridWidth = 4;
let gridHeight = 4;
let levels = [];
let grid;

const criarMatriz = n => 
        Array(n)
        .fill(undefined)
        .map(x => Array(n).fill(-2));

grid = criarMatriz(15);

function setup() {
    createCanvas(1800, 800);
}

function drawGrid(grid) {   
    let w = 50;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            fill(255);
            strokeWeight(2);
            stroke(0);
            rect(i*w + w, j*w+w, w, w);
        }
    }
}

function drawOptions() {
    fill(255);
    strokeWeight(2);
    stroke(0);
    rect(1700, 0, 200, 800);
  
  
    textAlign(LEFT);
    textSize(16);
    textFont('Georgia')
    fill(0);
    noStroke(0);
    text("Movimentos: "+movements, 480,70)
}

function draw() {
    background(0);
    drawGrid(grid);
    drawOptions();
}