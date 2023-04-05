let canvas;
let world; 
let keyboard = new Keyboard;
let gameAudio = new Audio ('audio/maintheme.mp3');
let menuAudio = new Audio ('audio/Wardrums.mp3');
let soundMuted = false;

function init(){
    canvas = document.getElementById('canvas');
}

function continueGame(){
    menuAudio.play();
    document.getElementById('description').classList.remove('dnone');
    document.getElementById('startMenu').classList.remove('dnone');
    document.getElementById('continue').classList.add('dnone');
}

function soundMute() {
    let soundIconMenu = document.getElementById('soundIconMenu');
    let soundIconIngame = document.getElementById('soundIconIngame');
    if (soundMuted) {
        soundMuted = false;
        soundIconMenu.src = 'img/icons/unmute.png';
        soundIconIngame.src = 'img/icons/unmute.png';
        gameAudio.muted = false;
        menuAudio.muted = false;
    } else {
        soundMuted = true;
        soundIconMenu.src = 'img/icons/mute.png';
        soundIconIngame.src = 'img/icons/mute.png';
        gameAudio.muted = true;
        menuAudio.muted = true;
    }
    if (world) {
        setWorldAudio();
    }
}

function setWorldAudio() {
    if (soundMuted) {
        world.soundMuted = true;
    } else {
        world.soundMuted = false;
    }
}

function startGame() {
    hideScreens();
    initLevel();
    world = new World(canvas, keyboard);
    runGame();
    menuAudio.pause();
    gameAudio.play();
}

function hideScreens() {
    document.getElementById('startscreen').classList.add('dnone');
    document.getElementById('endscreen').classList.add('dnone');
}

function mobileBtnEvents(){
    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.SPACE = true;            
        }
    });
    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.SPACE = false;            
        }
    });
    document.getElementById("btnRight").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.RIGHT = true;
        }

    });
    document.getElementById("btnRight").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.RIGHT = false;
        }

    });
    document.getElementById("btnLeft").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.LEFT = true;
        }

    });
    document.getElementById("btnLeft").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.LEFT = false;
        }

    });
    document.getElementById("btnFlash").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.SHIFT = true;
        }

    });
    document.getElementById("btnFlash").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.SHIFT = false;
        }

    });
    document.getElementById("btnFireball").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.ENTER = true;
        }

    });
    document.getElementById("btnFireball").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.ENTER = false;
        }

    });
}

window.addEventListener('keydown', (e) => {
    if(e.keyCode == 65){
        keyboard.LEFT = true;
    }

    if(e.keyCode == 68){
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 87){
        keyboard.UP = true;
    } 

    if(e.keyCode == 83){
        keyboard.DOWN = true;
    }

    if(e.keyCode == 32){
        keyboard.SPACE = true;
    }

    if(e.keyCode == 13){
        keyboard.ENTER = true;
    }

    if(e.keyCode == 16){
        keyboard.SHIFT = true;
    }
})

window.addEventListener('keyup', (e) => {
    if(e.keyCode == 65){
        keyboard.LEFT = false;
    }

    if(e.keyCode == 68){
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 87){
        keyboard.UP = false;
    } 

    if(e.keyCode == 83){
        keyboard.DOWN = false;
    }

    if(e.keyCode == 32){
        keyboard.SPACE = false;
    }

    if(e.keyCode == 13){
        keyboard.ENTER = false;
    }

    if(e.keyCode == 16){
        keyboard.SHIFT = false;
    }
})

function runGame() {
    let gameInterval = setInterval(() => {
        setHighscore();
        checkGameOver(gameInterval);
    }, 1000 / 20);
}

function setHighscore() {
    let score = world.score;
    if (score >= 0) {
        highscore = '0' + '0' + '0' + '0' + '0' + '0' + score;
    }
    if (score >= 10) {
        highscore = '0' + '0' + '0' + '0' + '0' + score;
    }
    if (score >= 100) {
        highscore = '0' + '0' + '0' + '0' + score;
    }
    if (score >= 1000) {
        highscore = '0' + '0' + '0' + score;
    }
    if (score >= 10000) {
        highscore = '0' + '0' + score;
    }
    if (score >= 100000) {
        highscore = score;
    }
    if (score >= 1000000) {
        highscore = score;
    }
    document.getElementById('score').innerHTML = highscore;
}

function checkGameOver(gameInterval) {
    if (world.char.health == 0) {
        clearInterval(gameInterval);
        setTimeout(() => {
            document.getElementById('endscreen').classList.remove('dnone');
            document.getElementById('endscreenHeadline').innerHTML = 'GAME OVER';
        }, 1000);
    }

    if (world.level.endboss.health == 0) {
        clearInterval(gameInterval);
        setTimeout(() => {
            document.getElementById('endscreen').classList.remove('dnone');
            document.getElementById('endscreenHeadline').innerHTML = 'VICTORY';
        }, 1000);
    }
}

function howToPlay() {
    document.getElementById('description').innerHTML = createHowToPlay();
}

function createHowToPlay() {
    return `
    <div class="howToPlay">
        <div class="walkRight">
            Walk Right: D or<button class="btnSmall" id="btnRight"><img  class="arrowRight" src="img/icons/arrow-204-256.png" class="rotateRight imgSmall" alt=""></button>
        </div>
        <div class="walkLeft">
            Walk Left: A or<button class="btnSmall" id="btnLeft"><img class="arrowLeft" src="img/icons/arrow-204-256.png" class="rotateLeft imgSmall" alt=""></button>
        </div>
        <div class="jump">
            Jump: SPACE or<button class="btnSmall" id="btnJump"><img class="arrowUp" src="img/icons/arrow-204-256.png" class="imgSmall" alt=""></button>
        </div>
    </div>
    <div class="howToPlay">
        <div class="flash">
            <img src="img/Flashcast/flash06.png" alt="">Flash (Requires 5 Mana): SHIFT
        </div>
        <div class="fire">
            <img src="img/Firecast/22.png" alt="">Fireball (Requires 30 Mana): ENTER
        </div>
    </div>`
}