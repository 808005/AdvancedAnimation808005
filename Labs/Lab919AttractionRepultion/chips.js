

//  AJ
//  913

class Chip {

  constructor(x, y, dx, dy) {
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.1)
    this.clr = color(random(255), random(255),random(255),random(255));
    this.angle = 0;
  }
  checkEdges(){
    if( this.loc.x> width) {
      this.vel.x = -this.vel.x
    }
    if( this.loc.x < 0) {this.vel.x = -this.vel.x}
    if( this.loc.y > height) {
      this.loc.y = height;
      this.vel.y = -this.vel.y
    }
    if( this.loc.y< 0) {this.vel.y = -this.vel.y}
}
  run(){
    this.update();
    this.render();
    this.checkEdges();
  }

  update(){
    // this.x = this.x + this.dx;
    // this.y = this.y + this.dy;
    this.vel.add(this.acc);
    this.vel.limit(4);
    this.loc.add(this.vel);
  }

  render(){
    this.angle  = this.vel.heading() + PI/2;
    fill(this.clr);
    var x = this.loc.x;
    var y = this.loc.y;
    var I = x - 5
    var J = y
    push();
      translate(this.loc.x, this.loc.y)//
      rotate(this.angle);
      triangle(-5, 0, 5, 0, 0,-15);
    pop();

  }


}// ++++++++++++++++++++++++ End of class
Class Ball {
constructor(x,y,dx,dy){;
this.loc = createVector(x, y);
this.vel = createVector(dx, dy);
this.clr = color(random(255), random(255),random(255),random(255));
this.acc = createVector(0,0.1);

}
checkEdges(){
  if( this.loc.x> width) {
    this.vel.x = -this.vel.x
  }
  if( this.loc.x < 0) {this.vel.x = -this.vel.x}
  if( this.loc.y > height) {
    this.loc.y = height;
    this.vel.y = -this.vel.y
  }
  if( this.loc.y< 0) {this.vel.y = -this.vel.y}
}
  run(){
    this.update();
    this.render();
    this.checkEdges();
}

update(){
  var DisToBall;
  if(this.id >= 0) {DisToBall = this.loc.Dist(Mainball.loc);
if(DisToBall < 250){
this.acc = PS.Vector.sub(Mainball.loc, this.loc)
this.acc.normalize();
this.acc.multi(0.1);

}
if(DisToBall < 150){
  this.acc = PS.Vector.sub(this.loc, Mainball.loc)
  this.acc.normalize();
  this.acc.multi(0.5);



}




  }
  this.loc.add(this.vel);
}

render(){
  fill(this.clr);
  var x = this.loc.x;
  var y = this.loc.y;
ellipse(56, 46, 55, 55);






}
