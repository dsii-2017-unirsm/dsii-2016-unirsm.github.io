// Marinetti (ZangTumbTumb)
// 10 Print wall @andreanico © 2017 MIT License
// 10 print porting to P5js
// DSII2017 lab @UniRSM
// by Andrea Nico

var x = 600;                                                                    //coordinate casella
var y = 80;

var forte = ["ZANG","TUMB-TUMB","TUUUMB","TAM-TUUUUMB","TAM"];                  //array forte
var piano = ["iiiiiii","shhhhhh","oooooo","mmmmmm"];                            //array piano
var medio1 = ["croooc","craaac","paaack","traaak-traak","bizz"];                //array medio1
var medio2 = ["pum","don-dan","don-din","bèèèèè","cip-cip-cip",];               //array medio2

var dimParola;
var pad = 5;
var dir = 1;



function setup() {
         createCanvas(windowWidth, windowHeight);                               // dimensioni del foglio
         frameRate(10);

         background(30,30,30);                                                  // setup colore di sfondo
         textAlign(LEFT);
}

 function draw() {                                                              // disegna area lavoro
          area ();
          spostaPuntatore();
 }


function area() {                                                               // attributi area lavoro
       noFill();
       noStroke();
                                                                                //rect(x, y, G, G);

       var dado = int(random(4));
       var parola;

       if (dado == 0) {                                                         // attributi casella di testo
           fill(255);
           parola = random (forte);
           textSize(35);
           textFont("Helvetica");
       } else if (dado == 1) {
           fill (255);
           parola = random (piano);
           textSize(10);
           textFont("Courier");

       } else if (dado == 2) {
           fill (255);
           parola = random (medio1);
            textSize(20);
            textFont("Georgia");

       } else if (dado == 3) {
           fill (255);
           parola = random (medio2);
            textSize(20);
            textFont("Georgia");

       }

       dimParola = textWidth(parola);
       text(parola, x, y);                                                      //, x+dimParola, y+30);
}


function spostaPuntatore() {

 var spazio = (dimParola + pad)*dir;

  x = x + spazio;

  if ( x > width-spazio) {                                                      // allora torna verso sinistra
    x = width;
    dir = dir;
    y = y+60;
  }

  if (x > 800) {                                                                // allora vai fino 800px
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


 function keyTyped() {                                                          // se premo "a" fermo il loop
  if (key === 'a') {
    noLoop();
  } else {

  }
  if (key === 's') {                                                            // se premo "f" lo fermo
    saveCanvas();
  } else {

  }
  if (key === 'd') {                                                            // se premo "d" riparte
    loop();
  } else {

  }
}
