// EARTHbirint
// Davide Onestini @davideonestini © 2017 MIT License
// 10print variation in p5.js | San Marino | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// Inspired by https://github.com/CodingTrain/Rainbow-Code/tree/master/CodingChallenges/CC_10_Maze_DFS_p5.js
// "Maze Generator" by @shiffman (https://github.com/shiffman)

var grid_w = 1010;
var grid_h = 510;

var cols = 101;
var rows = 51;

var highlight_f = 1;
var visited_f = 1.5;
var empty_f = 3;

var c_1, c_1_v, c_2, c_2_v, c_3, c_3_v, c_empty, c_bg;

var cell_w;
var cell_h;

var current, current2, current3;
var prova;

var grid = [];
var stack = [];
var stack2 = [];
var stack3 = [];

var url = "https://api.myjson.com/bins/1gtjab";

var empty_index = [];

function setup() {
  var canvas = createCanvas(grid_w, grid_h);
  var canvas_x = (windowWidth - grid_w) / 2;
  var canvas_y = (windowHeight - grid_h) / 2;
  canvas.position(canvas_x, canvas_y);

  colorMode(RGB, 255, 255, 255, 100);
  c_1 = color(221, 55, 139, 100); // #DD378B
  c_1_v = color(221, 55, 139, 40);
  c_2 = color(166, 69, 206, 100); // #A645CE
  c_2_v = color(166, 69, 206, 40);
  c_3 = color(2, 79, 165, 100); // #024FA5
  c_3_v = color(2, 79, 165, 40);
  c_empty = color(48, 48, 48, 100); // #404040
  c_bg = color(21, 21, 21, 100); // #151515

  frameRate(1);

  cell_w = round(grid_w/cols);
  cell_h = round(grid_h/rows);

  // Create grid cells
  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
       var cell = new Cell(x, y);
       grid.push(cell);
    }
  }

  // JSON file load function
  load();

  // Set starting points
  current = grid[floor(grid.length/2-4)];
  current2 = grid[floor(grid.length/2-2)];
  current3 = grid[floor(grid.length/2)];
}

function draw() {

  // Enough time for JSON file to load properly
  if(frameCount == 2){
    frameRate(120);
  }

  background(c_bg);

  // Show basic grid
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  // Get points that have to be empty
  for (var i = 0; i < empty_index.length; i++) {
    prova = grid[empty_index[i]];
    prova.empty = true;
  }

  // Mark current point as visited
  current.visited = true;
  current2.visited2 = true;
  current3.visited3 = true;

  // Highlight current point
  current.highlight();
  current2.highlight2();
  current3.highlight3();

  // Let current point check for empty neighbour points and select a random one
  var next = current.checkNeighbours();
  var next2 = current2.checkNeighbours2();
  var next3 = current3.checkNeighbours3();

    // Set next point as new current
    // Mark it as visited and stack it in the visited array
    // If there are no empty neighbours, go back by removing a point from the stack
    if (next) {
      next.visited = true;
      stack.push(current);
      current = next;
    } else if (stack.length > 0) {
      current = stack.pop();
    }

    if (next2) {
      next2.visited2 = true;
      stack2.push(current2);
      current2 = next2;
    } else if (stack2.length > 0) {
      current2 = stack2.pop();
    }

    if (next3) {
      next3.visited3 = true;
      stack3.push(current3);
      current3 = next3;
    } else if (stack3.length > 0) {
      current3 = stack3.pop();
    }
}

function load() {
  loadJSON(url, function gotData(data) {
    var mydata = data;
    for (var i = 0; i < mydata.length; i++) {
      var p = mydata[i].point;
      empty_index.push(parseInt(p));
    }
  });
}

// Function to 2D map every cell (x = column, y = row)
function index(i, j) {
  if (i < 0 || i > cols-1 || j < 0 || j > rows-1) {
    return -1;
  }
  return  i + j * cols;
}

