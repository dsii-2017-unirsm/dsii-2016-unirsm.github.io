// Daniele Tabellini @fupete © 2017 MIT License
// WEBGL Line issue | San Marini, IT | 6.2017
// Educational purpose, made for DSII2017 lab @UniRSM

var L = []; // < array di linee
var n = 10; // < numero linee iniziali

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(30);

  // gruppo iniziale di Linee
  for (var i=0; i<n; i++) {
    L.push(new Linea(i));
  }
}

function draw() {
  background(30);

  orbitControl(); // < attiva controllo orbita 3d col mouse...

  push(); // < equivalente di pushMatrix in Processing
  translate(-width/2,-height/2,0);
  // mostra gruppo di Linee
  for (var i=0; i<L.length; i++) {
      L[i].display();
    }
  pop();
}



// aggiungi camminatori se premi il mouse
function mousePressed() {
  L.push(new Linea(L.length));
}

// togli ultimo camminatore se premi un tasto
function keyPressed() {
  L.pop();
}




// definizione della classe Linea
function Linea(_id) {

  // dati e costruttore
  this.id = _id;
  this.x1 = width/2 + random (-width/5,width/5);
  this.y1 = height/2 + random (-height/5,height/5);
  this.z1 = random (-height/5,height/5);
  this.x2 = width/2 + random (-width/3,width/3);
  this.y2 = height/2 + random (-height/3,height/3);
  this.z2 = random (-height/5,height/5);

  this.colore = random(45, 255);

  // funzionalità

  this.display = function() {
    stroke(this.colore, 200);
    line(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2);
  }
};



//da inserire sempre utilizzando windoWidth
// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
