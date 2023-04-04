class villain extends moveableObject{
    width = 562.5;
    height = 281.25;
    otherDirection = true;

    frameX = 200;
    frameY = 115;
    frameW = -350;
    frameH = -145;
    health = 10;
    damage = 5;

    offset = {
        top: 115,
        right: 210,
        bottom: 30,
        left: 150
    };

    

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

    DEAD_IMAGES = [
        'img/ORK/3_ORK/die/ORK_03_DIE_000.png',
        'img/ORK/3_ORK/die/ORK_03_DIE_001.png',
        'img/ORK/3_ORK/die/ORK_03_DIE_002.png',
        'img/ORK/3_ORK/die/ORK_03_DIE_003.png',
        'img/ORK/3_ORK/die/ORK_03_DIE_004.png',
        'img/ORK/3_ORK/die/ORK_03_DIE_005.png',
        'img/ORK/3_ORK/die/ORK_03_DIE_006.png',
        'img/ORK/3_ORK/die/ORK_03_DIE_007.png',
        'img/ORK/3_ORK/die/ORK_03_DIE_008.png',
        'img/ORK/3_ORK/die/ORK_03_DIE_009.png'

    ]

    constructor(){
        super().loadImg('img/ORK/3_ORK/walk/ORK_03_WALK_000.png');
        this.loadImages(this.WALKING_IMAGES);
        this.loadImages(this.DEAD_IMAGES);

        this.x = 600 + Math.random() * 5000;
        // this.y = 80 + Math.random() * 100; 
        this.speed = 1 + Math.random() * 0.5;

        this.animation();
    };

    animation(){
        let movingInterval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        let animationInterval = setInterval(()=> {
            if (this.isDead()) {
                clearInterval(animationInterval);
                clearInterval(movingInterval);
                this.die();
                this.increasePoints(1500);
            } else 
                this.objectAnimation(this.WALKING_IMAGES);
        },1000 / 30);
    };

}