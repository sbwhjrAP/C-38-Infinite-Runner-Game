var ball;
var position;
var c1, c2, c3, c4;

function setup(){
  createCanvas(displayWidth,displayHeight);

  ball = createSprite(250,250,10,10);
  ball.shapeColor = "red";

  c1 = createSprite(displayWidth-10,displayHeight-10,20,20);
  c2 = createSprite(displayWidth-390,displayHeight-390,20,20);
  c3 = createSprite(displayWidth-390,displayHeight-10,20,20);
  c4 = createSprite(displayWidth-10,displayHeight-390,20,20);
}

function draw(){
  background("blue");
  
    if(keyDown(LEFT_ARROW)){
      camera.position.x=camera.position.x+5;
      ball.position.x=ball.position.x+5;
      ball.shapeColor = "green";
    }
    else if(keyDown(RIGHT_ARROW)){
      camera.position.x=camera.position.x-5;
      ball.position.x=ball.position.x-5;
      ball.shapeColor = "green";
    }
    else if(keyDown(UP_ARROW)){
      camera.position.y=camera.position.y+5;
      ball.position.y=ball.position.y+5;
      ball.shapeColor = "pink";
    }
    else if(keyDown(DOWN_ARROW)){
      camera.position.y=camera.position.y-5;
      ball.position.y=ball.position.y-5;
      ball.shapeColor = "pink";
    }
    if(keyWentUp(LEFT_ARROW)){
      ball.shapeColor = "red";
    }
    else if(keyWentUp(RIGHT_ARROW)){
      ball.shapeColor = "red";
    }
    else if(keyWentUp(UP_ARROW)){
      ball.shapeColor = "red";
    }
    else if(keyWentUp(DOWN_ARROW)){
      ball.shapeColor = "red";
    }
    if (ball.isTouching(c1)) {
      c1.position.x = c1.position.x-50;
      c1.position.y = c1.position.y-50;
    }
    if (ball.isTouching(c2)) {
      c2.position.x = c2.position.x-50;
      c2.position.y = c2.position.y-50;
    }
    if (ball.isTouching(c3)) {
      c3.position.x = c3.position.x-50;
      c3.position.y = c3.position.y-50;
    }
    if (ball.isTouching(c4)) {
      c4.position.x = c4.position.x-50;
      c4.position.y = c4.position.y-50;
    }
    drawSprites();
  
}