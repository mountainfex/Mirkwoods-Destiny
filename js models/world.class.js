class World {

    char = new character();
    enemies = [
        new villain(),
        new villain(),
        new villain(),
    ];
    backgroundObjects = [
        new BackgroundObject('img/background/game_background_2/layers/battleground.png', 0, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_land.png', 0, 0),
        new BackgroundObject('img/background/game_background_2/layers/ground_decor.png', 0, 0),
        new BackgroundObject('img/background/game_background_2/layers/back_decor.png', 0, 0),
        new BackgroundObject('img/background/game_background_2/layers/front_decor.png', 0, -240),
    ]
    ctx;
    canvas

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.char);
        this.addObjectsToMap(this.enemies);
        

        let self = this; //draw() wird immer wieder ausgeführt.
        requestAnimationFrame(function(){self.draw();});
    }

    addObjectsToMap(objects){
        objects.forEach((obj) => {
            this.addToMap(obj);
        });
    }

    addToMap(mo){
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}