// Markpieces © 2017 MIT License


var url = "https://spreadsheets.google.com/feeds/list/1FDj0f6QfSqkge9lr2ifXoLFQOnMs9z9iDhkA9h42jCA/od6/public/values?alt=json";

 // array per contenere i dati/oggetto
var dati = [];
var scala = 35;
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
  background(0,0,21);
  var padding = width/(dati.length+1);

/*for (var i = 0; i < dati.length; i++) {

  for ( var i = 0; i < 35; i++) {

    var r2 = random (8);
    var r = random (2,-2);


    ellipse(padding+i*20, height/2 +r2, 20,20);
  }
fill(dati[i].hue,dati[i].saturation,dati[i].brightness,dati[i].alpha/100);

}*/

for (var i = 0; i < dati.length; i++) {


  var r2 = random (8);
  var r = random (2,-2);

    fill(dati[i].hue,dati[i].saturation,dati[i].brightness,dati[i].alpha/100);
    ellipse(padding + i * padding +r, height/2 +r2, sqrt(dati[i].hue/PI)*scala,sqrt(dati[i].hue/PI)*scala);
    noStroke();
    fill(255);
    textAlign(CENTER);
    text(dati[i].colore, padding + (i * padding),height/2.8);

  }



}



// draw()

function gotSpreadsheet(colori) {
  println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < colori.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var colore = {
                  // dati, nomi delle colonne, i parametri
                  "colore": colori.feed.entry[i].gsx$colore.$t,
                  "hue": colori.feed.entry[i].gsx$hue.$t,
                  "saturation": colori.feed.entry[i].gsx$saturation.$t,
                  "brightness": colori.feed.entry[i].gsx$brightness.$t,
                  "alpha": colori.feed.entry[i].gsx$alpha.$t,
                  "forma": colori.feed.entry[i].gsx$forma.$t,
                  "numero": colori.feed.entry[i].gsx$numero.$t
              }
              println(colore); // < debug, verifica oggetto 1x1
    dati.push(colore); // < inserimento nell'array del dato
  }
} // gotSpreadsheet(colori)

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
