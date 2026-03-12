# MIDTERM MARKDOWN DOCUMENT - Diego Brown
### Phase 1
I began this phase of the project by thinking about what I wanted to draw. I always liked this cute little photo of a smiley that was made out of upside down headphones. So I went with that. So I began by planning and sketching my smiley face first.
I figured Id start with the circle thats the background for the smiley face, colored yellow hypothetically, then after that I made another ellipse colored black, that would be the frame for the headphone design. I would create the headphones by placing other shapes on the black circle.
I added another ellipse, that would create the shape of the headband. Then After I would sketch lightly the yellow rectangle that splits the headband apart.
Under this rectangle I was planning to use 2 ellipses at the end of the headband to act as my earmuffs, since the rectangle would be on top, it would make the ellipses cut off at the half point making them look like earmuffs.
After this I planned on using 2 triangles and rectangles to create the shapes of padding and the size adjusters, while also making the earmuffs look more like the eyes to the smiley I wanted.
I sketched my piece out and was very happy with the results.
###Phase 2
After this phase of sketching on paper, I began the process of creating the piece on j5 editor, using the code for designs found in the class github, I translated my sketched object into code as shown below
```javascript
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
```
After this code was written and implemented, my wonderous art piece was complete.
###Phase 3 
Once this was done I found the code on the class github pertaining to the 
```javascript
function drawobject (x,y,s){
	push();
	pop();
}
function draw(){
}
```
Draw object and push and pop functions as well as the function to recall the objects I wanted to draw.
I then plugged my drawing into the aforementioned functions and put in the x, y and scale data to recall 2 copies of the piece I made. As shown with the program below

```javascript
function setup() {
  createCanvas(400, 400); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
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
  pop();
}

function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 200, 1);
}
```
This program resulted in 2 copies of my piece as desired so I moved on to the final phase of the project.
##Phase 4 
I was initially really confused on how to divide the canvas with a nested function until I looked back at the nested function code alongs we did in class before. I then found the columns example where the variables row and col were used to limit the amount of integers printed, the example is found below.

```javascript
for (let i = 0; i < 10; i++) {
	let row = "\n"; 
  for (let j = 0; j < 10; j++) {
    if (j >= i) {
		row += j.toString(); 
    }
  }
  console.log(row);
}
```
I repurposed this code because it creates the loops for columns and rows using equations that I can plug variables into, allowing me to effectively create a variable that I can add and subtract, this variable being the cells that the grid is made up of.
So i defined the variable cells, as the amount of divisions (equal on x and y since I wanted to make a grid I could scale more easily) that the grid would have. I then set another variable, the size of the cells in terms of the pixel count as the width of the canvas, width, divided by the number of cells, allowing a reprint to happen equally. I created the nested for loops with the variables I defined before, using col and row to align the drawings with x and y respectively. Since I wanted these drawings to get drawn in a uniform, scalable height and width, rather than set the x and y of the drawObject function manually, I set those to be variables as well multiplying whatever the program had row and col to be by cell size. The more cells, the higher row and col would count up, the lower the pixel cound of the cell size would be. This number is multiplied by the amount of cells there are, since it effectively equals the columns and rows created in order to print the picture repeatedly in a consistent place. This also made the drawings appear with a controllable scale, so If I wanted more space in between the pictures I could have it, However for the sake of the project, I turned in the program with the cell size to 10 and the appropriate scale size (around 0.3) to take full advantage of the canvas. The program I wrote does offset the drawing a little and due to the scale being more manual sometimes the piece bleeds out of the canvas if the correct scale is not found. I tried to attatch s to be an automatic variable but I couldnt figure out a consistent way to find the correct scale needed mathematically.
The program I wrote is shown below
```javascript
function setup() {
  createCanvas(400, 400); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
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
  pop();
}

function draw() {
  let cells = 10;// what im dividing the canvas by
  let cellsize = width/cells;// dividing by width since canvas is a square
  for (let row = 0; row < cells; row++){
    for (let col = 0; col < cells; col++ ){
      let x = col * cellsize;
      let y = row * cellsize;
      drawObject(x , y, 0.3 )
    }
  } 
}
```
Overall the project was really enjoyable and I loved making the piece of art that I had always seen while learning how to manipulate how to display that drawing on a screen, it really reminded me of the learning I did prior to entering this class, which was more based around graphic design and animation.
