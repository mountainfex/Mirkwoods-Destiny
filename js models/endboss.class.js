class Endboss extends moveableObject{
    width = 1125;
    height = 562.5;
    y = -135;
    otherDirection = true;
    health = 20;
    damage = 5;

    offset = {
        top: 200,
        right: 330,
        bottom: 50,
        left: 250
    };


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

    DEAD_IMAGES = [
        'img/ORK_Endboss/2_ORK/ORK_02_DIE_000.png',
        'img/ORK_Endboss/2_ORK/ORK_02_DIE_001.png',
        'img/ORK_Endboss/2_ORK/ORK_02_DIE_002.png',
        'img/ORK_Endboss/2_ORK/ORK_02_DIE_003.png',
        'img/ORK_Endboss/2_ORK/ORK_02_DIE_004.png',
        'img/ORK_Endboss/2_ORK/ORK_02_DIE_005.png',
        'img/ORK_Endboss/2_ORK/ORK_02_DIE_006.png',
        'img/ORK_Endboss/2_ORK/ORK_02_DIE_007.png',
        'img/ORK_Endboss/2_ORK/ORK_02_DIE_008.png',
        'img/ORK_Endboss/2_ORK/ORK_02_DIE_009.png'
    ];

    ATTACK_IMAGES = [
        'img/ORK_Endboss/2_ORK/ORK_02_ATTAK_000.png',
        'img/ORK_Endboss/2_ORK/ORK_02_ATTAK_001.png',
        'img/ORK_Endboss/2_ORK/ORK_02_ATTAK_002.png',
        'img/ORK_Endboss/2_ORK/ORK_02_ATTAK_003.png',
        'img/ORK_Endboss/2_ORK/ORK_02_ATTAK_004.png',
        'img/ORK_Endboss/2_ORK/ORK_02_ATTAK_005.png',
        'img/ORK_Endboss/2_ORK/ORK_02_ATTAK_006.png',
        'img/ORK_Endboss/2_ORK/ORK_02_ATTAK_007.png',
        'img/ORK_Endboss/2_ORK/ORK_02_ATTAK_008.png',
        'img/ORK_Endboss/2_ORK/ORK_02_ATTAK_009.png'
    ];

    constructor(){
        super().loadImg(this.WALKING_IMAGES[0]);
        this.loadImages(this.WALKING_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.loadImages(this.ATTACK_IMAGES);

        this.x = 4000;
        this.animation();
    }

    animation(){
        if (this.isDead()) {
            this.objectAnimation(this.DEAD_IMAGES)
        } else {
            setInterval(() => {
                let moveInterval = setInterval(() => {
                    this.moveLeft();
                },1000 / 60);
                this.moveLeft();
                let animationWalkInterval = setInterval(() => {
                    this.objectAnimation(this.WALKING_IMAGES);
                }, 1000 / 30);
                setTimeout(() => {
                    clearInterval(moveInterval);
                    clearInterval(animationWalkInterval);
                    let animationAttackInterval = setInterval(() => {
                        this.objectAnimation(this.ATTACK_IMAGES);
                    }, 1000 / 20);
                    this.damage = 50;
                    console.log(this.damage);
                    setTimeout(() => {
                        clearInterval(animationAttackInterval);
                        this.damage = 5;
                        console.log(this.damage);
                    }, 2000);
                }, 4000);
            }, 6000);
        }
    }
}