const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig_1, pig_2;
var bird;
var log_1, log_2,log_3,log_4;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    bird= new Bird(200,100);
    box1 = new Box(800,780,50,50);
    pig_1= new Pig(900,780);
    box2 = new Box(1000,780,50,50);
    log_1= new WoodenLog(900,755,300,PI/2)
    box3 = new Box(800,740,50,50);
    pig_2= new Pig(900,740);
    box4 = new Box(1000,740,50,50);
    log_2= new WoodenLog(900,725,300,PI/2)
    log_3= new WoodenLog(850,695,100,PI/6)
    box5 = new Box(900,695,50,50);
    log_4= new WoodenLog(950,695,100,-PI/6)

}

function draw(){
    background(0);
    Engine.update(engine);
    /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    */
    ground.display();
    bird.display();
    box1.display();
    pig_1.display();
    box2.display();
    log_1.display();
    box3.display();
    pig_2.display();
    box4.display();
    log_2.display();
    box5.display();
    log_3.display();
    log_4.display();
}