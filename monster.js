class Monster{
    constructor(x, y, radius){
        var options = { 
            isStatic: true,
        'density': 0.1,
        'frictionAir': 0.005
        
        }
        this.body=Bodies.circle(x, y, radius, options);
        this.radius=radius;
        this.image=loadImage('images/m1.png');
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position
        image(this.image, pos.x, pos.y, this.radius+200, this.radius+200)
    }
}
