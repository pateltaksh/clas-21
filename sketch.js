var object2,object1;

function setup() {
  createCanvas(800,400);
 wall=createSprite(400, 200, 50, 50);
 car=createSprite(600,200,30,50);
 wall.shapeColor="green";
 car.shapeColor="green";
 car.velocityX=-5;
}


function draw() {
  background(0);
  
  if(isTouching(car,wall)){

    car.shapeColor="red";
    wall.shapeColor="red";
  }
 
  
  
  

  bounceOff(car,wall);
  drawSprites();
  
}
