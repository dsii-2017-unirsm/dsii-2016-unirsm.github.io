// Flu death line<
// Cristiano Chiti @ccristiano22 © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM
// Inspired by Daniele Tabellini @fupete
// example 1 inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical
// example 2 inspired on Gist https://github.com/dsii-2017-unirsm/dsii-2017-unirsm.github.io/tree/master/2017/gdoc



// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json
var url = "https://spreadsheets.google.com/feeds/list/1nW2vjNGUoBSKbrTiYBXBgj4C3O7GEhgY5rZHV3-MO64/od6/public/values?alt=json";

// array per contenere i dati/oggetto
var dati = [];
var tot_0 = 7;
var tot_1 = 3.5;
var tot_2 = 2.33;
var tot_3 = 1.75;
var tot_4 = 1.4;
var tot_5 = 1.17;

var e = 217;
var r = 127;
var t= 42;
var y= -42;
var u= -129;
var o= -217;


var slider;
var slider2;

var Scala = 20;

var k;
var l;
var box;

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
// richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  loadJSON(url, gotSpreadsheet);

} // setup()
function draw() {
  background(0,0,50);
  smooth();

// Totale 1° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(200,185,99);
            strokeWeight((dati[0].totali)/Scala);
            curveVertex(width/4, (height/tot_0)+200);
            curveVertex(width/4, (height/tot_0)+e);
            curveVertex(width/3.2, (height/tot_0)+190);
            curveVertex(width/2.5, (height/tot_0)+23);
            curveVertex(width/2,  height/tot_0);
            curveVertex(width/2,  (height/tot_0)+15);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_0),200, 14);
          noFill();
//mouseover totale 1° corda
         if ( mouseX >= 500 && mouseX <= 726 && mouseY >= 99 && mouseY <= 115 ){
              noStroke();
               beginShape();
                 strokeCap(SQUARE);
                 stroke(200,185,155);
                 strokeWeight((dati[0].totali)/Scala);
                 curveVertex(width/4, (height/tot_0)+200);
                 curveVertex(width/4, (height/tot_0)+e);
                 curveVertex(width/3.2, (height/tot_0)+190);
                 curveVertex(width/2.5, (height/tot_0)+23);
                 curveVertex(width/2,  height/tot_0);
                 curveVertex(width/2,  (height/tot_0)+15);
               endShape();
               fill(255);
               noStroke();
               textAlign(LEFT);
               fill(255,255,255,5);
               rect(width/1.15,(height/tot_0)-2,200, 14);
               fill(255);
               text("total 2006", width/1.2,(height/tot_0));
               text(dati[0].totali, width/1.1,(height/tot_0));
               textSize(12);
          }
}

// Uomini 1° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(99,135,194);
            strokeWeight((dati[0].uomini) /Scala);
            curveVertex(width/2, (height/tot_0));
            curveVertex(width/2, (height/tot_0) +5);
            curveVertex(width/1.7, (height/tot_0)+6);
            curveVertex(width/1.5, (height/tot_0) +13);
            curveVertex(width/1.25,  (height/tot_0) +14);
            curveVertex(width/1.25,  (height/tot_0) +14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_0)-14,200, 14);
//mouseover uomini 1° corda
          if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 118 && mouseY <= 125){
               noStroke();
                beginShape();
                  strokeCap(SQUARE);
                  stroke(149,185,194);
                  strokeWeight((dati[0].uomini) /Scala);
                  curveVertex(width/2, (height/tot_0));
                  curveVertex(width/2, (height/tot_0) +5);
                  curveVertex(width/1.7, (height/tot_0)+6);
                  curveVertex(width/1.5, (height/tot_0) +13);
                  curveVertex(width/1.25,  (height/tot_0) +14);
                  curveVertex(width/1.25,  (height/tot_0) +14);
                endShape();
                fill(255);
                noStroke();
                textAlign(LEFT);
                fill(255,255,255,5);
                rect(width/1.15,(height/tot_0)+14,200, 14);
                fill(255);
                text("men 2006", width/1.2,(height/tot_0)+14);
                text((dati[0].uomini), width/1.1,(height/tot_0)+14);
                textSize(12);
           }

}
// Donne 1° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(192,60,99);
            strokeWeight((dati[0].donne) /Scala);
            curveVertex(width/2, (height/tot_0));
            curveVertex(width/2, (height/tot_0) -2);
            curveVertex(width/1.7, (height/tot_0)-3);
            curveVertex(width/1.5, (height/tot_0) -13);
            curveVertex(width/1.25,  (height/tot_0) -14);
            curveVertex(width/1.25,  (height/tot_0) -14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_0)+14,200, 14);
