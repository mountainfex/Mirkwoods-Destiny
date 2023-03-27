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

    }

    moveRight(){
        console.log('moving right');
    };

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60);
    };
}