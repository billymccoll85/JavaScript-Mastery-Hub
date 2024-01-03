const canvas = document.getElementById('gameCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const paddle = {
  w: 100,
  h: 10,
  x: (canvas.width - 100) / 2,
  draw() {
    ctx.beginPath();
    ctx.fillStyle = '#09f';
    ctx.fillRect(this.x, canvas.height - this.h, this.w, this.h);
  }
};

const ball = {
  x: canvas.width / 2,
  y: canvas.height - paddle.h - 10,
  dx: 2,
  dy: -5,
  r: 10,
  draw() {
    ctx.beginPath();
    ctx.fillStyle = '#09f';
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
};

const brickSet = {
  row: 5,
  column: 8,
  h: 20,
  padding: 15,
  offsetTop: 20,
  offsetLeft: 20,
  w: (canvas.width - 20 * 2 + 15) / 8 - 15,
  draw() {
    let x, y;
    for (let i = 0; i < this.column; i++) {
      for (let j = 0; j < this.row; j++) {
        x = i * (this.w + this.padding) + this.offsetLeft;
        y = j * (this.h + this.padding) + this.offsetTop;

        if (bricks[i][j] !== null) {
          bricks[i][j].x = x;
          bricks[i][j].y = y;

          ctx.beginPath();
          ctx.fillStyle = '#09f';
          ctx.fillRect(x, y, this.w, this.h);
        }
      }
    }
  }
};

const bricks = Array.from({ length: brickSet.column }, () => Array.from({ length: brickSet.row }, () => ({ x: 0, y: 0 })));

let rightPressed = false;
let leftPressed = false;

let ani;

const draw = () => {
  ball.draw();
  paddle.draw();
  brickSet.draw();
};

draw();

const run = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.x + ball.r > canvas.width || ball.x < ball.r) {
    ball.dx = -ball.dx;
  }

  if (ball.y + ball.r > canvas.height || ball.y < ball.r) {
    ball.dy = -ball.dy;
  }

  if (rightPressed && paddle.x < canvas.width - paddle.w) {
    paddle.x += 7;
  } else if (leftPressed && paddle.x > 0) {
    paddle.x -= 7;
  }

  collisionDetection();
  draw();

  if (!isGameOver()) {
    ani = window.requestAnimationFrame(run);
  }
};

const keyDownHandler = (e) => {
  switch (e.keyCode) {
    case 39:
      rightPressed = true;
      break;
    case 37:
      leftPressed = true;
      break;
    case 32:
      if (!ani) {
        ani = window.requestAnimationFrame(run);
      } else {
        window.cancelAnimationFrame(ani);
        ani = undefined;
      }
      break;
  }
};

const keyUpHandler = (e) => {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const collisionDetection = () => {
  for (let i = 0; i < brickSet.column; i++) {
    for (let j = 0; j < brickSet.row; j++) {
      const target = bricks[i][j];

      if (target != null &&
        ball.y - ball.r >= target.y &&
        ball.y - ball.r <= target.y + brickSet.h &&
        ball.x >= target.x &&
        ball.x <= target.x + brickSet.w) {
        console.log(target);
        console.log(`${ball.x},${ball.y}`);
        bricks[i][j] = null;
        ball.dy = -ball.dy;
      }
    }
  }
};

function isGameOver() {
    if (ball.y + ball.r >= canvas.height && (ball.x < paddle.x || ball.x > paddle.x + paddle.w)) {
      window.cancelAnimationFrame(ani);
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.fillStyle = '#000';
      ctx.font = '50px fantasy';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
  
      return true;
    }
  
    return false;
  }