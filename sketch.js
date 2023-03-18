let bg;
let mx;
let my;

function preload() {
  bg = loadImage("bg.png");
  cor = loadImage("correct.png")
}
function setup() {
let canvas = createCanvas(600, 600);
  canvas.parent('sketch-container');
  noCursor();
  cursor("square.png", 32, 32);
mx=0;
my=0
}

function mousePressed() {
  mx = mouseX ;
  my = mouseY 
}

function draw() {
  
  if (
    mx > 330 &&
    mx < 350 &&
    my > 470 &&
    my < 490
  )
   {image(cor, 0, 0)}
  else {image(bg, 0, 0)}
}
