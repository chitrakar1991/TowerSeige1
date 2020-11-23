class Polygon{
    constructor()
    {
        var options ={
        isStatic:false
      }

     this.body = Bodies.circle(150, 340, 10, options);
     this.image=loadImage("Images/polygon.png");
     World.add(world, this.body);
    }

    display(){
     var pos=this.body.position;
    //ellipseMode(RADIUS);
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0 , 0 , 20, 20);
    pop();
    }
}