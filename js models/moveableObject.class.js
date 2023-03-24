class moveableObject{
    x = -50;
    y = 250;
    img;
    height = 375;
    width = 196.875;

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