/* The goal is a video of me dancing rendered as ASCII characters */

const density = 'Ñ@#W$9876543210?!abc;:+=-,_';

let miranda;

function preload() {
  miranda = loadImage("images/miranda.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(miranda, 0, 0, width, height);

  let w = width / miranda.width;
  let h = height / miranda.height; 
  miranda.loadPixels();

  for (let i = 0; i < miranda.width; i++) {
    for (let j = 0; j < miranda.height; j++) {
      const pixelIndex = (i + j * miranda.width) * 4;
      const r = miranda.pixels[pixelIndex + 0];
      const g = miranda.pixels[pixelIndex + 1];
      const b = miranda.pixels[pixelIndex + 2];

      noStroke();
      fill(r,g,b);
      square(i * w, j * h, w);

    }

  } 
}
