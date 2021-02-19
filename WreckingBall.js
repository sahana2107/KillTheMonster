class Ball{
    constructor(x, y, radius){
        var options = { 
        'density': 4,
        'frictionAir': 0.005
        }
        this.body=Bodies.circle(x, y, radius, options);
        this.radius=radius;
        this.image=loadImage('images/hero1.png');
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position
        pos.x=mouseX
        pos.y=mouseY
        image(this.image, pos.x, pos.y, this.radius+70, this.radius)
    }
}
