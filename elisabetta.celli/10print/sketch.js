var valore1 = 20;
var valore2 = 200;
var valore3 = 20;
var pos;
var dim;
var osc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pos = windowWidth/2;
  calcDim();

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(.5);

  fft = new p5.FFT();
  osc.start();
}

function calcDim() {
 dim = pos/2;
}

function draw() {
  background(valore1);
  for (var i = 0; i < windowHeight; i++) {
    stroke(valore1,valore2,valore3);
    var r = random(-dim, dim);
    line(pos, i, pos+r, i);
  }

  var freq = map(r, 0, width, 40, 880);
  osc.freq(freq);

  var amp = map(r, 0, height, 1, .01);
  osc.amp(amp);

}

function mousePressed() {
  valore1 = random(255);
  valore2 = random(255);
  valore3 = random(255);
  pos = random(windowWidth);
  calcDim();
}