//mouseover donne 1° corda
                    if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 88 && mouseY <= 100){
                         noStroke();
                          beginShape();
                            strokeCap(SQUARE);
                            stroke(192,110,149);
                            strokeWeight((dati[0].donne) /Scala);
                            curveVertex(width/2, (height/tot_0));
                            curveVertex(width/2, (height/tot_0) -2);
                            curveVertex(width/1.7, (height/tot_0)-3);
                            curveVertex(width/1.5, (height/tot_0) -13);
                            curveVertex(width/1.25,  (height/tot_0) -14);
                            curveVertex(width/1.25,  (height/tot_0) -14);
                          endShape();
                          fill(255);
                          noStroke();
                          textAlign(LEFT);
                          fill(255,255,255,5);
                          rect(width/1.15,(height/tot_0)-14,200, 14);
                          fill(255);
                          text("women 2006", width/1.2,(height/tot_0)-14);
                          text(dati[0].donne, width/1.1,(height/tot_0)-14);
                          textSize(12);
                     }
}

// Totale 2° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
          strokeCap(SQUARE);
            stroke(200,185,99);
            strokeWeight(dati[1].totali/Scala);
            curveVertex(width/4, (height/tot_1) +112);
            curveVertex(width/4, (height/tot_1) +r);
            curveVertex(width/3.2, (height/tot_1)+112);
            curveVertex(width/2.5, (height/tot_1)+17);
            curveVertex(width/2,  height/tot_1);
            curveVertex(width/2,  (height/tot_1)+20);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_1),200, 14);
          noFill();
//mouseover totale 2° corda
          if ( mouseX >= 500 && mouseX <= 726 && mouseY >= 205 && mouseY <= 221 ){
               noStroke();
                beginShape();
                  strokeCap(SQUARE);
                  stroke(200,185,155);
                  strokeWeight(dati[1].totali/Scala);
                  curveVertex(width/4, (height/tot_1) +112);
                  curveVertex(width/4, (height/tot_1) +r);
                  curveVertex(width/3.2, (height/tot_1)+112);
                  curveVertex(width/2.5, (height/tot_1)+17);
                  curveVertex(width/2,  height/tot_1);
                  curveVertex(width/2,  (height/tot_1)+20);
                endShape();
                fill(255);
                noStroke();
                textAlign(LEFT);
                fill(255,255,255,5);
                rect(width/1.15,(height/tot_1)-2,200, 14);
                fill(255);
                text("total 2007", width/1.2,(height/tot_1));
                text(dati[1].totali,width/1.1,(height/tot_1));
                textSize(12);
           }

}

// Uomini 2° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(99,135,194);
            strokeWeight((dati[1].uomini) /Scala);
            curveVertex(width/2, (height/tot_1));
            curveVertex(width/2, (height/tot_1) +6);
            curveVertex(width/1.7, (height/tot_1)+7);
            curveVertex(width/1.5, (height/tot_1)+13);
            curveVertex(width/1.25, (height/tot_1)+14);
            curveVertex(width/1.25,  (height/tot_1)+14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_1)+14,200, 14);
