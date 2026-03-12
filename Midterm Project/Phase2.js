function setup() {
  createCanvas(150, 150); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function draw() {
  fill(255,255,0);
  ellipse(75,75,130,130);//background for smiley
  fill(0);
  ellipse(75,75,100,100);//circle for headphones
  fill(255,255,0);
  ellipse(75,75,70,70);//circle to make the headphones skinny
  fill(0);
  ellipse(57,40,20,40);//left headphone
  fill(0);
  ellipse(93,40,20,40);//right headphone
  fill(255,255,0);
  rect(60,20,30,70);//headphone divider
  fill(255,255,0);
  triangle(50,50,35,60,50,60);//texture left
  fill(255,255,0);
  triangle(100,50,115,60,100,60);//texture right
  fill(255,255,0);
  rect(35,60,15,25,);//rectangle texture left
  fill(255,255,0);
  rect(100,60,15,25);//rectangle texture right
}