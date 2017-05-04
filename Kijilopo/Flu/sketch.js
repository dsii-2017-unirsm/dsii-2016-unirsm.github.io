// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json
//

var url = "https://spreadsheets.google.com/feeds/list/1xiUXNyz9ai5VrMujmOotx1kUJjGKUAVw_vJhXbRurKc/od6/public/values?alt=json";

 // array per contenere i dati/oggetto
var dati = [];

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  loadJSON(url, gotSpreadsheet);
  //print("ciao");
  colorMode(HSB);
  rectMode(CENTER);
} // setup()

function draw() {
  // piccolo loop per verificare di avere i dati,
  // stampa su schermo cerchi con i colori presenti nel google doc
  background(0,0,0);
  var padding = width/(dati.length+1);
  var scala = 8;
  for (var i = 0; i < dati.length; i++) {
    //fill(dati[i].hue,dati[i].saturation,dati[i].brightness,dati[i].alpha/100);
    if (dati[i].forma == "quadrato") {
      ellipse(padding * -20 + i * padding * 2.1, height/4, sqrt(dati[i].area/PI)*scala, sqrt(dati[i].area/PI)*scala);
      noStroke();
      fill(255);
      textAlign(CENTER);
      text(dati[i].colore, padding * -20 + (i * padding * 2.1),height/7.4);
    } else if (dati[i].forma == "cerchio") {
      ellipse(padding + i * padding * 2.1, height/1.8, sqrt(dati[i].area/PI)*scala, sqrt(dati[i].area/PI)*scala);
      noStroke();
      fill(255);
      textAlign(CENTER);
      text(dati[i].colore, padding + (i * padding * 2.1),height/2.2);}
  }
} // draw()

function gotSpreadsheet(colori) {
  println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < colori.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var colore = {
                  // dati, nomi delle colonne, i parametri
                  "colore": colori.feed.entry[i].gsx$colore.$t,
                  "hue": colori.feed.entry[i].gsx$hue.$t,
                  "saturation": colori.feed.entry[i].gsx$saturation.$t,
                  "area": colori.feed.entry[i].gsx$area.$t,
                  "alpha": colori.feed.entry[i].gsx$alpha.$t,
                  "forma": colori.feed.entry[i].gsx$forma.$t,
              }
              println(colore); // < debug, verifica oggetto 1x1
    dati.push(colore); // < inserimento nell'array del dato
  }
} // gotSpreadsheet(colori)

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
