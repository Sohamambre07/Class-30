class Slingshot{

constructor(a,b){

var options={
bodyA:a,
bodyB:b,
length:10,
stiffness:0.03


}
this.rope= Constraint.create(options)
World.add(world,this.rope)


}

display(){
    
strokeWeight(4)
line (this.rope.bodyA.position.x, this.rope.bodyA.position.y,
    this.rope.bodyB.position.x, this.rope.bodyB.position.y)

}






}