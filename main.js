// circle collide #2
// setupcanvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;
// global variables
let mouseX, mouseY;
let circ2 = {
  x: 250,
  y: 300,
  radius: 50,
  color: "orange",
};
let circ = {
  radius: 25,
  speed: 5,
};
// drawFunct
window.addEventListener("load", draw);

function draw() {
  // logic
  if (
    Math.sqrt((mouseX - circ2.x) ** 2 + (mouseY - circ2.y) ** 2) <
    circ.radius + circ2.radius
  ) {
    circ2.x = Math.random() * 600 < 600 && Math.random() * 600;
    circ2.y = Math.random() * 600 && Math.random() * 600;
  }
  //   Draw a background
  ctx.fillStyle = "white ";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  // draw a square
  ctx.beginPath();
  ctx.fillStyle = circ2.color;
  ctx.arc(circ2.x, circ2.y, circ2.radius, 0, 2 * Math.PI);
  ctx.fill();
  // draw secondsquare
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, circ.radius, 0, 2 * Math.PI);
  ctx.fill();

  // loop
  requestAnimationFrame(draw);
}

// event stufff(controlling how square moves)

document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();

  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
