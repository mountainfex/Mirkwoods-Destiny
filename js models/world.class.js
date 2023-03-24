class World {

    char = new character();
    enemies = [
        new villain(),
        new villain(),
        new villain(),
    ];
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.draw();

    }

    draw(){
        this.ctx.drawImage(this.char.img, this.char.x, this.char.y, this.char.height, this.char.width);
    };
}