//mouseover uomini 2° corda
            if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 224 && mouseY <= 234){
                noStroke();
                beginShape();
                strokeCap(SQUARE);
                stroke(149,185,194);
                strokeWeight((dati[1].uomini) /Scala);
                curveVertex(width/2, (height/tot_1));
                curveVertex(width/2, (height/tot_1) +6);
                curveVertex(width/1.7, (height/tot_1)+7);
                curveVertex(width/1.5, (height/tot_1)+13);
                curveVertex(width/1.25, (height/tot_1)+14);
                curveVertex(width/1.25,  (height/tot_1)+14);
            endShape();
            fill(255);
            noStroke();
            textAlign(LEFT);
            fill(255,255,255,5);
            rect(width/1.15,(height/tot_1)+14,200, 14);
            fill(255);
            text("men 2007", width/1.2,(height/tot_1)+14);
            text(dati[1].uomini, width/1.1,(height/tot_1)+14);
            textSize(12);
          }
}
// Donne 2° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(192,60,99);
            strokeWeight((dati[1].donne) /Scala);
            curveVertex(width/2, (height/tot_1));
            curveVertex(width/2, (height/tot_1)-4);
            curveVertex(width/1.7, (height/tot_1)-5);
            curveVertex(width/1.5, (height/tot_1)-13);
            curveVertex(width/1.25,  (height/tot_1)-14);
            curveVertex(width/1.25,  (height/tot_1)-14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_1)-14,200, 14);
//mouseover donne 2° corda
          if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 194 && mouseY <= 210){
            noStroke();
            beginShape();
            strokeCap(SQUARE);
            stroke(192,110,149);
            strokeWeight((dati[1].donne) /Scala);
            curveVertex(width/2, (height/tot_1));
            curveVertex(width/2, (height/tot_1)-4);
            curveVertex(width/1.7, (height/tot_1)-5);
            curveVertex(width/1.5, (height/tot_1)-13);
            curveVertex(width/1.25,  (height/tot_1)-14);
            curveVertex(width/1.25,  (height/tot_1)-14);
            endShape();
            fill(255);
            noStroke();
            textAlign(LEFT);
            fill(255,255,255,5);
            rect(width/1.15,(height/tot_1)-14,200, 14);
            fill(255);
            text("women 2007", width/1.2,(height/tot_1)-14);
            text(dati[1].donne, width/1.1,(height/tot_1)-14);
            textSize(12);
          }

}

// Totale 3° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
          strokeCap(SQUARE);
            stroke(200,185,99);
            strokeWeight(dati[2].totali/Scala);
            curveVertex(width/4, (height/tot_2)+34);
            curveVertex(width/4, (height/tot_2)+t);
            curveVertex(width/3.2, (height/tot_2)+34);
            curveVertex(width/2.5, (height/tot_2)+6);
            curveVertex(width/2,  height/tot_2)
            curveVertex(width/2,  (height/tot_2)+10);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_2),200, 14);
          noFill();
//mouseover totale 3° corda
          if ( mouseX >= 500 && mouseX <= 726 && mouseY >= 310 && mouseY <= 336 ){
               noStroke();
               beginShape();
                  strokeCap(SQUARE);
                  stroke(200,185,155);
                  strokeWeight(dati[2].totali/Scala);
                  curveVertex(width/4, (height/tot_2)+34);
                  curveVertex(width/4, (height/tot_2)+t);
                  curveVertex(width/3.2, (height/tot_2)+34);
                  curveVertex(width/2.5, (height/tot_2)+6);
                  curveVertex(width/2,  height/tot_2)
                  curveVertex(width/2,  (height/tot_2)+10);
                endShape();
                fill(255);
                noStroke();
                textAlign(LEFT);
                fill(255,255,255,5);
                rect(width/1.15,(height/tot_2)-2,200, 14);
                fill(255);
                text("total 2008", width/1.2,(height/tot_2));
                text(dati[2].totali,width/1.1,(height/tot_2));
                textSize(12);
           }

}

// Uomini 3° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(99,135,194);
            strokeWeight((dati[2].uomini) /Scala);
            curveVertex(width/2, (height/tot_2));
            curveVertex(width/2, (height/tot_2) +7);
            curveVertex(width/1.7, (height/tot_2)+8);
            curveVertex(width/1.5, (height/tot_2)+13);
            curveVertex(width/1.25, (height/tot_2)+14);
            curveVertex(width/1.25,  (height/tot_2)+14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_2)+14,200, 14);
