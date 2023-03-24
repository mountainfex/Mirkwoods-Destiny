class villain extends moveableObject{
    width = 562.5;
    height = 281.25;

    WALKING_IMAGES = [
        'img/ORK/3_ORK/walk/ORK_03_WALK_001.png',
        'img/ORK/3_ORK/walk/ORK_03_WALK_002.png',
        'img/ORK/3_ORK/walk/ORK_03_WALK_003.png',
        'img/ORK/3_ORK/walk/ORK_03_WALK_004.png',
        'img/ORK/3_ORK/walk/ORK_03_WALK_005.png',
        'img/ORK/3_ORK/walk/ORK_03_WALK_006.png',
        'img/ORK/3_ORK/walk/ORK_03_WALK_007.png',
        'img/ORK/3_ORK/walk/ORK_03_WALK_008.png',
        'img/ORK/3_ORK/walk/ORK_03_WALK_009.png'
    ];

    constructor(){
        super().loadImg('img/ORK/3_ORK/walk/ORK_03_WALK_000.png');
        this.loadImages(this.WALKING_IMAGES);

        this.x = 200 + Math.random() * 500;
        this.y = 80 + Math.random() * 100; 
        this.speed = 1 + Math.random() * 0.5;

        this.animation();
    };

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