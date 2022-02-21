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

// Добавляем звук
let fly = new Audio();
let score_audio = new Audio();

fly.src = "./assets/audio/fly.mp3"
score_audio.src = "./assets/audio/score.mp3"

let gap = 90;

// Действие при нажатие на кнопку
document.addEventListener('keydown', moveUp);

function moveUp() {
    yPos -= 30;
    fly.play();
}

// Создание блоков
let pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
}

// Позиция птички

let xPos = 10;
let yPos = 150;
let grav = 1.3;
let score = 0;

function draw() {
    ctx.drawImage(bg, 0, 0);

    for (let i=0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap)

        pipe[i].x--;

        if(pipe[i].x == 125) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height 
            })
        }

        if(xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height || 
                yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
                const stopGame = document.querySelector('.stop-game');
                stopGame.classList.add('final')
                document.querySelector('.final-score').innerHTML = `Ваш счёт: ${score}`
                location.stop(); // Перезагрузка
                console.log(score);
            } 

        if(pipe[i].x == 5) {
            score++;
            score_audio.play();
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos)

    yPos +=grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana"
    ctx.fillText("Cчёт: " + score, 10, cvs.height - 20)

    requestAnimationFrame(draw)
    return score;
}

const lastScores =  JSON.parse(localStorage.getItem('lastScores'));
console.log(JSON.parse (localStorage.getItem('lastScores')))

pipeBottom.onload = draw;

document.querySelector('.restart-game').addEventListener('click', () => {
    location.reload()
})