//mouseover uomini 3° corda
          if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 330 && mouseY <= 340){
            noStroke();
            beginShape();
             strokeCap(SQUARE);
             stroke(149,185,194);
             strokeWeight((dati[2].uomini) /Scala);
             curveVertex(width/2, (height/tot_2));
             curveVertex(width/2, (height/tot_2) +7);
             curveVertex(width/1.7, (height/tot_2)+8);
             curveVertex(width/1.5, (height/tot_2)+13);
             curveVertex(width/1.25, (height/tot_2)+14);
             curveVertex(width/1.25,  (height/tot_2)+14);
            endShape();
            fill(255);
            noStroke();
            textAlign(LEFT);
            fill(255,255,255,5);
            rect(width/1.15,(height/tot_2)+14,200, 14);
            fill(255);
            text("men 2008", width/1.2,(height/tot_2)+14);
            text(dati[2].uomini, width/1.1,(height/tot_2)+14);
            textSize(12);
          }
}
// Donne 3° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(192,60,99);
            strokeWeight((dati[2].donne) /Scala);
            curveVertex(width/2, (height/tot_2));
            curveVertex(width/2, (height/tot_2)-4);
            curveVertex(width/1.7, (height/tot_2)-4);
            curveVertex(width/1.5, (height/tot_2)-14);
            curveVertex(width/1.25,  (height/tot_2)-14);
            curveVertex(width/1.25,  (height/tot_2)-14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_2)-14,200, 14);
//mouseover donne 3° corda
          if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 299 && mouseY <= 316){
           noStroke();
           beginShape();
            strokeCap(SQUARE);
            stroke(192,110,149);
            strokeWeight((dati[2].donne) /Scala);
            curveVertex(width/2, (height/tot_2));
            curveVertex(width/2, (height/tot_2)-4);
            curveVertex(width/1.7, (height/tot_2)-4);
            curveVertex(width/1.5, (height/tot_2)-14);
            curveVertex(width/1.25,  (height/tot_2)-14);
            curveVertex(width/1.25,  (height/tot_2)-14);
           endShape();
           fill(255);
           noStroke();
           textAlign(LEFT);
           fill(255,255,255,5);
           rect(width/1.15,(height/tot_2)-14,200, 14);
           fill(255);
           text("women 2008", width/1.2,(height/tot_2)-14);
           text(dati[2].donne, width/1.1,(height/tot_2)-14);
           textSize(12);
          }
}

//Totale 4° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
          strokeCap(SQUARE);
            stroke(200,185,99);
            strokeWeight(dati[3].totali/Scala);
            curveVertex(width/4, (height/tot_3)-34);
            curveVertex(width/4, (height/tot_3)+y);
            curveVertex(width/3.2, (height/tot_3)-34);
            curveVertex(width/2.5, (height/tot_3)-6);
            curveVertex(width/2,  height/tot_3)
            curveVertex(width/2,  height/tot_3);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_3),200, 14);
          noFill();
//mouseover totale 4° corda
          if ( mouseX >= 500 && mouseX <= 726 &&
               mouseY >= 415 && mouseY <= 441 ){
               noStroke();
               beginShape();
                  strokeCap(SQUARE);
                  stroke(200,185,155);
                  strokeWeight(dati[3].totali/Scala);
                  curveVertex(width/4, (height/tot_3)-34);
                  curveVertex(width/4, (height/tot_3)+y);
                  curveVertex(width/3.2, (height/tot_3)-34);
                  curveVertex(width/2.5, (height/tot_3)-6);
                  curveVertex(width/2,  height/tot_3)
                  curveVertex(width/2,  height/tot_3);
                endShape();
                fill(255);
                noStroke();
                textAlign(LEFT);
                fill(255,255,255,5);
                rect(width/1.15,(height/tot_3)-2,200, 14);
                fill(255);
                text("total 2009", width/1.2,(height/tot_3));
                text(dati[3].totali,width/1.1,(height/tot_3));
                textSize(12);
           }

}

