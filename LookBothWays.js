var song;

function preload(){
	song = loadSound('sound/bensound-summer.mp3');
	//song2 = loadSound('sound/420356__eponn__crash.wav');
}
function setup() {
	
	createCanvas(400, 400);
	background(100);
	noStroke();
	    song.loop();

}

//Main Character
var x = 200;
var y = 380;

//Score
var score = 0;
var highscore = 0;

//Bird Spawning
var xPositions = [Math.random(0, 200), Math.random(201, 400), Math.random(0, 400)];
var downY = 0;
var downY2 = 0;
var downY3 = 0;

//Road & Car
var roadY = 0;
var roadY2 = 40;
var carX = 0;
var carX2 = 400;

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
fill(223, 245, 79);
rect(carX, roadY + 5, 36, 20);

//window
fill(41, 35, 35);
rect(carX + 8, roadY + 7, 19, 16);

//wheels
rect(carX + 3, roadY + 3, 6, 2);
rect(carX + 25, roadY + 3, 6, 2);
rect(carX + 3, roadY + 25, 6, 2);
rect(carX + 25, roadY + 25, 6, 2);

};

var drawCar2 = function() {

//body
fill(81, 86, 245);
rect(carX2, roadY2 + 5, 36, 20);

//window
fill(41, 35, 35);
rect(carX2 + 8, roadY2 + 7, 19, 16);

//wheels
rect(carX2 + 3, roadY2 + 3, 6, 2);
rect(carX2 + 25, roadY2 + 3, 6, 2);
rect(carX2 + 3, roadY2 + 25, 6, 2);
rect(carX2 + 25, roadY2 + 25, 6, 2);

};


//Road Movment Program
var drawRoad = function(){
 fill(115, 111, 111);
 rect(0, roadY, 400, 80);
};

//Power-ups

//Scenery



// Starting Screen
var drawScene1 =function(){
	
//Main Screen
background(84, 87, 176);
fill(255, 255, 255);

//Controls
textSize(45);
text("Controls", 122, 36);

//Left Arrow
rect(116, 106, 40, 18);
triangle(94, 115, 116, 136, 116, 95);
textSize(25);
text("Left", 104, 159);

//Right Arrow
rect(251, 106, 40, 18);
triangle(317, 115, 290, 136, 290, 95);
textSize(25);
text("Right", 257, 159);

//Up Arrow
rect(195, 68, 18, 40);
triangle(205, 39, 182, 68, 227, 68);
textSize(25);
text("Up", 190, 132);

//Down Arrow
rect(195, 146, 18, 40);
triangle(205, 217, 180, 186, 226, 186);
textSize(25);
text("Down", 175, 235);
//Objective 
textSize(37);
text("Objective", 130, 288);
textSize(20);
text("Avoid obstacles and ", 120, 315);
textSize(20);
text("get as far as possible",115, 342);
};

//Losing Screen
var drawScene3 = function() {

   // song.play();
  
    background(84, 87, 176);
    
    score -= 1;
    if (score > highscore) {
     highscore = score;   
    }
	
    fill(255, 255, 255);
    textSize(50);
    text("Game Over!", 65, 55);
    textSize (30);
    text("Your score is " + score, 80, 126);
		text("The Highscore is " + highscore, 56, 250);
};

// Frogger game
var drawScene2 =function(){
    draw = function() {
        
        background(127, 191, 90);
        
    drawRoad();
    
    roadY += 2;
    
    roadY2 += 2;
    
    score += 1;
    
    
    //Score Display
    fill(0, 0, 0);
    textSize(30);
    text(score, 0, 25);
  
  drawCharacter();  
  
  
    //Controls
    if (keyIsPressed && keyCode == 38) {
     y -= 2;   
    }
    if (keyIsPressed && keyCode == 40) {
     y += 2;   
    }
    if (keyIsPressed && keyCode == 39) {
     x += 3;   
    }
    if (keyIsPressed && keyCode == 37) {
     x -= 3;   
    }
	    
//Click Controls
			
if (mouseIsPressed && mouseX > 250 && mouseY > 100 && mouseY < 300) {
	x += 3;
}
			
if (mouseIsPressed && mouseX < 150 && mouseY > 100 && mouseY < 300) {
	x -= 3;
}
		
if (mouseIsPressed && mouseY < 150 && mouseX < 300 && mouseX > 100) {
	y -= 2;
}
		
if (mouseIsPressed && mouseY > 250 && mouseX < 300 && mouseX > 100) {
	y += 2;
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
    
    if (score > 600) {
     carX += 2;   
    }
    
    if (carX > 400) {
     carX = 0;   
    }
    
    if (roadY > 400) {
        roadY = 0;
        roadY2 = 40;
        carX = 0;
        carX2 = 400;
    }
    
    
    //Car Collison
    if (roadY < y + 20 && roadY > y - 20 && carX < x + 30 && carX > x - 30) {
	drawScene3();
        currentScene = 3;
        carX = x;
        roadY = y;
        carX2 = 500;
        roadY2 = 500;
        downY = 500;
        downY2 = 500;
        downY3 = 500;
    }
    
    if (score > 1600) {
        drawCar2();
    }
    
    carX2 -= 3;
    
    if (carX2 < -30) {
     carX2 = 400;   
    }
    
    //Car2 Collison
    if (roadY2 < y + 20 && roadY2 > y - 20 && carX2 < x + 30 && carX2 > x - 30 && score > 1600) {
        drawScene3();
        currentScene = 3;
        carX = x;
        roadY = y;
        carX2 = 500;
        roadY2 = 500;
        downY = 500;
        downY2 = 500;
        downY3 = 500;
    }
    
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
        xPositions[0] = x;
        downY2 = 500;
        downY3 = 500;
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
        xPositions[1] = x;
    }
    
    if (score > 1000) {
     drawBird3();
    if (downY3 > 510) {
        downY3 = 0;
        xPositions[2] = random(0, 350);
     }
    
    downY3 += 3;   
    }
    
    //Bird3 Collision
    if (downY3 < y + 25 && downY3 > y - 25 && xPositions[2] < x + 10 && xPositions[2] > x - 30) {
        drawScene3();
        currentScene = 3;
        downY3 = y;
        downY2 = 500;
        downY = 500;
        xPositions[2] = x;
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
        if (keyIsPressed && keyCode === RIGHT) {
        x += 0;   
        }
        if (keyIsPressed && keyCode === LEFT) {
        x -= 0;   
    }
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
    currentScene = 2;
    drawScene2();
    }
};
