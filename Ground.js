class Ground{
    constructor(x,y,width,height){
        var p={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,p)
        World.add(world,this.body);
    }
    display(){
        fill("orange")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}