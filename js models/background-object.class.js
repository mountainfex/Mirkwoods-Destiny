class BackgroundObject extends moveableObject {

    width = 1279.995;
    height = 720;
    constructor(imagePath, x, y){
        super().loadImg(imagePath);
        this.y = y;
        this.x = x;
    }
}