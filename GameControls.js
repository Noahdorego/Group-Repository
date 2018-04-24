function setup() {
  createCanvas(400, 400);
    noStroke();
}

var x = 200;
var y = 380;
var randomX = random(0,400);
var downY = 0;

var drawCharacter = function(){
    fill(255, 0, 0);
    ellipse(x, y, 20, 20);  
};

var drawObject = function(){
    fill(0, 0, 0);
    rect(randomX, downY, 20, 20);  
};

draw = function () {
  background(235, 235, 235);
  
  drawCharacter();  
  
    if (keyIsPressed && keyCode === UP) {
     y -= 4;   
    }
    if (keyIsPressed && keyCode === DOWN) {
     y += 4;   
    }
    if (keyIsPressed && keyCode === RIGHT) {
     x += 4;   
    }
    if (keyIsPressed && keyCode === LEFT) {
     x -= 4;   
    }
    
    for (var i = 0; i < 20; i+=1) {
    drawObject();
    if (downY > 400) {
        downY = 0;
        randomX = random(0, 350);
     }
    }
  downY += 2;
  
};
