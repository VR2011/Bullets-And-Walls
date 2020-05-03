var wall, thickness;
var bullet, speed, weight;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 40);
  bullet.shapeColor=(255,255,255);
  speed=random(223,321);
  weight=random(30, 52);
  thickness=random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
  
    if (damage>10){
      wall.shapeColor="red";

    }

    if (damage<10){

      wall.shapeColor="green";
    }
  }
  drawSprites();

}
