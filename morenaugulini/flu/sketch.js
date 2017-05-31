// Morena Ugulini - dati influenza
// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json
//

var url = "https://spreadsheets.google.com/feeds/list/1EJlCirjljKgxTRRx8AEE6E4cU_Ou_YuDkZU1-Gmr4Mw/od6/public/values?alt=json";

 // array per contenere i dati/oggetto
var dati = [];

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  loadJSON(url, gotSpreadsheet);
  //print("ciao");
  colorMode(RGB);
  rectMode(CENTER);
} // setup()

function draw() {
  // piccolo loop per verificare di avere i dati,
  // stampa su schermo cerchi con i colori presenti nel google doc


  background(61,59,59);
  var dimensione = width/(dati.length+1);
var scala=20;
  for (var i = 0; i < dati.length; i++) {
    fill(dati[i].decessi,dati[i].casigravi,dati[i]);
    //if (dati[i].forma == "quadrato") {
      //rect(padding + i * padding, height/2, padding*1.2,padding*1.2),
      //rect(padding + i * padding, height/2, padding*1.2,padding*1.2);
  //  } else if (dati[i].forma == "cerchio") {

  fill(255,255,255);
      ellipse(dimensione + i * dimensione, height/3, sqrt(dati[i].decessi/PI)*scala ,sqrt(dati[i].decessi/PI)*scala),
      ellipse(dimensione + i * dimensione, height/2, sqrt(dati[i].casigravi/PI)*scala ,sqrt(dati[i].casigravi/PI)*scala);
      stroke(255);

      push();
      translate(142, 142);
      line(-78, 100, 1235, 100);
      pop();

      stroke(255);

      push();
      translate(265, 265);
      line(-200, 100, 1110, 100);
      pop();

    //}
    noStroke();
  fill(157,157,156);
    textAlign(CENTER, CENTER);
    text(dati[i].anno, dimensione + (i * dimensione),height/10);
    //fill(535);

    text(dati[i].decessi, dimensione + (i * dimensione),height/4);
    text(dati[i].casigravi, dimensione + (i * dimensione),height/1.7);
//per girare il testo
    //push();
    //translate(grid + (this.id * grid),height/3);
    //rotate(PI/2);
    //text(this.colore,0,0);
    //pop();

    text("Decessi", 65,120);
    text("Casi gravi", 65,500);
  }
} // draw()

function gotSpreadsheet(colori) {
  println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < colori.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var anno = {
                  // dati, nomi delle colonne, i parametri
                  "anno": colori.feed.entry[i].gsx$anno.$t,
                  "casigravi": colori.feed.entry[i].gsx$casigravi.$t,
                  "decessi": colori.feed.entry[i].gsx$decessi.$t

              }
              println(anno); // < debug, verifica oggetto 1x1
    dati.push(anno); // < inserimento nell'array del dato
  }
} // gotSpreadsheet(colori)

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

