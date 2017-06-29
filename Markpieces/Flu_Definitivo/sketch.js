// Markpieces © 2017 MIT License


var url = "https://spreadsheets.google.com/feeds/list/1FDj0f6QfSqkge9lr2ifXoLFQOnMs9z9iDhkA9h42jCA/od6/public/values?alt=json";

 // array per contenere i dati/oggetto
var dati = [];
var scala = 20;

var distribution = new Array(360);



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




frameRate(60);
background(255);

push();

fill(80);
textStyle (BOLD);
textFont("Roboto");
textSize(28);
text("DEATH VIRUS", 230, 100);
textStyle (NORMAL);
textSize(14);
text("Mortality by Influence in Italy", 232, 120);
textStyle (NORMAL);
textSize(10);
text("2006 - 2011", 170, 140);

pop();

// piccolo loop per verificare di avere i dati,
// stampa su schermo cerchi con i colori presenti nel google doc

  var padding = width/(dati.length+1);
  var padding2 = height/(dati.length+1);



  for (var i = 0; i < dati.length; i++) {


  var r2 = random (0,1);
  var r = random (0,1);



  var ellipsexd = padding + i *padding + r+40;
  var ellipseyd = height/2+r2;


  var ellipsex = padding + i * padding +r;
  var ellipsey = height/2 +r2;

  var ellipsew = 3;

  var testoy = height/2 +r2+160;
  var testox = padding + i * padding +r;

  var testoypro = height/2 +160;
  var testoxpro = padding + i * padding ;




  if (mouseX >= testoxpro-60 && mouseX <= testoxpro+20 && mouseY >= testoypro-30 && mouseY <= testoypro+10) {
    // fill(255,0,0,255);
    // rect(0,0, 200, 200);



        push();

        fill(0);
        textFont("Roboto");
        textSize(34);
        textAlign(CENTER);
        text(dati[i].anno, testoxpro-20, testoypro);


        textAlign(CENTER, TOP);
        textFont("Roboto");

        fill(65,105,225);

        textSize(25);
        text(dati[i].decuomini, testoxpro-49, testoypro+30);
        textSize(14);
        text("Uomini", testoxpro-49, testoypro+60);

        fill(249,132,229);

        textSize(25);
        text(dati[i].decdonne, testoxpro+11, testoypro+30);
        textSize(14);
        text("Donne", testoxpro+11, testoypro+60);


        for (var j = 0; j < dati[i].decuomini; j++){

            fill(65,105,225);
            ellipse(ellipsex+random(20)-50, ellipsey-random(dati[i].decuomini)+100, ellipsew,ellipsew);


        }

        for (var j = 0; j < dati[i].decdonne; j++){

            fill(249,132,229);
            ellipse(ellipsexd+random(25)-50, ellipseyd-random(dati[i].decdonne)+100, ellipsew,ellipsew);


        }

        pop();


      } else {



    fill(120);
    textFont("Roboto");
    textSize(28);
    text(dati[i].anno, testoxpro-20, testoypro);

    fill(170);

    for (var j = 0; j < dati[i].dectotale; j++){

    ellipse(ellipsex+random(60)-50, ellipsey-random(dati[i].decuomini)+100, ellipsew,ellipsew);


    }




  }


    noStroke();
    textAlign(CENTER);

  }



}



// draw()

function gotSpreadsheet(colori) {
  println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < colori.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var colore = {
                  // dati, nomi delle colonne, i parametri
                  "anno": colori.feed.entry[i].gsx$anno.$t,
                  "decuomini": colori.feed.entry[i].gsx$decuomini.$t,
                  "decdonne": colori.feed.entry[i].gsx$decdonne.$t,
                  "popolazioneu": colori.feed.entry[i].gsx$popolazioneu.$t,
                  "popolazioned": colori.feed.entry[i].gsx$popolazioned.$t,
                  "tassou": colori.feed.entry[i].gsx$tassou.$t,
                  "tassod": colori.feed.entry[i].gsx$tassod.$t,
                  "dectotale": colori.feed.entry[i].gsx$dectotale.$t,
                  "prova": colori.feed.entry[i].gsx$prova.$t,


              }
              println(colore); // < debug, verifica oggetto 1x1

    dati.push(colore); // < inserimento nell'array del dato
  }
} // gotSpreadsheet(colori)

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
