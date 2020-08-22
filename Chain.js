class Chain {
	constructor(object1, object2) {
	var options = {
	bodyA: object1,
	bodyB: object2,
	stiffness: 0.04,
	length: 100

	}
	this.sling= Matter.Constraint.create(options)
	World.add(world,this.sling);
		}

	display () {
		strokeWeight(3);
		stroke("white");
		line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y);
	}
}