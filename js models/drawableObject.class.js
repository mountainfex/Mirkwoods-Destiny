class DrawableObject {
    img;
    imageCache = [];
    currentImage = 0;
    x = 0;
    y = 115;
    width = 562.5;
    height = 295.3125;

    loadImg(path){
        this.img = new Image();
        this.img.src = path
    };

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx){
        if (this instanceof character || this instanceof villain) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = "black";
            let drawX;
            if (this.otherDirection) {
                drawX = this.x + this.offset.right;
            } else {
                drawX = this.x + this.offset.left;
            }
            ctx.rect(drawX, (this.y + this.offset.top), ((this.width - this.offset.right) - this.offset.left), ((this.height - this.offset.top) - this.offset.bottom));
            ctx.stroke();
        };
    };

}