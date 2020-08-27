class Slingshot {
	constructor(object1, object2) {
	var options = {
	bodyA: object1,
	pointB: object2,
	stiffness: 0.01,
	length: 100

	}
	this.sling= Matter.Constraint.create(options)
	World.add(world,this.sling);
		}

	display () {
		strokeWeight(3);
		stroke("white");
		if (this.sling.bodyA) {
			line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
		}
	}
	fly () {
		this.sling.bodyA=null;
	}
}
