

//  AJ
//  906

// Setup runs once at the start of your program
var x, y, dx, dy, clr;

function setup() {
  // put start code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//  back ground color
  x =  280;
  y =  400;
  x1 = 340;
  y1 = 400;
  x2 = 400;
  y2 = 400;
  x3 = 460;
  y3 = 400;
  x4=  520;
  y4 = 400;
  x5 = 575;
  y5 = 448;
  x6 = 400;
  y6 = 535;
  x7 = 100;
  y7 = 440;
  x8 = 214;
  y8 = 503;
  dx6 =  0;
  dy6 = 0.15;
  dx7 = 0;
  dy7 = -3;
  dx5 = 0;
  dy5 = -2;
  dx8 =  2;
  dy8 = 0;
  dxAL = 0
  dyAl = -0.2
  // Alignement
  clr = color(100,100,100);
  // Alignement
  clr1 = color(160, 170, 200);
  // Alignement
  clr2 = color(255, 204, 0);
  // Alignement
  clr4 = color('rgb(0,255,0)');
  // beige circle
  clr5 = color(255,255,255);
  // green circle
  clr6 = color('rgba(0,255,0, 0.25)');
  // red circle
  clr7 = color(0, 0, 204);
  // blue circle
  clr8 = color(255, 0, 0);
  // Alignement
  clr9 = color(160, 170, 200);

}


//  Draw runs 30 times each second
function draw() {
  // put drawing code here
  background(20,20,20);
  var msg = "mx = " + mouseX + " , my = " + mouseY;
  text(msg,mouseX,mouseY);
  textSize(10);
  ellipse(x, y, 55, 55);
  fill(clr);
  ellipse(x1, y1, 55, 55);
  fill(clr1);
  ellipse(x2, y2, 55, 55);
  fill(clr2);
  ellipse(x3, y3, 55, 55);
  fill(clr4);
  ellipse(x4, y4, 55, 55);
  fill(clr5);
  ellipse(x5, y5, 55, 55);
  fill(clr6);
  ellipse(x6, y6, 55, 55);
  fill(clr7);
  ellipse(x7, y7, 55, 55);
  fill(clr8);
  ellipse(x8, y8, 55, 55);
  fill(clr9);
  x7 = x7 + dx7;
  y7 = y7 + dy7;
  x6 = x6 + dx6;
  y6 = y6 + dy6;
  x5 = x5 + dx5;
  y5 = y5 + dy5;
if (y7<125) {dy7 = 0};
if (y5<175) {dy5 = 0};

if(y,y1,y2,y3,y4,y8<55) {dyAL = 0};

  x8 = x8 + dx8;
  y8 = y8 + dy8;

  x = x + dxAL;
  y = y + dyAl;
  x1 = x1 + dxAL;
  y1 = y1 + dyAl;
  x2 = x2 + dxAL;
  y2 = y2 + dyAl;
  x3 = x3 + dxAL;
  y3 = y3 + dyAl;
  x4 = x4 + dxAL;
  y4 = y4 + dyAl;






}
