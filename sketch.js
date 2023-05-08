

let snow = [];

let gravity;
// let wind;

let file;
let textures = [];
let design;
let xoff = 0;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  file = loadImage('media/flakes32.png')
}





function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(25);
  gravity = createVector(0, 0.03);
  // wind = createVector(random(1), 0);


  for (let x = 0; x < file.width; x += 32) {
    for (let y = 0; y < file.height; y += 32) {

      let img = file.get(x, y, 32, 32);

      textures.push(img);

    }

  }



  // snow.push(new Snowflake(design));





}




function draw() {
  background(10);
  // image(file, 0, 0);


  let wAngle = noise(xoff) * TWO_PI;

  // let wind = p5.Vector.fromAngle(wAngle);
  // xoff += 0.1;

  let wx = map(mouseX, 0, width, -0.02, 0.02);
  wind = createVector(wx, 0);


  design = random(textures);
  snow.push(new Snowflake(design));

  // Draws the snowflake!
  for (flake of snow) {
    flake.applyForce(gravity);
    flake.applyForce(wind);
    flake.render();
    flake.update();
  }
  // Iterate

  for (let i = snow.length - 1; i >= 0; i--) {
    if (snow[i].offScreen()) {

      snow.splice(i, 1);
    }
  }
}


