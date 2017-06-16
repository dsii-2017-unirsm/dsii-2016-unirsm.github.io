// Davide Onestini @davideonestini © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON | San Marino | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

var padding, p, e;

var col_1, col_2, col_3, col_b_1, col_b_2, col_b_3, col_t_1, col_t_2, col_t_3;

var url = "https://spreadsheets.google.com/feeds/list/1MHG6nE-AxbXPvJpwoavV1mE0Rz9xha-auG20KqYboa8/od6/public/values?alt=json";

var dati = [];

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotSpreadsheet);
  colorMode(RGB, 255, 255, 255, 100);
  col_1 = color(192,41,66, 50);
  col_b_1 = color(192,41,66, 10);
  col_t_1 = color(192,41,66, 100);
  col_2 = color(217,91,67, 50);
  col_b_2 = color(217,91,67, 10);
  col_t_2 = color(217,91,67, 100);
  col_3 = color(236,208,120, 50);
  col_b_3 = color(236,208,120, 10);
  col_t_3 = color(236,208,120, 100);
  rectMode(CORNER);

  println(height);
  println(windowHeight);
}

function draw() {

  padding = width/(dati.length+3);
  p = padding*.2;
  e = 20;

  background(51,51,51);

  // Title
  push();
  translate(width/30, height/50);
  rotate(-PI/2);
  fill(255);
  textSize(30);
  noStroke();
  textAlign(RIGHT, BOTTOM);
  text("deaths caused", 0, 0);
  text("by respiratory diseases", 0, height/30);
  pop();

  // Legend
  push();
  translate(width/50, height/50*49);
  rotate(-PI/2);
  fill(255);
  textSize(14);
  noStroke();
  textAlign(LEFT, BOTTOM);
  text("legend (scale factor: 0.1%)", 0, 0);
  textSize(8);
  textAlign(LEFT, TOP);
  text("deaths caused by respiratory diseases (%)", height/75*1.5, height/75);
  text("deaths caused by respiratory diseases in people aged > 65 (%)", height/75*1.5, height/75+height/75*1.5);
  text("deaths caused by respiratory diseases in people aged < 65 (%)", height/75*1.5, height/75+height/75*1.5*2);
  fill(192,41,66);
  rect(0, height/75, p, p);
  fill(217,91,67);
  rect(0, height/75+height/75*1.5, p, p);
  fill(236,208,120);
  rect(0, height/75+height/75*1.5*2, p, p);
  pop();

  // Data Visualization
  for (var i = 0; i < dati.length; i++) {

    push();
    translate(width/20, 0);

    textAlign(RIGHT, BOTTOM);
    push();
    translate(e + padding + (i * padding) - padding*0.1, height/50);
    rotate(-PI/2);
    fill(255);
    textSize(8);
    text(dati[i].country, 0,0);
    pop();
    noStroke();

    // Deaths caused by respiratory diseases (%)
    fill(col_b_1);
    rect(e + padding + i*padding, 0, p, height);

    fill(col_1);

    if ( mouseX >= e + padding + (i+1.5)*padding && mouseX <= e + padding + (i+1.5)*padding + p &&
    mouseY >= 0 && mouseY <= height) {
      fill(255);
      textAlign(LEFT, TOP);
      textSize(14);
      text(dati[i].country, -50, height/2);
      fill(col_t_1);
      textSize(12);
      text("total", -50, height/2+22);
      textSize(20);
      text(dati[i].deathspercent+" %", -50, height/2+34);
    }

    rect(e + padding + i*padding, 0, p, dati[i].deathspercent*height);
    // rettangolo.mouseOver(changeStyle);


    // Deaths caused by respiratory diseases in people aged > 65 (%)
    fill(col_b_2);
    rect(e + padding + i*padding + p, 0, p, height);

    fill(col_2);

    if ( mouseX >= e + padding + (i+1.5)*padding + p && mouseX <= e + padding + (i+1.5)*padding + p*2 &&
    mouseY >= 0 && mouseY <= height) {
      fill(255);
      textAlign(LEFT, TOP);
      textSize(14);
      text(dati[i].country, -50, height/2);
      fill(col_t_2);
      textSize(12);
      text("aged > 65", -50, height/2+22);
      textSize(20);
      text(dati[i].overdeathspercent+" %", -50, height/2+34);
    }

    rect(e + padding + i*padding + p, 0, p, dati[i].overdeathspercent*height);

    // Deaths caused by respiratory diseases in people aged < 65 (%)
    fill(col_b_3)
    rect(e + padding + i*padding + p*2, 0, p, height);

    fill(col_3);

    if ( mouseX >= e + padding + (i+1.5)*padding + p*2 && mouseX <= e + padding + (i+1.5)*padding + p*3 &&
    mouseY >= 0 && mouseY <= height) {
      fill(255);
      textAlign(LEFT, TOP);
      textSize(14);
      text(dati[i].country, -50, height/2);
      fill(col_t_3);
      textSize(12);
      text("aged < 65", -50, height/2+22);
      textSize(20);
      text(dati[i].underdeathspercent+" %", -50, height/2+34);
    }

    rect(e + padding + i*padding + p*2, 0, p, dati[i].underdeathspercent*height);

    pop();

  }
}

function gotSpreadsheet(countries) {
  // println(countries.feed.entry.length);
  for (var i = 0; i < countries.feed.entry.length; i++) {
    var country = {
                  "country": countries.feed.entry[i].gsx$country.$t,
                  "deathspercent": countries.feed.entry[i].gsx$deathspercent.$t,
                  "overdeathspercent": countries.feed.entry[i].gsx$overdeathspercent.$t,
                  "underdeathspercent": countries.feed.entry[i].gsx$underdeathspercent.$t,
              }
              // println(country);
    dati.push(country);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
