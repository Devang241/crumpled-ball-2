class Ball {
  constructor(x,y,radius){
      var option = {
          'isStatic':false,
          'density':1.2,
          'friction':0.05,
          'restitution':0.5
      }
      this.body = Bodies.circle(x, y,radius,option);
      this.x=x;
      this.y=y;
      this.radius = radius;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
  }
  display(){

    push();
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER)
    imageMode(CENTER);
    image(this.image,56,56,55,55);
    pop();
}
}