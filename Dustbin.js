class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("dustbin.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,-this.height/2,this.width,this.height)
        pop()
       
    }
}