// Uomini 4° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(99,135,194);
            strokeWeight((dati[3].uomini) /Scala);
            curveVertex(width/2, (height/tot_3));
            curveVertex(width/2, (height/tot_3) +7);
            curveVertex(width/1.7, (height/tot_3)+8);
            curveVertex(width/1.5, (height/tot_3)+13);
            curveVertex(width/1.25, (height/tot_3)+14);
            curveVertex(width/1.25,  (height/tot_3)+14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_3)+14,200, 14);
//mouseover uomini 4° corda
          if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 437 && mouseY <= 447){
            noStroke();
            beginShape();
              strokeCap(SQUARE);
              stroke(149,185,194);
              strokeWeight((dati[3].uomini) /Scala);
              curveVertex(width/2, (height/tot_3));
              curveVertex(width/2, (height/tot_3) +7);
              curveVertex(width/1.7, (height/tot_3)+8);
              curveVertex(width/1.5, (height/tot_3)+13);
              curveVertex(width/1.25, (height/tot_3)+14);
              curveVertex(width/1.25,  (height/tot_3)+14);
            endShape();
            fill(255);
            noStroke();
            textAlign(LEFT);
            fill(255,255,255,5);
            rect(width/1.15,(height/tot_3)+14,200, 14);
            fill(255);
            text("men 2009", width/1.2,(height/tot_3)+14);
            text(dati[3].uomini, width/1.1,(height/tot_3)+14);
            textSize(12);
          }
}
// Donne 4° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(192,60,99);
            strokeWeight((dati[3].donne) /Scala);
            curveVertex(width/2, (height/tot_3));
            curveVertex(width/2, (height/tot_3)-4);
            curveVertex(width/1.7, (height/tot_3)-5);
            curveVertex(width/1.5, (height/tot_3)-13);
            curveVertex(width/1.25,  (height/tot_3)-14);
            curveVertex(width/1.25,  (height/tot_3)-14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_3)-14,200, 14);
          //mouseover donne 4° corda
          if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 406 && mouseY <= 423){
            noStroke();
            beginShape();
              strokeCap(SQUARE);
              stroke(192,110,149);
              strokeWeight((dati[3].donne) /Scala);
              curveVertex(width/2, (height/tot_3));
              curveVertex(width/2, (height/tot_3)-4);
              curveVertex(width/1.7, (height/tot_3)-5);
              curveVertex(width/1.5, (height/tot_3)-13);
              curveVertex(width/1.25,  (height/tot_3)-14);
              curveVertex(width/1.25,  (height/tot_3)-14);
            endShape();
            fill(255);
            noStroke();
            textAlign(LEFT);
            fill(255,255,255,5);
            rect(width/1.15,(height/tot_3)-14,200, 14);
            fill(255);
            text("women 2009", width/1.2,(height/tot_3)-14);
            text(dati[3].donne, width/1.1,(height/tot_3)-14);
            textSize(12);
          }

}

// Totale 5° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
          strokeCap(SQUARE);
            stroke(200,185,99);
            strokeWeight(dati[4].totali/Scala);
            curveVertex(width/4, (height/tot_4)-112);
            curveVertex(width/4, (height/tot_4)+u);
            curveVertex(width/3.2, (height/tot_4)-112);
            curveVertex(width/2.5, (height/tot_4)-17);
            curveVertex(width/2,  height/tot_4)
            curveVertex(width/2,  (height/tot_4)-20);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_4),200, 14);
          noFill();
//mouseover totale 5° corda
          if ( mouseX >= 500 && mouseX <= 726 && mouseY >= 525 && mouseY <= 541 ){
              noStroke();
              beginShape();
                  strokeCap(SQUARE);
                  stroke(200,185,155);
                  strokeWeight(dati[4].totali/Scala);
                  curveVertex(width/4, (height/tot_4)-112);
                  curveVertex(width/4, (height/tot_4)+u);
                  curveVertex(width/3.2, (height/tot_4)-112);
                  curveVertex(width/2.5, (height/tot_4)-17);
                  curveVertex(width/2,  height/tot_4)
                  curveVertex(width/2,  (height/tot_4)-20);
              endShape();
              fill(255);
              noStroke();
              textAlign(LEFT);
              fill(255,255,255,5);
              rect(width/1.15,(height/tot_4)-2,200, 14);
              fill(255);
              text("total 2010", width/1.2,(height/tot_4));
              text(dati[4].totali,width/1.1,(height/tot_4));
              textSize(12);
           }

}

