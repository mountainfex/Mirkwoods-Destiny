class World {
    char = new character();
    level = level1;
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

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.char);
        this.addObjectsToMap(this.level.enemies);
        
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
        mObj.drawFrame(this.ctx);

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