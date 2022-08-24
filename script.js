console.log("Dianasour Game with HTML,CSS and JavaScript..!!");

let score = 0;
let cross = true;

let audioMusic = new Audio('moving.mp3');
// let audioOver = new Audio('gameOver.wav');

// click on screen to play music
setTimeout(() => {
    audioMusic.play();
}, 500);


document.onkeydown = function (e) {
    console.log("KeyCode is = " + e.keyCode);
    if (e.keyCode == 38) {
        diano = document.querySelector('.diano');
        diano.classList.add('animateDiano');
        setTimeout(() => {
            diano.classList.remove('animateDiano');
        }, 800);
    }
    else if (e.keyCode == 39) {
        diano = document.querySelector('.diano');
        dianoX = parseInt(window.getComputedStyle(diano, null).getPropertyValue('left'));
        diano.style.left = dianoX + 100 + 'px';
    }
    else if (e.keyCode == 37) {
        diano = document.querySelector('.diano');
        dianoX = parseInt(window.getComputedStyle(diano, null).getPropertyValue('left'));
        diano.style.left = dianoX - 100 + 'px';
    }
}

setInterval(() => {
    diano = document.querySelector('.diano');
    obstacle = document.querySelector('.obstacle');
    gameOver = document.querySelector('.gameOver');

    // get diano and obstacle computed value from left and top
    let dx = parseInt(window.getComputedStyle(diano, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(diano, null).getPropertyValue('top'));
    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    // it gives value in pixel so that parseInt use above
    // console.log(window.getComputedStyle(diano, null).getPropertyValue('left'));

    // get absolute value diano and obstacle x-aaxis and y-axis
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    //    console.log('X-axis '+offsetX);
    if (offsetX < 100 && offsetY < 60) {
        // gameOver.style.visibility = 'visible';
        gameOver.innerHTML = "Game Over Try Again!";
        obstacle.classList.remove('obstacleAni');
        // audioOver.play();
        setTimeout(() => {
            // audioOver.pause();
            audioMusic.pause();
        }, 1000);
    }
    else if (offsetX < 100 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        // setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log("New Animation Duration " + newDur);
        // }, 1000);
    }
}, 100);


function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score;
}

