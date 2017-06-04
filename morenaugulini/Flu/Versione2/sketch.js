// Morena Ugulini @morenaugulini© 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON
// Educational purpose, made for DSII2017 lab @UniRSM

// link del doc google spreasheets, deve essere pubblico su web,
var url = "https://spreadsheets.google.com/feeds/list/1EJlCirjljKgxTRRx8AEE6E4cU_Ou_YuDkZU1-Gmr4Mw/od6/public/values?alt=json";

 // array per contenere i dati/oggetto
var dati = [];

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, 300*21); //la lunghezza della pagina la do io

  // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  loadJSON(url, gotSpreadsheet);
  colorMode(RGB);
  rectMode(CENTER);
}

function draw() {

  background('#282c34');
  var dimensione = width/(dati.length+1);
  var scala=40;
  for (var i = 0; i < dati.length; i++) {
  fill(dati[i].decessi,dati[i].casigravi,dati[i]);


strokeWeight(1); //peso del corpo
textSize(14);   //dimensione testo

for (var j=0; j < dati[i].decessi; j++){   // creo la variabile j
      noFill();      //no riempimento
      stroke(255);  //linee bianche

      //COME IMPOSTARE L'ARCO
      // arc(a,b,c,d,start,stop)
      //a	= coordinata x
      //b	= coordinata y
      //c	= larghezza dell'arco dell'ellisse
      //d	= altezza dell'arco dell'ellisse
      //start	= angolo per iniziare l'arco, specificato in radianti
      //stop = Angolo dove si ferma l'arco, specificato in radianti

    arc(600,300*(i)+200,20+(j*10),20+(j*10),HALF_PI,PI+HALF_PI);
      //archi che rappresentano i decessi a SX
}

      //COME IMPOSTARE LA LINEA
      // a = cordinata x primo punto, b = cord y primo punto,
      // c = cord x secondo punto, d = cord y sec punto

line(600, 100, 600, 6200);  // linea verticale di sinistra
line(850, 100, 850, 6200); // linea verticale di destra


for (var k=0; k < dati[i].casigravi; k++){ // creo la variabile k
      noFill();
      stroke(255);

    arc(850,300*(i)+200,20+(k*10),20+(k*10),PI+HALF_PI,HALF_PI);
    //archi che rappresentano i casi gravi a DX
}


    noStroke();                  //no contorno attorno al testo
    fill(157,157,156);          //colore delle scritte
    textAlign(CENTER, CENTER); //allineamento testo


      //COME IMPOSTARE IL TESTO
      //text(str,x,y)
      //str = testo da visualizzare
      //x	= coordinata x del testo
      //y	= coordinata y di testo

    text(dati[i].regioni, width/2,300*(i)+200)  //posizione verticale delle regioni
    text(dati[i].decessi, 612,300*(i)+200);    //numeri che rappresentano i decessi
    text(dati[i].casigravi, 838,300*(i)+200); //numeri che rappresentano i casi gravi

    //scritte illustrative in alto
    text("Decessi", 450,100);      //in base alle linea sx imposto decessi
    text("Casi gravi", 1000,100); //in base alle linea dx imposto casi gravi
  }
}

function gotSpreadsheet(colori) {
  println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < colori.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var regioni = {
                  // dati, nomi delle colonne, i parametri
                  "regioni": colori.feed.entry[i].gsx$regioni.$t,
                  "casigravi": colori.feed.entry[i].gsx$casigravi.$t,
                  "decessi": colori.feed.entry[i].gsx$decessi.$t

              }
    println(regioni); // < debug, verifica oggetto 1x1
    dati.push(regioni); // < inserimento nell'array del dato
  }
}


// se ridimensiono la finestra ricalcola width e height canvas
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
