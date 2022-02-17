let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');

const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeUp = new Image();
const pipeBotoom = new Image();

bird.src = "./assets/flappy_bird_bird.png";
bg.src = "./assets/flappy_bird_bg.png";
fg.src = "./assets/flappy_bird_fg.png";
pipeUp.src = "./assets/flappy_bird_pipeUp.png";
pipeBotoom.src = "./assets/flappy_bird_pipeBottom.png";