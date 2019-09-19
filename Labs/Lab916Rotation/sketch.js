

//  AJ
//  906

// Setup runs once at the start of your program
var ships = [];  //  ship[0], ship[99]

function setup() {
  // put start code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//  back ground color

  for(var i = 0; i < 100; i++){
    ships[i] = new Chip(random(width), random(height), random(-3,3), random(-3,3));
  }




}


//  Draw runs 30 times each second
function draw() {
  // put drawing code here
  background(255,255,255, 20);
  for(var i = 0; i < 100; i++){
    ships[i].run();
  }

}
