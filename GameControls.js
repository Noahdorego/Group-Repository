function setup() {
    noStroke();
}

var x = 200;
var y = 380;
var randomX = random(0, 200);
var randomX2 = random(201, 400);
var downY = 0;
var downY2 = 0;
var currentScene = 2;

// Character
var drawCharacter = function(){
    fill(255, 0, 0);
    ellipse(x, y, 20, 20);  
};

// Obstacles
var drawObject = function(){
    fill(240, 218, 19);
    rect(randomX + 5, downY + 10, 10, 15); 
    fill(255, 255, 255);
    rect(randomX, downY, 20, 20); 
    rect(randomX - 10, downY + 3, 40, 10);
};

var drawObject2 = function(){
    fill(240, 218, 19);
    rect(randomX2 + 5, downY2 + 10, 10, 15); 
    fill(255, 255, 255);
    rect(randomX2, downY2, 20, 20); 
    rect(randomX2 - 10, downY2 + 3, 40, 10);
    
};

// Starting Screen
var drawScene1 =function(){
    fill(255, 255, 255);
    text("Frogger", 91, 68);
};

// Frogger game
var drawScene2 =function(){
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
    
    for (var i = 0; i < 5; i+=1) {
    drawObject();
    if (downY > 410) {
        downY = 0;
        pushMatrix();
        randomX = random(0, 200);
        popMatrix();
     }
    }
    downY += 2;
    
    
    for (var i = 0; i < 5; i+=1) {
    drawObject2();
    if (downY2 > 410) {
        downY2 = 0;
        pushMatrix();
        randomX2 = random(201, 350);
        popMatrix();
     }
    }
    downY2 += 3;
  
    };
  


draw = function() {
    if (currentScene === 2) {
        drawScene2();
    }
};

mouseClicked=function(){
    if (currentScene === 1) {
        drawScene2();
    } 
};
