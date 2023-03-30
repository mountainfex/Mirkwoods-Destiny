class moveableObject extends DrawableObject{
    speed = 0.8;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    health = 100;
    lastHit = 0;
    lastDamage = 0;

    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    applyGravity(){
        setInterval(()=>{
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround(){
        return this.y < 120;
    }

    isColliding(obj) {
        return  this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
                this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
                this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
                this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom
        
                // ((this.x + this.frameX) + (this.width + this.frameW)) >= (obj.x + obj.frameX) && 
                // (this.x + this.frameX) <= (obj.x + obj.frameX) && 
                // ((this.y + this.frameY) + (this.height + this.frameH)) >= (obj.y + obj.frameY) && 
                // (this.y + this.frameY) <= ((obj.y + obj.frameY) + (obj.height + obj.frameH))
                // ((this.x + this.frameX) + (this.width + this.frameWidth)) >= (obj.x + obj.frameX) && (this.x + this.frameX) <= ((obj.x + obj.frameX) + (obj.width + obj.frameWidth)) && 
                // ((this.y + this.frameY) + this.offsetY + (this.height + this.frameHeight)) >= (obj.y + obj.frameY) &&
                // ((this.y + this.frameY) + this.offsetY) <= ((obj.y + obj.frameY) + (obj.height + obj.frameHeight)) && 
                // obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.;
    };

    hit(obj){
        this.health -= obj.damage; //damage
        this.lastDamage = obj.damage;
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
        return timepassed < 0.2;
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

    die(){
        this.damage = 0;
        this.currentImage = 0;
        let animationInterval = setInterval(() => {
            this.objectAnimation(this.DEAD_IMAGES);
        }, 100);
        setTimeout(() => {
            clearInterval(animationInterval);
        }, 1000);
    }
}