// Uomini 5° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(99,135,194);
            strokeWeight((dati[4].uomini) /Scala);
            curveVertex(width/2, (height/tot_4));
            curveVertex(width/2, (height/tot_4) +4);
            curveVertex(width/1.7, (height/tot_4)+5);
            curveVertex(width/1.5, (height/tot_4)+13);
            curveVertex(width/1.25, (height/tot_4)+14);
            curveVertex(width/1.25,  (height/tot_4)+14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_4)+14,200, 14);
//mouseover uomini 5° corda
          if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 545 && mouseY <= 553){
            noStroke();
            beginShape();
              strokeCap(SQUARE);
              stroke(149,185,194);
              strokeWeight((dati[4].uomini) /Scala);
              curveVertex(width/2, (height/tot_4));
              curveVertex(width/2, (height/tot_4) +4);
              curveVertex(width/1.7, (height/tot_4)+5);
              curveVertex(width/1.5, (height/tot_4)+13);
              curveVertex(width/1.25, (height/tot_4)+14);
              curveVertex(width/1.25,  (height/tot_4)+14);
            endShape();
            fill(255);
            noStroke();
            textAlign(LEFT);
            fill(255,255,255,5);
            rect(width/1.15,(height/tot_4)+14,200, 12);
            fill(255);
            text("men 2010", width/1.2,(height/tot_4)+14);
            text(dati[4].uomini, width/1.1,(height/tot_4)+14);
            textSize(12);
          }
}
// Donne 5° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(192,60,99);
            strokeWeight((dati[4].donne) /Scala);
            curveVertex(width/2, (height/tot_4));
            curveVertex(width/2, (height/tot_4)-2);
            curveVertex(width/1.7, (height/tot_4)-3);
            curveVertex(width/1.5, (height/tot_4)-13);
            curveVertex(width/1.25,  (height/tot_4)-14);
            curveVertex(width/1.25,  (height/tot_4)-14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_4)-14,200, 14);
//mouseover donne 5° corda
          if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 517 && mouseY <= 525){
            noStroke();
            beginShape();
              strokeCap(SQUARE);
              stroke(192,110,149);
              strokeWeight((dati[4].donne) /Scala);
              curveVertex(width/2, (height/tot_4));
              curveVertex(width/2, (height/tot_4)-2);
              curveVertex(width/1.7, (height/tot_4)-3);
              curveVertex(width/1.5, (height/tot_4)-13);
              curveVertex(width/1.25,  (height/tot_4)-14);
              curveVertex(width/1.25,  (height/tot_4)-14);
            endShape();
            fill(255);
            noStroke();
            textAlign(LEFT);
            fill(255,255,255,5);
            rect(width/1.15,(height/tot_4)-14,200, 12);
            fill(255);
            text("women 2010", width/1.2,(height/tot_4)-14);
            text(dati[4].donne, width/1.1,(height/tot_4)-14);
            textSize(12);
                              }
}

//Totale 6° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
          strokeCap(SQUARE);
            stroke(200,185,99);
            strokeWeight(dati[5].totali/Scala);
            curveVertex(width/4, (height/tot_5)-190);
            curveVertex(width/4, (height/tot_5)+o);
            curveVertex(width/3.2, (height/tot_5)-190);
            curveVertex(width/2.5,  (height/tot_5)-23)
            curveVertex(width/2,  height/tot_5)
            curveVertex(width/2,  (height/tot_5)-15);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_5),200, 14);
          noFill();
