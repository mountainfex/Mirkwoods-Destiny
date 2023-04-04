class Fireball extends castableObject {
    CAST_START_IMAGES = [
        'img/Firecast/1.png',
        'img/Firecast/2.png',
        'img/Firecast/3.png',
        'img/Firecast/4.png',
    ];

    CAST_DURATION_IMAGES = [
        'img/Firecast/5.png',
        'img/Firecast/6.png',
        'img/Firecast/7.png',
        'img/Firecast/8.png',
        'img/Firecast/9.png',
        'img/Firecast/10.png',
        'img/Firecast/11.png',
        'img/Firecast/12.png',
        'img/Firecast/13.png',
        'img/Firecast/14.png',
        'img/Firecast/15.png',
        'img/Firecast/16.png',
        'img/Firecast/17.png',
        'img/Firecast/18.png',
        'img/Firecast/19.png',
        'img/Firecast/20.png',
        'img/Firecast/21.png',
        'img/Firecast/22.png',
        'img/Firecast/23.png',
        'img/Firecast/24.png',
        'img/Firecast/25.png',
        'img/Firecast/26.png',
        'img/Firecast/27.png',
        'img/Firecast/28.png',
        'img/Firecast/29.png',
        'img/Firecast/30.png',
        'img/Firecast/31.png',
        'img/Firecast/32.png',
        'img/Firecast/33.png',
        'img/Firecast/34.png',
        'img/Firecast/35.png',
        'img/Firecast/36.png',
        'img/Firecast/37.png',
        'img/Firecast/38.png',
        'img/Firecast/39.png'
    ];

    offset = {
        top: 180,
        right: 150,
        bottom: 180,
        left: 230
    };


    health = 10;
    damage = 30;
    
    constructor(x,y){
        super().loadImg('img/Firecast/1.png');
        this.loadImages(this.CAST_START_IMAGES);
        this.loadImages(this.CAST_DURATION_IMAGES);

        this.x = x + 200;
        this.y = y + 45;
        this.height = 250;
        this.width = 250;
        this.speed = 20;
        this.animation();
    };


    animation(){
        let fireballLoad = setInterval(() => {
            this.objectAnimation(this.CAST_START_IMAGES);
        }, 1000 / 20);
        setTimeout(() => {
            clearInterval(fireballLoad)
            let fireball = setInterval(() => {
                this.objectAnimation(this.CAST_DURATION_IMAGES);
                if (this.isDead()) {
                    clearInterval(fireball);
                    this.damage = 0;
                }
            }, 1000 / 20);
            let fireballMove = setInterval(() => {
                this.moveRight();
            }, 1000 / 20);
            setTimeout(() => {
                clearInterval(fireball);
                clearInterval(fireballMove);
            }, 1399);
        }, 400);
    }
}
