/*
 * Author - Kyle Corry
 */

var WIDTH = 500,
  HEIGHT = 500;
var canvas, ctx, keystate;
var up = 38,
  down = 40,
  left = 37,
  right = 39;

var x = 0;
var y = 0;

// var image = document.getElementById("imageName")

function intersect(ax, ay, aw, ah, bx, by, bw, bh) {
  return ax < bx + bw && ay < by + bh && bx < ax + aw && by < ay + ah;
}

function main() {
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");
  WIDTH = canvas.width;
  HEIGHT = canvas.height;
  console.log(WIDTH);
  console.log(HEIGHT);
  document.addEventListener("keydown", function(evt) {
    keystate = evt.keyCode;
  });
  init();
  var loop = function() {
    update();
    draw();
    window.requestAnimationFrame(loop, canvas);
  };
  window.requestAnimationFrame(loop, canvas);
}

function init() {
  // Set up anything needed before game begins
}


function update() {
  // Update your sprites here (add to position, detect collisions, etc...)
  if(keystate == up){
	  y -= 10;
  }else if (keystate == down){
	  y += 10;
  }else if (keystate == left){
	  x -= 10;
  }else if (keystate == right){
	  x += 10;
  }
  
  if(y <= -200){
	  y = -198
  }else if (y >= 120){
	  y = 118
  }else if (x <= -100){
	  x = -98
  }else if (x >= 480){
	  x = 478
  }
}

function draw() {
  // Background
  ctx.fillStyle = '#000'; // Background color
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.fillStyle = '#fff'; // Foreground color
  /// Draw your sprites here (sprites or game elements)
  ctx.fillRect(100 + x, 200 + y, 50, 400);
  ctx.fillRect(150 + x, 375 + y, 200, 50);
  ctx.fillRect(350 + x, 200 + y, 50, 400);
  ctx.fillRect(550 + x, 300 + y, 50, 300);
  ctx.fillRect(550 + x, 200 + y, 50, 50);
}


main();
