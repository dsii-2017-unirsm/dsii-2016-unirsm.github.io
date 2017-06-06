// Morena Ugulini @morenaugulini© 2017 MIT License
// 10 print porting to P5js - space proposta2
// Educational purpose, made for DSII2017 lab @UniRSM


var a = 0;
var b = 0;
var c = 0;
var d = 0;
var p = 0;
var g = 50;
var r = g/2;

function setup() {
  createCanvas(displayWidth, displayHeight); //tutto schermo
  background('#0023ce');                    //colore sfondo blu
  noStroke();                              //nessuna linea
  cursor(CROSS);                          //cursore a crocetta
  p = get(0,0,displayWidth/2, displayHeight/2); //get cattura l'immagine di un quadrante
  //serve per far si che quando vado e tolgo il mouse mi cancella e rimette lo sfondo
 //catturo l'immagine a questo punto perchè lo sfondo è libero
}


function draw(){
strokeWeight(2) //dimensione della linea


if((mouseX)<displayWidth/2 & (mouseY)<displayHeight/2) { //disegno nel 4o quadrante(bassodestra)
if (a<80){        //disegno un massimo di 80 figure
var x=ceil(random(displayWidth/2, displayWidth)) +r;   //ceil serve in caso mi dia un numero con la virgola per arrotondare
var y=ceil(random(displayHeight/2, displayHeight))+r; //il segno di r dipende dal quadrante dove disegno
noFill();       //no riempimento
stroke(255);   //linee bianche

    //COME CREARE UN ELLISSE
    //ellipse(x,y,w,[h])
    //x	= coordinata x dell'ellisse
    //y = coordinata y dell'ellisse
    //w = larghezza dell'ellisse
    //h	= altezza dell'ellisse.

ellipse(x,y,random(g), random(g));   // creo tre ellissi con stesso centro ma con forme diverse
noFill();                           //no riempimento
stroke(255);                       //linee bianche
ellipse(x,y,random(g), random(g));
noFill();
stroke(255);
ellipse(x,y,random(g), random(g));
a++;
}
  if (a==80){  //quando sono a 80 figure mi si "resetta" lo schermo e riparte
  a=0
  set(displayWidth/2,displayHeight/2,p); // get cattura / set "attacca" l'immagine
}
}


if ((mouseX)>displayWidth/2 & (mouseY)<displayHeight/2) { // disegno in 3o quadrante(bassosinistra)
  if (b<80){
  x=ceil(random(0,displayWidth/2 ))-r; // il segno di r dipende dal quadrante dove disegno
  y=ceil(random(displayHeight/2, displayHeight))+r;

  noFill();
  stroke(255);
  ellipse(x,y,random(g), random(g));
  noFill();
  stroke(255);
  ellipse(x,y,random(g), random(g));
  noFill();
  stroke(255);
  ellipse(x,y,random(g), random(g));
  b++;

  if (b==80){
    b=0
    set(0,displayHeight/2,p);
  }
}
}

if ((mouseX)>displayWidth/2 & (mouseY)>displayHeight/2) { // disegno in 2o quadrante (altosinistra)
  if (c<80){
  x=ceil(random(0,displayWidth/2 ))-r;
  y=ceil(random(0,displayHeight/2))-r;
  noFill();
  stroke(255);
  ellipse(x,y,random(g), random(g));
  noFill();
  stroke(255);
  ellipse(x,y,random(g), random(g));
  noFill();
  stroke(255);
  ellipse(x,y,random(g), random(g));
  c++;

  if (c==80){
    c=0
    set(0,0,p);
  }
}
}

if ((mouseX)<displayWidth/2 & (mouseY)>displayHeight/2) { // disegno in 1o quadrante (altodestra)
  if (d<80){ //
  x=ceil(random(displayWidth/2,displayWidth ))+r;
  y=ceil(random(0,displayHeight/2))-r;
  noFill();
  stroke(255);
  ellipse(x,y,random(g), random(g));
  noFill();
  stroke(255);
  ellipse(x,y,random(g), random(g));
  noFill();
  stroke(255);
  ellipse(x,y,random(g), random(g));
  d++;

  if (d==80){
    d=0
    set(displayWidth/2,0,p);
  }
}
}

}
// premere lo spazio per salvare come immagine
function keyTyped() {
  if (key === ' ') {
    saveCanvas();
  }
  return false;
}
