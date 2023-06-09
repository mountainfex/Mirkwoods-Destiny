class World {
    char = new character();
    level = level1;
    ctx;
    canvas
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    manaBar = new manabar();
    castableObject = [];
    points = 0;
    score = 0;
    lastAttack = 0;
    endboss;

    fireaudio = new Audio('audio/fireball.mp3');
    flashaudio = new Audio('audio/flash.mp3');

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    };

    setWorld(){
        this.char.world = this;
    };

    run(){
        setInterval(() => {
            this.checkCollisions();
            this.checkCast();
            this.updateScore();
            this.checkEndbossHP()
        }, 100);
    }

    checkCast(){
        this.fireCast();
        this.flashCast();
    }

    fireCast(){
        if (this.keyboard.ENTER && this.char.mana > 15 && !this.cooldown() && this.char.health > 0) {
            let attack = new Fireball(this.char.x, this.char.y);
            this.castableObject.push(attack);
            this.fireaudio.play();
            this.char.mana -= 30;
            this.manaBar.setPercentage(this.char.mana);
            this.lastAttack = new Date().getTime();
            setTimeout(() => {
                this.castableObject.splice(-1)
            }, 1800);
        }
    }

    flashCast(){
        if (this.keyboard.SHIFT && this.char.mana >= 5 && !this.cooldown() && this.char.health > 0) {
            let attack = new Flash(this.char.x, this.char.y);
            this.castableObject.push(attack);
            this.flashaudio.play();
            this.char.mana -= 5;
            this.manaBar.setPercentage(this.char.mana);
            this.lastAttack = new Date().getTime();
            setTimeout(() => {
                this.castableObject.splice(-1)
            }, 1000);
        }
    }

    cooldown() {
        let timePassed = new Date().getTime() - this.lastAttack;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }

    checkCollisions() {
        this.collisionVillain();
        this.collisionEndboss();
        this.collisionPotion();
        this.collisionSpellbooks();
    }

    collisionVillain(){
        this.level.villain.forEach((villain) => {
            if (this.char.isColliding(villain)) {
                // console.log('collision with', villain);
                this.char.hit(villain);
                // console.log('collision with ', this.char.health);
                this.statusBar.setPercentage(this.char.health);
            }
            this.castableObject.forEach((castableObject) => {
                if (villain.isColliding(castableObject)) {
                    villain.hit(castableObject);
                    castableObject.hit(villain);
                }
            });
        });
    }

    collisionEndboss (){
        this.level.endboss.forEach((endboss) => {
            if (this.char.isColliding(endboss)) {
                // console.log('Endboss collision with', endboss);
                this.char.hit(endboss);
                // console.log('collision with ', this.char.health);
                this.statusBar.setPercentage(this.char.health);
            }
            this.castableObject.forEach((castableObject) => {
                if (endboss.isColliding(castableObject)) {
                    endboss.hit(castableObject);
                    castableObject.hit(endboss);
                }
            });
        });
    }

    collisionPotion(){
        this.level.potion.forEach((potion) => {
            if (this.char.isColliding(potion)) {
                this.char.collect(potion.mana)
                potion.collect();
                this.level.potion.splice(this.level.potion.indexOf(potion), 1);
                this.manaBar.setPercentage(this.char.mana);
                this.increasePoints(900);
            }
        })
    }

    collisionSpellbooks() {
        this.level.spellbook.forEach((spellbook) => {
            if (this.char.isColliding(spellbook)) {
                this.level.spellbook.splice(this.level.spellbook.indexOf(spellbook), 1);
                this.increasePoints(10000);
            }
        })
    }

    increasePoints(n) {
        this.points += +n;
    }

    updateScore() {
        this.score = this.points;
        this.score += this.char.points;
        this.level.villain.forEach((villain) => {
            this.score += villain.points;
            
        })
        this.level.endboss.forEach((endboss) => {
            this.score += endboss.points;
        })
    }

    checkEndbossHP() {
        this.endbossHP = 0;
        this.level.endboss.forEach((endboss) => {
            this.endbossHP += endboss.health;
        })
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0)
        // <<-----Space for fixed objects ----->>
        this.addToMap(this.statusBar);
        this.addToMap(this.manaBar);
        this.ctx.translate(this.camera_x, 0);


        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.villain);
        this.addToMap(this.char);
        this.addObjectsToMap(this.castableObject);
        this.addObjectsToMap(this.level.potion);
        this.addObjectsToMap(this.level.spellbook);
        
        this.ctx.translate(-this.camera_x, 0);

        let self = this; //draw() wird immer wieder ausgeführt.
        requestAnimationFrame(function(){self.draw();});
    }

    addObjectsToMap(objects){
        objects.forEach((obj) => {
            this.addToMap(obj);
        });
    }

    addToMap(mObj){
        if (mObj.otherDirection) {
            this.flipImage(mObj)
        }
        mObj.draw(this.ctx);
        // mObj.drawFrame(this.ctx);
        if (mObj.otherDirection) {
            this.flipImageBack(mObj);
        }
    }

    flipImage(mObj){
        this.ctx.save();
        this.ctx.translate(mObj.width,0);
        this.ctx.scale(-1, 1)
        mObj.x = mObj.x * -1
    }

    flipImageBack(mObj){
        mObj.x = mObj.x * -1
        this.ctx.restore();
    }
}