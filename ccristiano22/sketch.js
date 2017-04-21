// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json
//
//push();
//translate(grid + (this.id * grid), height/3);
//rotate(PI/2);
//text(this.colore,0,0);
//pop();

var url = "https://spreadsheets.google.com/feeds/list/1nW2vjNGUoBSKbrTiYBXBgj4C3O7GEhgY5rZHV3-MO64/od6/public/values?alt=json";

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
  background(0,0,50);
  var dimensione = height/(dati.length+1);
  for (var i = 0; i < dati.length; i++) {
    stroke(255);
    line(height/3.5, dimensione + (i * dimensione), width/3.8, dimensione + i * dimensione);
    stroke(255);
    line(width/3.8, dimensione + i * dimensione, width/1.9, dimensione + i * dimensione);
    stroke(255);
    line(width/1.9, dimensione + i * dimensione, width/1.23, dimensione + i * dimensione);
    stroke(255);
    line( width/1.23, dimensione + i * dimensione, width/1.23 +150, dimensione + i * dimensione);
    stroke(255);
    noStroke();
    ellipse(width/3.8, dimensione + i * dimensione, sqrt(dati[i].totali/PI)*8, sqrt(dati[i].totali/PI)*8);
}
  for (var i = 0; i < dati.length; i++) {
    noStroke();
    fill(192,60,99);
    ellipse(width/1.9, dimensione + i * dimensione, sqrt(dati[i].donne/PI)*8, sqrt(dati[i].donne/PI)*8);
}
  for (var i = 0; i < dati.length; i++) {
    noStroke();
    fill(99,135,194);
    ellipse(width/1.23, dimensione + i * dimensione, sqrt(dati[i].uomini/PI)*8, sqrt(dati[i].uomini/PI)*8);
  }
  for (var i = 0; i < dati.length; i++) {
    textAlign(CENTER, CENTER);
    fill(255);
    text(dati[i].donne,width/1.9, dimensione + (i * dimensione));
    text(dati[i].uomini,width/1.23, dimensione + (i * dimensione));
    text(dati[i].anno, height/5, dimensione + (i * dimensione));
    text(dati[i].totali,width/3.8, dimensione + (i * dimensione));

  }
noStroke();
textAlign(CENTER, CENTER);
fill(192,60,99);
text("DONNE", width/1.9, 60);
fill(99,135,194);
text("UOMINI", width/1.23, 60);
fill(200,185,99);
text("TOTALI", width/3.8, 60);


} // draw()


function gotSpreadsheet(colori) {
  println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < colori.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var colore = {
                  // dati, nomi delle colonne, i parametri
                  "colore": colori.feed.entry[i].gsx$colore.$t,
                  "anno": colori.feed.entry[i].gsx$anno.$t,
                  "totali": colori.feed.entry[i].gsx$totali.$t,
                  "donne": colori.feed.entry[i].gsx$donne.$t,
                  "uomini": colori.feed.entry[i].gsx$uomini.$t,
                  "forma": colori.feed.entry[i].gsx$forma.$t
              }
              println(colore); // < debug, verifica oggetto 1x1
    dati.push(colore); // < inserimento nell'array del dato
  }
} // gotSpreadsheet(colori)

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
