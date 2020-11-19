class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:1.0,
          friction: 1.0,
          density: 1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push() 
      translate(pos.x, pos.y); 
      rectMode(CENTER);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER); 
      image(this.image, 0,0,50,50) 
      pop()
    }
  };
