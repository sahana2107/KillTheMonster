class Chain {
    constructor(bodyA, pointB)
    {var options={
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1,
        length: 200
    }
    this.pointB=pointB
    this.chain=Matter.Constraint.create(options);
    World.add(world, this.chain);
    

    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}