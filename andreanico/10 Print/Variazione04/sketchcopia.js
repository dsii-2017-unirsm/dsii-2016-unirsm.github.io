// Poem
// 10 Print wall @andreanico © 2017 MIT License
// 10 print porting to P5js
// DSII2017 lab @UniRSM

var x = 600;                                               //coordinate casella
var y = 60;

var no = ["sole","mare","silenzio","posto","libro"];      //array nomi
var ag = ["vuoto","buio","caldo","triste","profondo",];   //array aggettivi
var ve = ["toglie","prende","cade","resta","perde"];      //array verbi
var av = ["sempre","soltanto","qui","sotto","ecco",];     //array avverbi

var dimParola;
var pad = 5;
var dir = 1;



function setup() {
         createCanvas(windowWidth, windowHeight);        // dimensioni del foglio
         frameRate(10);

         background(30,30,30);          // setup colore di sfondo
         textFont("Georgia");
         textSize(20);

         textAlign(LEFT);
}

 function draw() {                      // disegna area lavoro
          area ();
          spostaPuntatore();
 }


function area() {                        // attributi area lavoro
       noFill();
       noStroke();
       //rect(x, y, G, G);

       var dado = int(random(4));

       var parola;

       if (dado == 0) {                  // attributi casella di testo
           fill(116,126,127);
           parola = random (no);
       } else if (dado == 1) {
           fill (149,154,143);
           parola = random (ag);
       } else if (dado == 2) {
           fill (218,215,197);
           parola = random (ve);
       } else if (dado == 3) {
           fill (232,252,255);
           parola = random (av);
       }

       dimParola = textWidth(parola);

       text(parola, x, y); //, x+dimParola, y+30);
}


function spostaPuntatore() {

 var spazio = (dimParola + pad)*dir;

  x = x + spazio;

  if ( x > width-spazio) { // allora torna verso sinistra // prova con 50 al posto di width-spazio
    x = width;
    dir = dir;
    y = y+60;
  }

  if (x > 800) { // allora vai verso destra // prova con 50 al posto di spazio
    x = 600;
    y = y+30;
    dir = dir;
  }

  if (y > height-30) {
    x = 600;
    y = 60;
    background(30,30,30);
  }

  if (dir == 1) textAlign(LEFT);
//else if (dir == -1) textAlign(RIGHT);

 }


 function keyTyped() {                  // se premo "a" fermo il loop
  if (key === 'a') {
    noLoop();
  } else {

  }
  if (key === 's') {                    // se premo "f" lo fermo
    saveCanvas();
  } else {

  }
  if (key === 'd') {                    // se premo "d" riparte
    loop();
  } else {

  }
}
