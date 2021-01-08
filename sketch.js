//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball;
var box1;
var box2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  }

    var ball_options = {
      restitution : 2
    }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
 
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  box1 = Bodies.rectangle(200,100,80,10,ground_options);
  World.add(world,box1);

  box2 = Bodies.rectangle(200,50,80,10,ground_options);
  World.add(world,box2);
}

function draw() {
  background(0);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  rectMode(CENTER);
  rect(box1.position.x,box1.position.y,80,10);

  rectMode(CENTER);
  rect(box2.position.x,box2.position.y,80,10);
}