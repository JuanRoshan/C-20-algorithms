var fixedRect;
var movingRect;




function setup() {
  createCanvas(1200,1200);
 fixedRect= createSprite(0, 600, 50, 50);
 fixedRect.shapeColor="cyan"
 fixedRect.debug=true;
 fixedRect.velocityX=1


 movingRect= createSprite(1200, 600, 50, 50);
 movingRect.shapeColor="cyan"
 movingRect.debug=true;
 movingRect.velocityX=-1
}

function draw() {
  background(0);  
  
  // movingRect.x=mouseX;
  // movingRect.y=mouseY;
  
if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2 &&
  fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2){
  movingRect.velocityX=movingRect.velocityX*-1;
  fixedRect.velocityX=fixedRect.velocityX*-1;
}
if(movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2 &&
  fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2){
  movingRect.velocityY=movingRect.velocityY*-1;
  fixedRect.velocityY=fixedRect.velocityY*-1;
}

  drawSprites();
}