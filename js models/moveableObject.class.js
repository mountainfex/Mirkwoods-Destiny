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
    health = 100;

    lastHit = 0;

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

    // drawFrame(ctx){
    //     if (this instanceof character || this instanceof villain) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '2';
    //         ctx.strokeStyle = "blue";
    //         ctx.rect(this.x, this.y, this.width, this.height);
    //         ctx.stroke();
    //     };
    // };

    // isColliding (obj) {
    //     return  (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) && 
    //             (this.Y + this.offsetY + this.height) >= obj.Y &&
    //             (this.Y + this.offsetY) <= (obj.Y + obj.height) && 
    //             obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    // };

    drawFrame(ctx){
        if (this instanceof character || this instanceof villain) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = "blue";
            ctx.rect(this.x + this.frameX, this.y + this.frameY, this.width + this.frameW, this.height + this.frameH);
            ctx.stroke();
        };
    };

    isColliding(obj) {
        return  ((this.x + this.frameX) + (this.width + this.frameW)) >= (obj.x + obj.frameX) && 
                (this.x + this.frameX) <= (obj.x + obj.frameX) && 
                ((this.y + this.frameY) + (this.height + this.frameH)) >= (obj.y + obj.frameY) && 
                (this.y + this.frameY) <= ((obj.y + obj.frameY) + (obj.height + obj.frameH))
                // ((this.x + this.frameX) + (this.width + this.frameWidth)) >= (obj.x + obj.frameX) && (this.x + this.frameX) <= ((obj.x + obj.frameX) + (obj.width + obj.frameWidth)) && 
                // ((this.y + this.frameY) + this.offsetY + (this.height + this.frameHeight)) >= (obj.y + obj.frameY) &&
                // ((this.y + this.frameY) + this.offsetY) <= ((obj.y + obj.frameY) + (obj.height + obj.frameHeight)) && 
                // obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.;
    };

    hit(){
        this.health -= 5; //damage
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead(){
        return this.health == 0;
    } 

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };

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