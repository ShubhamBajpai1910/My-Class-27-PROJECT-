class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.1,
          'friction':1,
          'density':2
      }
     this.body=Bodies.circle(x,y,radius,options);
     this.radius=radius;

     World.add(myWorld,this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      strokeWeight(4);
      stroke("cyan")
      fill("midnightblue");
     //fill("blue");
     
      circle(0, 0,this.radius);
      pop();
    }
  }
  