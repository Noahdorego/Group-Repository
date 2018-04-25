function setup() {
  createCanvas(400, 400);
    noStroke();
}

var x = 200;
var y = 380;
var randomX = random(0,400);
var downY = 0;
var currentScene;

// Character
var drawCharacter = function(){
    fill(255, 0, 0);
    ellipse(x, y, 20, 20);  
};

// Obstacles
var drawObject = function(){
    fill(0, 0, 0);
    rect(randomX, downY, 20, 20);  
};

// Starting Screen
var drawScene1 =function(){
    fill(0, 0, 0);
    text("Frogger", 91, 68);
};

// Frogger game
var drawScene2 =function(){
    draw = function() {
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
  
};

draw = function() {
    if (currentScene === 2) {
        drawScene2();
    }
};

mouseClicked=function(){
    if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 2) {
        drawScene1();
    }
};

