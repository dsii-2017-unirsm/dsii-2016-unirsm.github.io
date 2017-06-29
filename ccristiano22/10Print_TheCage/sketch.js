// THE CAGE
// Cristiano Chiti @ccristiano22 © 2017 MIT License
// 10print variation in p5.js WEBGL Line issue | San Marino, IT | 6.2017
// Educational purpose, made for DSII2017 lab @UniRSM
// Inspired by Daniele Tabellini @fupete
// example 1 inspired on Gist https://github.com/dsii-2017-unirsm/dsii-2017-unirsm.github.io/tree/master/2017/10print
// example 2 inspired on Gist  https://github.com/dsii-2017-unirsm/dsii-2017-unirsm.github.io/tree/master/2017/webgl_Line

var x = 0;
var y = 0;
var z = 0;
var D = 60;
var D1 = 60;
var slider;
var slider2;
var slider3;
var slider4;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(30);
  frameRate(5);

//colore slider
  var col1 = color(150,50,50,180);
  var col2 = color(50,150,50,180);
  var col3 = color(50,50,150,180);
  var col4 = color(0,150,150,180);

//slider cambia colore
  slider = createSlider(80, 255, 80);
  slider.position(10, windowHeight-90);
  slider.style('width', '100px');
  slider.style("background-color", col1);

  slider2 = createSlider(80, 255, 255);
  slider2.position(10, windowHeight-65);
  slider2.style('width', '100px');
  slider2.style("background-color", col2);

  slider3 = createSlider(80, 255, 255);
  slider3.position(10, windowHeight-40);
  slider3.style('width', '100px');
  slider3.style("background-color", col3);

}

function draw() {
//variabili slider cambia colore
  var val = slider.value();
  var val2 = slider2.value();
  var val3 = slider3.value();

  background(30); // sfondo

  orbitControl(); // < attiva controllo orbita 3d col mouse...

  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;

  ambientLight(val,val2,val3);
  pointLight(200, 200, 200, locX, locY, 0);

// Muro davanti a noi
  push();
  translate(-810,-800,-820);
  megaMatrice();
  pop();

// Muro dietro di noi
  push();
  translate(-810,-800,+820);
  megaMatrice();
  pop();

// Muro a destra
  push();
  rotateY(PI/2);
  translate(-800,-800,windowHeight+80);
  megaMatrice();
  pop();

// Muro a sinistra
  push();
  rotateY(PI/2);
  translate(-800,-800,-windowHeight-80);
  megaMatrice();
  pop();

// Pavimento
  push();
  rotateX(PI/2)
  translate(-810,-810,windowHeight+80);
  megaMatrice();
  pop();

// soffitto
  push();
  rotateX(PI/2)
  translate(-810,-810,-windowHeight-60);
  megaMatrice();
  pop();

// Cubo
  specularMaterial(val,val2,val3);
  //translate(0,220,-820);
  //box(250,600,10);
  box(60,60)
}

// matrice che genera il muro
function megaMatrice() {
  var val = slider.value();   //variabili  slider cambia colore
  var val2 = slider2.value();   //variabili  slider cambia colore
  var val3 = slider3.value();   //variabili  slider cambia colore
  for (x=0; x<1600;x+=D){   // grandezza x del muro
    for (y=0; y<1600;y+=D){ // grandezza y del muro
      if (random(2) <= 1) { // sequenza random delle linee che disegnano il muro
        stroke(val,val2,val3);
        line(x, y, z, x+D, y+D, z);
      }if (random(2) <= 1) {
         line(x, y, z, x+D, y+D, z);
      } else {
         line(x+D, y, 0, x, y+D, 0);
      }
    }
  }
}

//da inserire sempre utilizzando windoWidth
// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function keyTyped() {  // se premo a fermo il loop
 if (key === 'a') {
   noLoop();
 }
 if (key === 'd') { // se premo d riparte
   loop();
 }
}
