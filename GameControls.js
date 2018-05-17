function setup() {
    noStroke();
}

//Main Character
var x = 200;
var y = 380;

//Score
var score = 0;

//Bird Spawning
var xPositions = [random(0, 200), random(201, 400), random(0, 400)];
var downY = 0;
var downY2 = 0;
var downY3 = 0;

//Road & Car
var roadY = 0;
var carX = 0;

var currentScene = 1;

// Character
var drawCharacter = function(){
var player = fill(255, 0, 0);
    ellipse(x, y, 20, 20);  
};

// Obstacles

var drawBird = function(){
    fill(240, 218, 19);
    rect(xPositions[0] + 5, downY + 10, 10, 15); 
    fill(255, 255, 255);
    rect(xPositions[0], downY, 20, 20); 
    rect(xPositions[0] - 10, downY + 3, 40, 10);
};

var drawBird2 = function(){
    fill(240, 218, 19);
    rect(xPositions[1] + 5, downY2 + 10, 10, 15); 
    fill(255, 255, 255);
    rect(xPositions[1], downY2, 20, 20); 
    rect(xPositions[1] - 10, downY2 + 3, 40, 10);
    
};

var drawBird3 = function(){
    fill(240, 218, 19);
    rect(xPositions[2] + 5, downY3 + 10, 10, 15); 
    fill(255, 255, 255);
    rect(xPositions[2], downY3, 20, 20); 
    rect(xPositions[2] - 10, downY3 + 3, 40, 10);
    
};

var drawCar = function() {

//body
fill(3, 230, 44);
rect(carX, roadY, 36, 20);

//window
fill(41, 35, 35);
rect(carX + 8, roadY + 2, 19, 16);

//wheels
rect(carX + 3, roadY - 2, 6, 2);
rect(carX + 25, roadY - 2, 6, 2);
rect(carX + 3, roadY + 20, 6, 2);
rect(carX + 25, roadY + 20, 6, 2);

};

//Road Movment Program
var drawRoad = function(){
 fill(115, 111, 111);
 rect(0, roadY, 400, 80);
};

//Scenery



// Starting Screen
var drawScene1 =function(){
    background(84, 87, 176);
    
    fill(255, 255, 255);
    textSize(50);
    text("Frogger", 115, 55);
};

//Losing Screen
var drawScene3 = function() {
    background(84, 87, 176);
    
    score -= 1;
    fill(255, 255, 255);
    textSize(50);
    text("Game Over!", 65, 55);
    textSize (30);
    text("Your score is " + score, 72, 126);
};

// Frogger game
var drawScene2 =function(){
    draw = function() {
        
        background(235, 235, 235);
        
    drawRoad();
    
    roadY += 2;
    
    score += 1;
    
    //Score Display
    fill(0, 0, 0);
    textSize(30);
    text(score, 0, 25);
  
  drawCharacter();  
  
    //Controls
  
    if (keyIsPressed && keyCode === UP) {
     y -= 2;   
    }
    if (keyIsPressed && keyCode === DOWN) {
     y += 2;   
    }
    if (keyIsPressed && keyCode === RIGHT) {
     x += 3;   
    }
    if (keyIsPressed && keyCode === LEFT) {
     x -= 3;   
    }
    
    //Borders
    
    if (x < 10) {
     x = 10;   
    }
    
    if (x > 388) {
     x = 388;   
    }
    
    if (y < 11) {
     y = 11;   
    }
    
    if (y > 388) {
     y = 388;   
    }
    
    drawCar();
    
    carX += 3;
    
    drawBird();
    if (downY > 410) {
        downY = 0;
        xPositions[0] = random(0,200);
     }
    
    downY += 4;
    
    //Bird1 Collision
    if (downY < y + 25 && downY > y - 25 && xPositions[0] < x + 10 && xPositions[0] > x - 30) {
        drawScene3();
        currentScene = 3;
        downY = y;
        downY2 = 500;
    }
    

    drawBird2();
    if (downY2 > 410) {
        downY2 = 0;
        xPositions[1] = random(201, 400);
     }
     
    downY2 += 5;
    
    
    //Bird2 Collision
    if (downY2 < y + 25 && downY2 > y - 25 && xPositions[1] < x + 10 && xPositions[1] > x - 30) {
        drawScene3();
        currentScene = 3;
        downY2 = y;
    }
    
    if (score > 1000) {
     drawBird3();
    if (downY3 > 410) {
        downY3 = 0;
        xPositions[2] = random(201, 350);
     }
    
    downY3 += 3;   
    }
    
    //Bird3 Collision
    if (downY3 < y + 25 && downY3 > y - 25 && xPositions[2] < x + 10 && xPositions[2] > x - 30) {
        drawScene3();
        currentScene = 3;
        downY3 = y;
        downY2 = 500;
    }
    
    if (roadY > 400) {
        roadY = 0;
        carX = 0;
    }
    
    //Car Collison
    if (roadY < y + 20 && roadY > y - 20 && carX < x + 20 && carX > x - 20) {
        drawScene3();
        currentScene = 3;
        carX = x;
        roadY = y;
    }
    
        };
    };
    


// Scene Drawing Loop
draw = function() {
    if (currentScene === 2) {
        drawScene2();
    } else if (currentScene === 1) {
        drawScene1();
    } else if (currentScene === 3) {
        drawScene3();
        xPositions += 1000;
    }
};


// Scene Change
mouseClicked=function(){
    if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 3) {
    xPositions = [random(0, 200), random(201, 400), random(0, 400)];
    downY = 0;
    downY2 = 0;
    downY3 = 0;
    roadY = 0;
    carX = 0;
    x = 200;
    y = 380;
    score = 0;
        drawScene2();
    }
};
