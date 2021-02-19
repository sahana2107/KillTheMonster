const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, wreckingBall, rope, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, bg, monster;
function preload(){
    bg = loadImage('images/bg.png')
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    wreckingBall=new Ball(200, 200, 100, 100);
    wreckingBall.debug-true;
    ground = new Ground(450,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,320,70,70);
    box4 = new Box(700,320,70,70);
    box5 = new Box(700,320,70,70);
    box6 = new Box(736,320,70,70);
    box7 = new Box(736,320,70,70);
    box8 = new Box(736,320,70,70);
    box9 = new Box(736,320,70,70);
    box10 = new Box(736,320,70,70);
    monster = new Monster(900,150,70,70);
    
    // rope=new Chain(wreckingBall.body, {x: 500, y: 50});
    
}

function draw(){
    background(bg)
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    wreckingBall.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    monster.display();

    // rope.display();
}
function mouseDragged(){
Matter.Body.setPosition(wreckingBall.body, {x: mouseX, y: mouseY})
}
