let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');

const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeUp = new Image();
const pipeBottom = new Image();

bird.src = "./assets/flappy_bird_bird.png";
bg.src = "./assets/flappy_bird_bg.png";
fg.src = "./assets/flappy_bird_fg.png";
pipeUp.src = "./assets/flappy_bird_pipeUp.png";
pipeBottom.src = "./assets/flappy_bird_pipeBottom.png";

let gap = 90;

// Позиция птички

let xPos = 10;
let yPos = 150;

function draw() {
    ctx.drawImage(bg, 0, 0);

    ctx.drawImage(pipeUp, 100, 0);
    ctx.drawImage(pipeBottom, 100, 0 + pipeUp.height + gap)

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos)
}

pipeBottom.onload = draw;