//mouseover totale 5° corda
          if ( mouseX >= 500 && mouseX <= 726 &&
               mouseY >= 630 && mouseY <= 650 ){
               noStroke();
                beginShape();
                  strokeCap(SQUARE);
                  stroke(200,185,155);
                  strokeWeight(dati[5].totali/Scala);
                  curveVertex(width/4, (height/tot_5)-190);
                  curveVertex(width/4, (height/tot_5)+o);
                  curveVertex(width/3.2, (height/tot_5)-190);
                  curveVertex(width/2.5,  (height/tot_5)-23)
                  curveVertex(width/2,  height/tot_5)
                  curveVertex(width/2,  (height/tot_5)-15);
                endShape();
                fill(255);
                noStroke();
                textAlign(LEFT);
                fill(255,255,255,5);
                rect(width/1.15,(height/tot_5)-2,200, 14);
                fill(255);
                text("total 2011", width/1.2,(height/tot_5));
                text(dati[5].totali,width/1.1,(height/tot_5));
                textSize(12);
           }


}

// Uomini 6° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(99,135,194);
            strokeWeight((dati[5].uomini) /Scala);
            curveVertex(width/2, (height/tot_5));
            curveVertex(width/2, (height/tot_5) +5);
            curveVertex(width/1.7, (height/tot_5)+6);
            curveVertex(width/1.5, (height/tot_5)+13);
            curveVertex(width/1.25, (height/tot_5)+14);
            curveVertex(width/1.25,  (height/tot_5)+14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_5)+14,200, 14);
//mouseover uomini 6° corda
          if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 649 && mouseY <= 659){
            noStroke();
            beginShape();
              strokeCap(SQUARE);
              stroke(149,185,194);
              strokeWeight((dati[5].uomini) /Scala);
              curveVertex(width/2, (height/tot_5));
              curveVertex(width/2, (height/tot_5) +5);
              curveVertex(width/1.7, (height/tot_5)+6);
              curveVertex(width/1.5, (height/tot_5)+13);
              curveVertex(width/1.25, (height/tot_5)+14);
              curveVertex(width/1.25,  (height/tot_5)+14);
            endShape();
            fill(255);
            noStroke();
            textAlign(LEFT);
            textSize(12);
            fill(255,255,255,5);
            rect(width/1.15,(height/tot_5)+14,200, 14);
            fill(255);
            text("men 2011", width/1.2,(height/tot_5)+14);
            text(dati[5].uomini, width/1.1,(height/tot_5)+14);
            textSize(12);
          }
}
// Donne 6° corda
for (var i = 0; i < dati.length; i++) {
        noFill();
          beginShape();
            strokeCap(SQUARE);
            stroke(192,60,99);
            strokeWeight((dati[5].donne) /Scala);
            curveVertex(width/2, (height/tot_5));
            curveVertex(width/2, (height/tot_5)-4);
            curveVertex(width/1.7, (height/tot_5)-5);
            curveVertex(width/1.5, (height/tot_5)-13);
            curveVertex(width/1.25,  (height/tot_5)-14);
            curveVertex(width/1.25,  (height/tot_5)-14);
          endShape();
          noStroke();
          fill(255,255,255,5);
          rect(width/1.15,(height/tot_5)-14,200, 14);
//mouseover donne 6° corda
          if ( mouseX >= 750 && mouseX <= 1150 && mouseY >= 619 && mouseY <= 633){
            noStroke();
            beginShape();
              strokeCap(SQUARE);
              stroke(192,110,149);
              strokeWeight((dati[5].donne) /Scala);
              curveVertex(width/2, (height/tot_5));
              curveVertex(width/2, (height/tot_5)-4);
              curveVertex(width/1.7, (height/tot_5)-5);
              curveVertex(width/1.5, (height/tot_5)-13);
              curveVertex(width/1.25,  (height/tot_5)-14);
              curveVertex(width/1.25,  (height/tot_5)-14);
            endShape();
            fill(255);
            noStroke();
            textAlign(LEFT);
            textSize(12);
            fill(255,255,255,5);
            rect(width/1.15,(height/tot_5)-14,200, 14);
            fill(255);
            text("women 2011", width/1.2,(height/tot_5)-14);
            text(dati[5].donne, width/1.1,(height/tot_5)-14);
            textSize(12);
          }
}

