// Simple beginning template for variable face.

var eyeSize = 20;
var pupille = 5;
var faceWidth = 100;
var faceHeight = 150;
var mouthWidth = 30;
var mouthHeight = 15;
var noseWidth = 20;
var noseHeight = 20;

function setup(){
    createCanvas (windowWidth, windowHeight);
}

function draw(){
    background(255);
    ellipse(width/2, height/2, faceWidth, faceHeight);

    var eyeLX = width/2 - faceWidth*0.25;
    var eyeRX = width/2 + faceWidth*0.25;
    ellipse(eyeLX, height/2, eyeSize, eyeSize);
    ellipse(eyeRX, height/2, eyeSize, eyeSize);

    var pupLX = width/2 - faceWidth*0.25;
    var pupRX = width/2 + faceWidth*0.25;
    ellipse(pupLX, height/2, pupille, pupille);
    ellipse(pupRX, height/2, pupille, pupille);

    ellipse(width/2, height/2 + 150, mouthWidth, mouthHeight);

    triangle(width/2, height/2, noseWidth+width/2 - 100, noseHeight+height/2 + 30, noseWidth+width/2 + 50 , noseHeight+height/2 + 30 )


}

function mousePressed(){
    // when the user clicks, these variables are reassigned
    // to random values within specified ranges. For example,
    // 'faceWidth' gets a random value between 75 and 150.
    //
    fill(random(255),random(255),random(255),random(100));
    //noStroke();
    faceWidth  = random(350, 700);
    faceHeight = random(400, 800);
    eyeSize    = random(50, 150);
    mouthWidth = random(0, 300);
    mouthHeight = random(0, 100);
    pupille = random(20, 40);
    noseWidth = random(5, 60);
    noseHeight = random(5, 100);

    // noStroke();
}
