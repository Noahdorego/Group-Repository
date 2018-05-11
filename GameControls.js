function setup() {
    noStroke();
}

var x = 200;
var y = 380;
var randomX = random(0, 200);
var randomX2 = random(201, 400);
var downY = 0;
var downY2 = 0;
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
    rect(randomX + 5, downY + 10, 10, 15); 
    fill(255, 255, 255);
    rect(randomX, downY, 20, 20); 
    rect(randomX - 10, downY + 3, 40, 10);
};

var drawBird2 = function(){
    fill(240, 218, 19);
    rect(randomX2 + 5, downY2 + 10, 10, 15); 
    fill(255, 255, 255);
    rect(randomX2, downY2, 20, 20); 
    rect(randomX2 - 10, downY2 + 3, 40, 10);
    
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

var drawScene3 = function() {
    background(84, 87, 176);
    
    fill(255, 255, 255);
    textSize(50);
    text("Game Over!", 65, 55);
};

// Frogger game
var drawScene2 =function(){
    draw = function() {
        
        background(235, 235, 235);
        
    drawRoad();
    
    roadY += 2;
    
  
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
    
    //x & y display
    //fill(0, 0, 0);
    //text(x, 100, 40);
    //text(y, 200, 40);
    
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
        randomX = random(0, 200);
     }
    
    downY += 2.5;
    
    if (downY < y + 20 && downY > y - 20 && randomX < x + 20 && randomX > x - 20) {
        drawScene3();
        currentScene = 3;
        downY = y;
        downY2 = 500;
    }
    

    drawBird2();
    if (downY2 > 410) {
        downY2 = 0;
        randomX2 = random(201, 350);
     }
     
    
    
    downY2 += 3.5;
    
    if (downY2 < y + 20 && downY2 > y - 20 && randomX2 < x + 20 && randomX2 > x - 20) {
        drawScene3();
        currentScene = 3;
        downY2 = y;
    }
    
    
    if (roadY > 400) {
        roadY = 0;
        carX = 0;
    }
    
    if (roadY < y + 20 && roadY > y - 20 && carX < x + 20 && carX > x - 20) {
        drawScene3();
        currentScene = 3;
        carX = x;
        roadY = y;
    }
    
        };
    };
    



draw = function() {
    if (currentScene === 2) {
        drawScene2();
    } else if (currentScene === 1) {
        drawScene1();
    } else if (currentScene === 3) {
        drawScene3();
    }
};


mouseClicked=function(){
    if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 3) {
    downY = 0;
    downY2 = 0;
    roadY = 0;
    carX = 0;
    var x = 200;
    var y = 380;
        drawScene2();
    }
};
