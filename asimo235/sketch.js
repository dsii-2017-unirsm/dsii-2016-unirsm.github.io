var url = "https://spreadsheets.google.com/feeds/list/1pXo2IVqvkHbZgZpnsEj-bxccZiiyAPpBHmgqD3wcVEA/od6/public/values?alt=json";

var data = [33,33,33,1];
var piedata = [], piecolor = [48,96,144,192];
var mouseAngle = 0, pieDelta = 0, hover = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  total = data.reduce(function(a,b){ return a+b; }, 0);
  for(var i=0,count=0;i<data.length;i++) {
    piedata.push([Math.PI * 2 * count / total, Math.PI * 2 * (count + data[i]) / total]);
    count += data[i];

  }


    // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
    loadJSON(url, gotSpreadsheet);
    //print("ciao");
    colorMode(RGB);

 // setup()

   text("pneumococco",220,783);
   fill(48);
   rect(150,780,20,20);

   fill(255);
   text("meningococco",420,783);
   fill(96);
   rect(350,780,20,20);


   fill(0);
   text("emofilo",630,783);
   fill(144);
   rect(570,780,20,20);

   fill(0);
   text("altri",630,783);
   fill(192);
   rect(570,780,20,20);

}

function draw() {
  clear();
  for(var i=0,dx=0,dy=0;i<piedata.length;i++,dx=0,dy=0) {
    fill(piecolor[i%5]);
    if(mouseAngle >= piedata[i][0] && mouseAngle < piedata[i][1]) {
      dx = Math.cos((piedata[i][0] + piedata[i][1])/2) * 10;
      dy = Math.sin((piedata[i][0] + piedata[i][1])/2) * 10;
    }
    arc(320 + dx, 200 + dy, 300, 300, piedata[i][0], piedata[i][1], PIE);
  }
}

function mouseMoved() {
  mouseAngle = Math.PI / 2 - Math.atan((320 - mouseX) / (200 - mouseY));
  if(mouseY < 200) mouseAngle = mouseAngle + Math.PI;
}

function gotSpreadsheet(anni) {
  println(anni.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < anni.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var anno = {
                  // dati, nomi delle colonne, i parametri
                  "anno": anni.feed.entry[i].gsx$anno.$t,
                  "pneumococco": anni.feed.entry[i].gsx$pneumococco.$t,
                  "meningococco": anni.feed.entry[i].gsx$meningococco.$t,
                  "emofilo": anni.feed.entry[i].gsx$emofilo.$t,
                  "altri": anni.feed.entry[i].gsx$altri.$t
              }
              println(colore); // < debug, verifica oggetto 1x1
    dati.push(colore); // < inserimento nell'array del dato
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
