class World {
    char = new character();
    enemies = [
        new villain(),
        new villain(),
        new villain(),
    ];
    backgroundObjects = [
        new BackgroundObject('img/background/game_background_2/layers/battleground.png', 0, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_land.png', 0, 8),
        new BackgroundObject('img/background/game_background_2/layers/ground_decor.png', 0, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_decor.png', 0, -15),
        new BackgroundObject('img/background/game_background_2/layers/front_decor.png', 0, -225),

        new BackgroundObject('img/background/game_background_2/layers/battleground.png', 1279.995, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_land.png', 1279.995, 0),
        new BackgroundObject('img/background/game_background_2/layers/ground_decor.png', 1279.995, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_decor.png', 1279.995, 0),
        new BackgroundObject('img/background/game_background_2/layers/front_decor.png', 1279.995, -240),
        
        new BackgroundObject('img/background/game_background_2/layers/battleground.png', 2559.99, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_land.png', 2559.99, 0),
        new BackgroundObject('img/background/game_background_2/layers/ground_decor.png', 2559.99, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_decor.png', 2559.99, 0),
        new BackgroundObject('img/background/game_background_2/layers/front_decor.png', 2559.99, -240),

        new BackgroundObject('img/background/game_background_2/layers/battleground.png', 3839.85, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_land.png', 3839.85, 0),
        new BackgroundObject('img/background/game_background_2/layers/ground_decor.png', 3839.85, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_decor.png', 3839.85, 0),
        new BackgroundObject('img/background/game_background_2/layers/front_decor.png', 3839.985, -240),

        new BackgroundObject('img/background/game_background_2/layers/battleground.png', 5119.98, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_land.png', 5119.98, 0),
        new BackgroundObject('img/background/game_background_2/layers/ground_decor.png', 5119.98, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_decor.png', 5119.98, 0),
        new BackgroundObject('img/background/game_background_2/layers/front_decor.png', 5119.98, -240),

        new BackgroundObject('img/background/game_background_2/layers/battleground.png',6399.75, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_land.png',6399.75, 0),
        new BackgroundObject('img/background/game_background_2/layers/ground_decor.png',6399.75, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_decor.png',6399.75, 0),
        new BackgroundObject('img/background/game_background_2/layers/front_decor.png',6399.975, -240),

    
    ]
    ctx;
    canvas
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.char.world = this;
    };

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.char);
        this.addObjectsToMap(this.enemies);
        
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
            this.ctx.save();
            this.ctx.translate(mObj.width,0);
            this.ctx.scale(-1, 1)
            mObj.x = mObj.x * -1
        }
        this.ctx.drawImage(mObj.img, mObj.x, mObj.y, mObj.width, mObj.height);
        if (mObj.otherDirection) {
            mObj.x = mObj.x * -1
            this.ctx.restore();
        }
    }
}