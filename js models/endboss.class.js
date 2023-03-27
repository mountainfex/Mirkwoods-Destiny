class Endboss extends moveableObject{
    width = 1125;
    height = 562.5;
    y = -100;


    WALKING_IMAGES = [
        'img/ORK_Endboss/2_ORK/ORK_02_WALK_000.png',
        'img/ORK_Endboss/2_ORK/ORK_02_WALK_001.png',
        'img/ORK_Endboss/2_ORK/ORK_02_WALK_002.png',
        'img/ORK_Endboss/2_ORK/ORK_02_WALK_003.png',
        'img/ORK_Endboss/2_ORK/ORK_02_WALK_004.png',
        'img/ORK_Endboss/2_ORK/ORK_02_WALK_005.png',
        'img/ORK_Endboss/2_ORK/ORK_02_WALK_006.png',
        'img/ORK_Endboss/2_ORK/ORK_02_WALK_007.png',
        'img/ORK_Endboss/2_ORK/ORK_02_WALK_008.png',
        'img/ORK_Endboss/2_ORK/ORK_02_WALK_009.png'

    ];

    constructor(){
        super().loadImg(this.WALKING_IMAGES[0]);
        this.loadImages(this.WALKING_IMAGES);

        this.x = 700;
        this.animation();
    }

    animation(){
        this.moveLeft();
        setInterval(()=> {
            let i = this.currentImage % this.WALKING_IMAGES.length;   
            this.otherDirection = true;   
            let path = this.WALKING_IMAGES[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        },1000 / 30)
    };

}