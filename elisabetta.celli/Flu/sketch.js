/// Elisabetta Celli @elisabettacelli© 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON
// Educational purpose, made for DSII2017 lab @UniRSM

// link del doc google spreasheets, deve essere pubblico su web,

var url = " https://spreadsheets.google.com/feeds/list/1nIgMaGDumqkZwdbdA6fSjH5ayq2Xs_Qx4BL-HD73zPQ/od6/public/values?alt=json";

 // array per contenere i dati/oggetto
var dati = [];

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  loadJSON(url, gotSpreadsheet);
  
  colorMode(RGB);
  rectMode(CENTER);
} // setup()

function draw() {
  // piccolo loop per verificare di avere i dati,
  // stampa su schermo cerchi con i colori presenti nel google doc
  background(89,89,89);
  var padding = width/(dati.length+1);
  var scala= 15;
  for (var i = 0; i < dati.length; i++) {

      fill(51, 148, 152);
      arc(padding + i * padding, height/2.5, sqrt(dati[i].maschi/PI)*scala,sqrt(dati[i].maschi/PI)*scala, 0, PI);

      fill(246, 137, 128);
      arc(padding + i * padding, height/2.5, sqrt(dati[i].femmine/PI)*scala,sqrt(dati[i].femmine/PI)*scala, PI, 0);

      fill(107, 67, 97, 99);
      arc(padding + i * padding, height/2.5, sqrt(dati[i].totale/PI)*scala,sqrt(dati[i].totale/PI)*scala, 0, PI*1.999999999);

    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    text(dati[i].anno, padding + (i * padding),height/6);
    text(dati[i].maschi, padding + (i * padding),height/2.36);
    text(dati[i].femmine, padding + (i * padding),height/2.6);

  }
  textSize(13);

  text("Leggenda", 80, 600);
  textAlign(LEFT, LEFT);
  fill(51, 148, 152);
  rect(60, 640, 15, 15);
  fill(255);
  text("Maschi", 120, 640);

  fill(246, 137, 128);
  rect(60, 660, 15, 15);
  fill(255);
  text("Femmine", 120, 660);

  fill(107, 67, 97, 99);
  rect(60, 680, 15, 15);
  fill(255);
  text("Valore totale", 120,680);
} // draw()

function gotSpreadsheet(colori) {
  //println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < colori.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var anno = {
                  // dati, nomi delle colonne, i parametri
                  "anno": colori.feed.entry[i].gsx$anno.$t,
                  "maschi": colori.feed.entry[i].gsx$maschi.$t,
                  "femmine": colori.feed.entry[i].gsx$femmine.$t,
                  "totale": colori.feed.entry[i].gsx$totale.$t

              }
              print(anno); // < debug, verifica oggetto 1x1
    dati.push(anno); // < inserimento nell'array del dato
  }
} // gotSpreadsheet(colori)

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
