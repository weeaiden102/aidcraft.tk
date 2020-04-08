   let snake;
let rez = 20;
let food;
let w;
let h;
let c;
w = 400 / rez;
h = 400 / rez;
window.onload = function() {
  let context = new AudioContext();
}

function preload() {
	soundFormats("mp3");
	c = loadSound("a.mp3");
}

function setup() {
  frameRate(5); 
	var myCanvas = createCanvas(400, 400);
    myCanvas.parent("a");
	snake = new Snake();
	foodLocation();
	soundFormats("mp3");
  c = loadSound("a.mp3");
	snake.ai = new Ai();
}

function foodLocation() {
  if(snake.body.length <= 400){
	let x = floor(random(w));
	let y = floor(random(h));
	food = createVector(x, y);
	for(let a = 0;a < snake.body.length -1;a++){
    for(let b = 0;b < snake.body.length -1;b++){
      if((snake.body[a].x === food.x)&&(snake.body[a].y === food.y)){
        foodLocation();
      }
    }
  }
  }
}

function keyPressed() {
		/*if (keyCode === UP_ARROW && snake.ydir === 0) {
			snake.setDir(0, -1);
		} else if (keyCode === RIGHT_ARROW && snake.xdir === 0) {
			snake.setDir(1, 0);
		} else if (keyCode === LEFT_ARROW && snake.xdir === 0) {
			snake.setDir(-1, 0);
		} else if (keyCode === DOWN_ARROW && snake.ydir === 0) {
			snake.setDir(0, 1);
		} else */
	if (key === " ") {
		snake.grow();
	}
}

function draw() {
	scale(rez);
	background(150);
	snake.update();
	snake.show();
	if (snake.endGame()) {
		snake = new Snake();
		snake.ai = new Ai();
    foodLocation();
	}
	if (snake.eat(food)) {
		foodLocation();
    let context = new AudioContext();
    context.resume()
		c.play();
	}
	fill(255, 0, 0);
	noStroke();
  if(snake.body.length < 400){
	rect(food.x, food.y, 1, 1);
	fill(255);
  }else{
    food = "no food";
  }
	textSize(1);
	text(snake.body.length, 1, 1);
	snake.ai.run();
}