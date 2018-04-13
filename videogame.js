#Video Game Design:

//Intro:
function setup() {
  createCanvas(500, 500);
noStroke()
}

var x = 0
var y = 0



function draw() {
  background(64, 137, 232);
	
  //Logo
  x = 200
	y = 200
	fill(255, 178, 0);
	ellipse(250, 250, x, y );
	
  //text
	fill(0, 0, 0);
	textSize(50);
	text("Logo", 195, 250);
}

//Amanuels part below
class Rectangle {float left;
float right;
float top; 
float bottom;

Rectangle(float x, float y, float w, float  h) {
	left x;
	right = x + w;
	top y;
	bottom = y + h;
}	

boolean intersects(Reectangle other) {
	return (this.left > other.right||
				this.right < other.left||
				this.top > other.bottom||
				this.bottom < other.top);
}
