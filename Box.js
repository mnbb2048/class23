class Box{
    constructor(x,y,width,height){
        var p={
            restitution:1
        }
        this.box=Bodies.rectangle(x,y,width,height,p);
        World.add(world,this.box);
    }
    display(){
        fill("purple")
        rectMode(CENTER);
        rect(this.box.position.x,this.box.position.y,this.width,this.height);
    }
}