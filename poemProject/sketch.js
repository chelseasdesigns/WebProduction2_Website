/*This code was made with the help of The Coding Train on YouTube;
the name of the tutorial video was "Coding Challenge #134.1: Heart Curve".*/

// document.addEventListener("DOMContentLoaded", function() {
// let a = 0;
// let b = 0;

// function setup() {
//   let canvas = createCanvas(windowWidth, windowHeight);
//   canvas.parent('myCanvas');
// }

// function draw() {
//   background(70, 0, 0);
  
//   translate(width / 2, height / 2);
//   fill(100,0,0);
//   stroke(255, 0, 0);
//   strokeWeight(2);
//   beginShape();
//   for (let a = float(0); a < TWO_PI; a+=0.01) {
//     let r = float(10);
//     let x = float(r * 16 * pow(sin(a),3));
//     let y = float(-r * (13 * cos(a) - 5 * cos(2*a) - 3 * cos(3*a) - cos(4*a)));
//     vertex(x,y);
//     }
//   endShape();
// }
//   setup();
//   draw();
// });

function setup() {
  createCanvas(windowWidth, windowHeight);
  canvas.parent('myCanvas');
}

function draw() {
  background(70, 0, 0);
  
  translate(width / 2, height / 2);
  fill(100,0,0);
  stroke(255, 0, 0);
  strokeWeight(2);
  beginShape();
  for (let a = float(0); a < TWO_PI; a+=0.01) {
    let r = float(10);
    let x = float(r * 16 * pow(sin(a),3));
    let y = float(-r * (13 * cos(a) - 5 * cos(2*a) - 3 * cos(3*a) - cos(4*a)));
    vertex(x,y);
  }
  endShape();
}