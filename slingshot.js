class Slingshot {

constructor(bodyA,pointB){

    var options = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.8,
        length:600
    }

this.pointB = pointB

this.sling = Constraint.create(options)
World.add(world,this.sling)
}

display(){ 

 var pointA = this.sling.bodyA.position
 var pointB = this.pointB
stroke("green")
strokeWeight(6)
line (pointA.x,pointA.y,pointB.x,pointB.y)

}
}