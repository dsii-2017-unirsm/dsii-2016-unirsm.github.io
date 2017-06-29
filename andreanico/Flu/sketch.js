// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM
// example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

//ES- Flu by Andrea Nico

var url = "https://spreadsheets.google.com/feeds/list/1JE0G8YqCrL7FSfF7up3LPV-u87PA_cBEl8AwF1A4YRM/od6/public/values?alt=json";
var dati = [];                                           // array per contenere i dati/oggetto
var padding_top = 40;                                    //distanza alto

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotSpreadsheet);                         // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  colorMode(RGB);
  rectMode(CENTER);
  textFont("Avenir");
}

function draw() {
      background(0,0,0);

      var dimensione = (8/10*height)/(dati.length);
      console.log(dati.length);                          //crea padding tra le colonne
      for (var i = 0; i < dati.length; i++) {            //disegna in successione ogni volta che trovi un valore (data JSON)
      noStroke();
      rectMode(CORNER);
      fill(0,255,255);
      rect(160, padding_top+i*dimensione, map(dati[i].positive, 0, 1400, 0, 8/10*width), 5);                  //coordinata x, y, larghezza, altezza
      fill(255,0,255);
      rect(160, padding_top+i*dimensione+5, map(dati[i].negative, 0, 1400, 0, 8/10*width), 5);
      textAlign(RIGHT, TOP);
      fill(255);
      text(dati[i].region, 100, padding_top+i*dimensione);                                                    //scrivi i  nomi delle regioni

      textAlign(LEFT, TOP);
      textSize(8);
      textFont("Avenir")
      fill(0,255,255);
      text(dati[i].positive, 120, padding_top+i*dimensione);
      fill(255,0,255);
      text(dati[i].negative, 120, padding_top+i*dimensione+8);



      noStroke();                          //font leggenda
      textFont("Bodoni");
      fill(255,255,255);
      textSize(50);
      text("Flu", 1090,695);


      textSize(14);                        //font infografica
      textFont("Avenir");

      noStroke();
      fill(255,255,255);
      textFont("Avenir");
      textSize(10);
      text("Total number of influenza positive viruses", 1200, 730);

      noStroke();
      fill(255,255,255);
      textFont("Avenir");
      textSize(10);
      text("Total number of influenza negative viruses", 1200, 700);

      stroke(255,255,255);
      line(1170, 695, 1170, 740);


      fill(0,255,255);                                                          //quadrato leggenda cyan
      noStroke();
      strokeWeight(2);
      rect(1180,695,15,15);

      fill(255,0,255);                                                          //quadrato leggenda magenta
      noStroke();
      strokeWeight(2);
      rect(1180,725,15,15);

      textSize(14);                                                             //font infografica
      textFont("Avenir");





  }
  noStroke();                                                                   //testo infografica
  textAlign(CENTER, CENTER);
  fill(192,60,99);
  }

function gotSpreadsheet(colori) {
      println(colori.feed.entry.length);                                        // numero righe della tabella
       for (var i = 0; i < colori.feed.entry.length; i++) {
                                                                                // costruzione dell'oggetto singolo, la riga
       var colore = {
                  "region": colori.feed.entry[i].gsx$region.$t,
                  "positive": colori.feed.entry[i].gsx$positive.$t,
                  "negative": colori.feed.entry[i].gsx$negative.$t,
  }
              println(colore); // < debug, verifica oggetto 1x1
               dati.push(colore); // < inserimento nell'array del dato
  }
}

function windowResized() {                                                      // se ridimensiona la finestra ricalcola width e height canvas
  resizeCanvas(windowWidth, windowHeight);
}
