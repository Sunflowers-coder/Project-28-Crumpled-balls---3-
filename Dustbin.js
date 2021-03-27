class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic : true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/Dustbin.png");
  
      World.add(world, this.body);
    }
    display(){
    fill("white");
      var pos = this.body.position;
      var angle = this.body.angle
      push();
      rotate(angle);
      imageMode(CENTER);
      //rect(this.bin1.position.x,this.bin1.position.y,200,20)
      //rect(this.bin2.position.x,this.bin2.position.y,20,100)
      // rect(this.bin3.position.x,this.bin3.position.y,20,100)
      image(this.image, 690, 370, 240, 280);
      pop();
    }
  }
