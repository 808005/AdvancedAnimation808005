

//  AJ
//  913

class Ball {

  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255), random(255),random(255),random(255));
  }

  update(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }

  render(){
    fill(this.clr);
    ellipse(this.x, this.y, 50, 50);
  }
}// ++++++++++++++++++++++++ End of class
