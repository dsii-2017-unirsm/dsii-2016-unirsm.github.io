// Simone Angelini @asimo235 © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON | San Marino, IT | 6.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json
//

var padding_top = 180;

var url = "https://spreadsheets.google.com/feeds/list/1N99js6mHDRugxuN0pZe3sEKe09DzaMgVujaVDuMrfG0/od6/public/values?alt=json";

 // array per contenere i dati/oggetto
var dati = [];

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotSpreadsheet);                         // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  colorMode(RGB);
  rectMode(CENTER);
} // setup()

function draw() {
  // piccolo loop per verificare di avere i dati,
  // stampa su schermo cerchi con i colori presenti nel google doc
  background(30, 30, 30);

  //titolo
  push();
  translate(width/90, height/30);
  fill(255);
  textSize(30);
  noStroke();
  text("Decessi in Italia", 10, 10);
  text("per influenza e polmonite", 10, 40);
  text("dal 2003 al 2013", 10, 74);
  pop();

  push();
  translate(width/90, height/30);
  fill(255);
  textAlign(LEFT, TOP);
  textSize(17);
  noStroke();
  text("I dati comprendono la popolazione maschile e femminile di tutte le età. Dati relativi agli anni 2004 e 2005 non sono stati codificati dall'ISTAT.", 400, 00, 300, 90);
  pop();



  var dimensione = (8/10*height)/(dati.length);
  console.log(dati.length);
  //disegna per ogni val json
  for (var i = 0; i < dati.length; i++) {
  noStroke();
  rectMode(CORNER);

  //rettangolo polm
  fill(27, 215, 182);
  stroke(27, 215, 182);
  strokeWeight(3);
  rect(180, padding_top+i*dimensione+10, map(dati[i].polmonite, 0, 1350, 0, 1.2/10*width), 30);


  //rettangolo infl
  fill(248, 83, 87);
  stroke(248, 83, 87);
  strokeWeight(3);
  rect(180, padding_top+i*dimensione+10, map(dati[i].influenza, 0, 1350, 0, 1.2/10*width), 30);


  //chiama l'anno
  textAlign(RIGHT, CENTER);
  fill(255);
  noStroke();
  textSize(30);
  text(dati[i].anno, 100, padding_top+i*dimensione + 25);

  //output numerici
  textAlign(LEFT, CENTER);
  textSize(25);
  noStroke();
  fill(27, 215, 182);
  text(dati[i].polmonite, width - 84, padding_top+i*dimensione + 25);
  fill(248, 83, 87);
  text(dati[i].influenza, 120, padding_top+i*dimensione+25);

  stroke(255);
  strokeWeight(5);
  line(32, 135, width - 32, 135);

  //legenda
  noStroke();
  fill(255);
  textSize(12);
  text("LEGENDA:", 780, 38);

  noStroke();
  fill(255);
  textSize(14);
  text("Influenza", 805, 95);

  noStroke();
  fill(255);
  textSize(14);
  text("Polmonite", 805, 65);

  fill(27, 215, 182);
  noStroke();
  strokeWeight(2);
  rect(780,55,15,15);

  fill(248, 83, 87);
  noStroke();
  strokeWeight(2);
  rect(780,85,15,15);

}
} // draw()

function gotSpreadsheet(anni) {
  // println(countries.feed.entry.length);
  for (var i = 0; i < anni.feed.entry.length; i++) {
    var anno = {
                  "anno": anni.feed.entry[i].gsx$anno.$t,
                  "polmonite": anni.feed.entry[i].gsx$polmonite.$t,
                  "influenza": anni.feed.entry[i].gsx$influenza.$t,
                  //"totale": anni.feed.entry[i].gsx$totale.$t,
}

dati.push(anno);
}

} // gotSpreadsheet(colori)

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
