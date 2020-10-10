var bullet, wall, speed, thickness, weight;

function setup() {
  createCanvas(1600,800);
  speed = random(223,321);
  thickness = random(22,83);
  weight = random(30,52); 
 bullet = createSprite(50, 200, 50, 50);
 wall = createSprite(800, 200, thickness, height/2);

}

function draw() {
  background(255,255,255);
  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damg = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damg > 10){
      wall.shapeColor = "red";
    }
    if(damg < 10){
      wall.shapeColor = "green";
    }
  }
  
  drawSprites();
}
function hasCollided(b,w){
 bulletRightEdge = b.x + b.width;
 wallLeftEdge = w.x;
 if(bulletRightEdge>=wallLeftEdge){
   return true;
 }
   return false;
}
