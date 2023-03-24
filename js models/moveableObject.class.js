class moveableObject{
    x = -50;
    y = 80;
    img;
    width = 562.5;
    height = 295.3125;

    loadImg(path){
        this.img = new Image();
        this.img.src = path
    };

    moveRight(){
        console.log('moving right')
    };

    moveLeft(){

    };
}