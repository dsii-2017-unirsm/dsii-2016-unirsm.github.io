// Davide Onestini @davideonestini © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON | San Marino | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

var url = "https://spreadsheets.google.com/feeds/list/1MHG6nE-AxbXPvJpwoavV1mE0Rz9xha-auG20KqYboa8/od6/public/values?alt=json";

var dati = [];

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotSpreadsheet);
  colorMode(RGB);
  rectMode(CORNER);
}

function draw() {

  var padding = width/(dati.length+3);

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
  text("legend (scale factor: 0.2%)", 0, 0);
  textSize(8);
  textAlign(LEFT, TOP);
  text("deaths caused by respiratory diseases (%)", height/75*1.5, height/75);
  text("deaths caused by respiratory diseases in people aged > 65 (%)", height/75*1.5, height/75+height/75*1.5);
  text("deaths caused by respiratory diseases in people aged < 65 (%)", height/75*1.5, height/75+height/75*1.5*2);
  fill(192,41,66);
  rect(0, height/75, padding*.2, padding*.2);
  fill(217,91,67);
  rect(0, height/75+height/75*1.5, padding*.2, padding*.2);
  fill(236,208,120);
  rect(0, height/75+height/75*1.5*2, padding*.2, padding*.2);
  pop();

  // Data Visualization
  for (var i = 0; i < dati.length; i++) {

    push();
    translate(width/20, 0);

    textAlign(RIGHT, BOTTOM);
    push();
    translate(padding + (i * padding) - padding*0.1, height/50);
    rotate(-PI/2);
    fill(255);
    textSize(8);
    text(dati[i].country, 0,0);
    pop();
    noStroke();

    // Deaths caused by respiratory diseases (%)
    fill(192,41,66,75);
    rect(padding + i*padding, 0, padding*.2, height);
    fill(192,41,66);
    rect(padding + i*padding, 0, padding*.2, dati[i].deathspercent*height);

    // Deaths caused by respiratory diseases in people aged > 65 (%)
    fill(217,91,67,75);
    rect(padding + i*padding + padding*.2, 0, padding*.2, height);
    fill(217,91,67);
    rect(padding + i*padding + padding*.2, 0, padding*.2, dati[i].overdeathspercent*height);

    // Deaths caused by respiratory diseases in people aged < 65 (%)
    fill(236,208,120,75);
    rect(padding + i*padding + (padding*.2)*2, 0, padding*.2, height);
    fill(236,208,120);
    rect(padding + i*padding + (padding*.2)*2, 0, padding*.2, dati[i].underdeathspercent*height);

    pop();

  }
}

function gotSpreadsheet(countries) {
  println(countries.feed.entry.length);
  for (var i = 0; i < countries.feed.entry.length; i++) {

    var country = {
                  "country": countries.feed.entry[i].gsx$country.$t,
                  "deathspercent": countries.feed.entry[i].gsx$deathspercent.$t,
                  "overdeathspercent": countries.feed.entry[i].gsx$overdeathspercent.$t,
                  "underdeathspercent": countries.feed.entry[i].gsx$underdeathspercent.$t,
              }
              println(country);
    dati.push(country);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
