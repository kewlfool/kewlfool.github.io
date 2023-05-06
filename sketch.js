

var snow = [];


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  // frameRate(1);  // Animate slowly
  snow.push(new Snowflake());

}

function draw() {
  background(51);
  // Draws the snowflake!
  k.render();
  // Iterate

  rect(mouseX, mousey, 50, 50);

  // Let's not do it more than 5 times. . .
  if (k.getCount() > 7) {
    k.restart();
  }



}

function keyPressed() {

  if (key == ' ') {

    k.nextLevel();

  }

}


function mouseMoved() {

  k.moves();

}
