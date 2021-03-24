class paper extends circularMatter
{
    constructor(x,y){
        this.image=loadImage("paper.png")
        this.body.position.x = 100
        this.body.position.y = 1000
        super.display();
       
    }
}
 function keyPressed(){
     if (keyCode ===UP_Arrow){
         circularMatter.body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})
         circularMatter.Body.applyForce()
     }
 } 