//Totale corda di tutti gli anni
for (var i = 0; i < dati.length; i++) {
       fill(200,185,99);
       noFill();
         beginShape();
         strokeCap(SQUARE);
           stroke(200,185,99);
           strokeWeight(dati[6].totali/Scala);
           curveVertex(width/8, height/2);
           curveVertex(width/8, height/2);
           curveVertex(width/5, height/2);
           curveVertex(width/3.9, height/2);
           curveVertex(width/3.9, height/2);
       endShape();
}

var dimensione = height/(dati.length+1);
for (var i = 0; i < dati.length; i++) {
    noStroke();
    fill(255);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    rect(width/2,(height/tot_0),6,(dati[0].totali/Scala));
    rect(width/1.25,(height/tot_0)-14,6,(dati[0].donne/Scala));
    rect(width/1.25,(height/tot_0)+14,6,(dati[0].uomini/Scala));
    rect(width/2,(height/tot_1),6, (dati[1].totali/Scala) );
    rect(width/1.25,(height/tot_1)-14,6,(dati[1].donne/Scala));
    rect(width/1.25,(height/tot_1)+14,6,(dati[1].uomini/Scala));
    rect(width/2,(height/tot_2),6,(dati[2].totali/Scala));
    rect(width/1.25,(height/tot_2)-14,6,(dati[2].donne/Scala));
    rect(width/1.25,(height/tot_2)+14,6,(dati[2].uomini/Scala));
    rect(width/2,(height/tot_3),6,(dati[3].totali/Scala));
    rect(width/1.25,(height/tot_3)-14,6,(dati[3].donne/Scala));
    rect(width/1.25,(height/tot_3)+14,6,(dati[3].uomini/Scala));
    rect(width/2,(height/tot_4),6,(dati[4].totali/Scala));
    rect(width/1.25,(height/tot_4)-14,6,(dati[4].donne/Scala));
    rect(width/1.25,(height/tot_4)+14,6,(dati[4].uomini/Scala));
    rect(width/2,(height/tot_5),6,(dati[5].totali/Scala));
    rect(width/1.25,(height/tot_5)-14,6,(dati[5].donne/Scala));
    rect(width/1.25,(height/tot_5)+14,6,(dati[5].uomini/Scala));
    rect(width/8,height/2, 6,(dati[6].totali/Scala));
    textAlign(LEFT);
    textSize(18);
    text("Total Deads 2006 to 2011",175,height/2.5);
    textSize(24);
    text(dati[6].totali, 190,height/1.79);
    textSize(12);
  }

noStroke();
textAlign(CENTER, CENTER);
fill(200,185,99);
    for (var i = 0; i < dati.length; i++) {
      fill(255);
      text(dati[0].anno, width/2.02, height/12 + 30);
      text(dati[1].anno, width/2.02, height/12 + 130);
      text(dati[2].anno, width/2.02, height/12 + 237);
      text(dati[3].anno, width/2.02, height/12 + 342);
      text(dati[4].anno, width/2.02, height/12 + 457);
      text(dati[5].anno, width/2.02, height/12 + 559);
    }
noSmooth();
} // draw()
function gotSpreadsheet(colori) {
  println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < colori.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var colore = {
                  // dati, nomi delle colonne, i parametri
                  "colore": colori.feed.entry[i].gsx$colore.$t,
                  "anno": colori.feed.entry[i].gsx$anno.$t,
                  "totali": colori.feed.entry[i].gsx$totali.$t,
                  "donne": colori.feed.entry[i].gsx$donne.$t,
                  "uomini": colori.feed.entry[i].gsx$uomini.$t,
                  "forma": colori.feed.entry[i].gsx$forma.$t
              }
              println(colore); // < debug, verifica oggetto 1x1
    dati.push(colore); // < inserimento nell'array del dato
  }
} // gotSpreadsheet(colori)




// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function keyTyped() {  // se premo a fermo il loop

 if (key === 's') {
    saveCanvas();
 }
}
