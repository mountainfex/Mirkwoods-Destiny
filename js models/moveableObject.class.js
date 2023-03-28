class moveableObject{
    x = 0;
    y = 80;
    img;
    imageCache = [];
    currentImage = 0;
    width = 562.5;
    height = 295.3125;
    speed = 0.8;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    applyGravity(){
        setInterval(()=>{
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround(){
        return this.y < 180;
    }

    loadImg(path){
        this.img = new Image();
        this.img.src = path
    };

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx){
        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    objectAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    };

    moveRight(){
        this.x += this.speed;
        this.otherDirection = false;
    };

    moveLeft(){
        this.x -= this.speed;
    };

    jump(){
        this.speedY = 30;
    }
}