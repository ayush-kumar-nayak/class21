function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(400, 200, 100, 50);
  fixedRect.shapeColor = "green"

  fixedRect1 = createSprite(200, 200, 100, 50);
  fixedRect1.shapeColor = "green"

  fixedRect2 = createSprite(600, 200, 100, 50);
  fixedRect2.shapeColor = "green"
  
  movingRect = createSprite(400, 200, 50, 100);
  movingRect.shapeColor = "green"
}

function draw() {
  background(0);
  movingRect.x = mouseX
  movingRect.y = mouseY

  if (isTouching(movingRect,fixedRect)) {
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
  else
  if (isTouching(movingRect,fixedRect1)) {
    fixedRect1.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
  else
  if (isTouching(movingRect,fixedRect2)) {
    fixedRect2.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
  else {
    fixedRect.shapeColor = "green"
    fixedRect1.shapeColor = "green"
    fixedRect2.shapeColor = "green"
    movingRect.shapeColor = "green"
  }
  drawSprites();
}