// Creation of the grid made out of cells
function Cell(x, y) {
  this.x = x;
  this.y = y;

  this.visited = false;
  this.visited2 = false;

  // Check neighbours for current
  this.checkNeighbours = function() {
    var neighbours = [];

    var top = grid[index(x, y-1)];
    var right = grid[index(x+1, y)];
    var bottom = grid[index(x, y+1)];
    var left = grid[index(x-1, y)];

    // Check that every top, right, bottom, left has not been visited by anyone nor it is empty
    if (top && !top.visited && !top.visited2 && !top.visited3 && !top.empty) { neighbours.push(top); }
    if (right && !right.visited && !right.visited2 && !right.visited3 && !right.empty) { neighbours.push(right); }
    if (bottom && !bottom.visited && !bottom.visited2 && !bottom.visited3 && !bottom.empty) { neighbours.push(bottom); }
    if (left && !left.visited && !left.visited2 && !left.visited3 && !left.empty) { neighbours.push(left); }

    // Choose a random neighbour
    if (neighbours.length > 0) {
       var r = floor(random(0, neighbours.length));
       return neighbours[r];
    } else {
      return undefined;
    }
  }

  // Check neighbours for current2
  this.checkNeighbours2 = function() {
    var neighbours2 = [];

    var top = grid[index(x, y-1)];
    var right = grid[index(x+1, y)];
    var bottom = grid[index(x, y+1)];
    var left = grid[index(x-1, y)];

    if (top && !top.visited && !top.visited2 && !top.visited3 && !top.empty) { neighbours2.push(top); }
    if (right && !right.visited && !right.visited2 && !right.visited3 && !right.empty) { neighbours2.push(right); }
    if (bottom && !bottom.visited && !bottom.visited2 && !bottom.visited3 && !bottom.empty) { neighbours2.push(bottom); }
    if (left && !left.visited && !left.visited2 && !left.visited3 && !left.empty) { neighbours2.push(left); }

    if (neighbours2.length > 0) {
       var r = floor(random(0, neighbours2.length));
       return neighbours2[r];
    } else {
      return undefined;
    }
  }

  // Check neighbours for current3
  this.checkNeighbours3 = function() {
    var neighbours3 = [];

    var top = grid[index(x, y-1)];
    var right = grid[index(x+1, y)];
    var bottom = grid[index(x, y+1)];
    var left = grid[index(x-1, y)];

    if (top && !top.visited && !top.visited2 && !top.visited3 && !top.empty) { neighbours3.push(top); }
    if (right && !right.visited && !right.visited2 && !right.visited3 && !right.empty) { neighbours3.push(right); }
    if (bottom && !bottom.visited && !bottom.visited2 && !bottom.visited3 && !bottom.empty) { neighbours3.push(bottom); }
    if (left && !left.visited && !left.visited2 && !left.visited3 && !left.empty) { neighbours3.push(left); }

    if (neighbours3.length > 0) {
       var r = floor(random(0, neighbours3.length));
       return neighbours3[r];
    } else {
      return undefined;
    }
  }

  this.highlight = function() {
    var x = this.x*cell_w;
    var y = this.y*cell_h;
    var highlight_d = cell_w/highlight_f;
    noStroke();
    fill(c_1);
    ellipse(x+cell_w/2, y+cell_w/2, highlight_d, highlight_d);
  }

  this.highlight2 = function() {
    var x = this.x*cell_w;
    var y = this.y*cell_h;
    var highlight_d = cell_w/highlight_f;
    noStroke();
    fill(c_2);
    ellipse(x+cell_w/2, y+cell_w/2, highlight_d, highlight_d);
  }

  this.highlight3 = function() {
    var x = this.x*cell_w;
    var y = this.y*cell_h;
    var highlight_d = cell_w/highlight_f;
    noStroke();
    fill(c_3);
    ellipse(x+cell_w/2, y+cell_w/2, highlight_d, highlight_d);
  }

  this.show = function() {
    var x = this.x*cell_w;
    var y = this.y*cell_h;
    var visited_d = cell_w/visited_f;
    var empty_d = cell_w/empty_f;
    noStroke();
    fill(c_empty);
    ellipse(x+cell_w/2, y+cell_w/2, empty_d, empty_d);

    if (this.visited) {
      noStroke();
      fill(c_1_v);
      ellipse(x+cell_w/2, y+cell_w/2, visited_d, visited_d);
    }

    if (this.visited2) {
      noStroke();
      fill(c_2_v);
      ellipse(x+cell_w/2, y+cell_w/2, visited_d, visited_d);
    }

    if (this.visited3) {
      noStroke();
      fill(c_3_v);
      ellipse(x+cell_w/2, y+cell_w/2, visited_d, visited_d);
    }
  }
}
