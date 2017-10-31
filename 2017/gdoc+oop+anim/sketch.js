// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json

// carica da online
//var url = "https://spreadsheets.google.com/feeds/list/1yhy6cM59YdNsU22tNpWQHGkziLC7EzlMl_vcjFE4lJo/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
var url = "data/values.json";

var ogg = []; // < array di oggetti/classi
var grid = 0;
var ruota = true;


function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet

  colorMode(HSB);
  rectMode(CENTER);
} // setup()


function draw() {
  // piccolo loop per verificare di avere i dati, stampa su schermo cerchi con i colori presenti nel google doc
  grid = width/(ogg.length+1);

  background(0,0,21);
  text("OBJECTS : " + ogg.length, 10,20); // < stampa il numero oggetti in alto a sx

  for (var i=0; i<ogg.length; i++) {   // (muovi e) mostra tutti gli oggetti
    ogg[i].muovi();
    ogg[i].mostra();
  }
} // draw()


function gotSpreadsheet(colori) {
  console.log(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < colori.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var c = {
                  // dati, nomi delle colonne, i parametri
                  "colore": colori.feed.entry[i].gsx$colore.$t,
                  "hue": colori.feed.entry[i].gsx$hue.$t,
                  "saturation": colori.feed.entry[i].gsx$saturation.$t,
                  "brightness": colori.feed.entry[i].gsx$brightness.$t,
                  "alpha": colori.feed.entry[i].gsx$alpha.$t,
                  "forma": colori.feed.entry[i].gsx$forma.$t
              }
    console.log(c); // < debug, verifica oggetto 1x1
    // e ora generiamo un nuovo oggetto classe "Oggetto"
    ogg.push(new Oggetto(i, c.colore, c.hue, c.saturation, c.brightness, c.alpha, c.forma));
  }
} // gotSpreadsheet(colori)


// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"
function Oggetto(_id, _colore, _hue, _saturation, _brightness, _alpha, _forma) {

  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
  this.colore = _colore;
  this.hue = Number(_hue);
  this.saturation = Number(_saturation);
  this.brightness = Number(_brightness);
  this.alpha = Number(_alpha)/100;
  this.forma = _forma;

  this.speed = _alpha/10; //random(-10,10); // < velocità di variazione su asse y
  this.dy = 0; // variazione delta Y relativa al presente, si parte da 0
  this.speedRot = _alpha;

  // FUNZIONALITA

  this.muovi = function() {
    // oscilla su asse y, velocità dipende dall'alpha
    this.dy += this.speed;//random(-10,10);
    if (abs(this.dy) >= height/2) {
      this.speed *= -1;
    }
  } //move()

  this.mostra = function() {
    // disegna, cerchio o quadrato dipende dalla forma, colore dai dati passati
    fill(this.hue,this.saturation,this.brightness,this.alpha);
    push();
    translate(grid + this.id * grid, height/2 + this.dy);
    if (ruota) {
      rotate(frameCount/this.speedRot);
    }
    if (this.forma == "quadrato") {
      rect(0, 0, grid * 1.2, grid * 1.2);
    } else if (this.forma == "cerchio") {
      ellipse(0, 0, grid * 1.2, grid * 1.2);
    }
    pop();
    noStroke();
    fill(255);
    textAlign(LEFT, CENTER);
    push();
    translate(grid + (this.id * grid),height/3);
    rotate(PI/2);
    text(this.colore,0,0);
    pop();

    //text(this.colore,grid + (this.id * grid),height/3);
  } // display()

} // Oggetto()


// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
