class Flash extends castableObject {
    offset = {
        top: 40,
        right: 40,
        bottom: 40,
        left: 40
    };

    health = 1;
    damage = 10;

    IMAGES_FLASH = [
        'img/Flashcast/flash01.png',
        'img/Flashcast/flash02.png',
        'img/Flashcast/flash03.png',
        'img/Flashcast/flash04.png',
        'img/Flashcast/flash05.png',
        'img/Flashcast/flash06.png',
        'img/Flashcast/flash07.png',
        'img/Flashcast/flash08.png',
        'img/Flashcast/flash09.png',
        'img/Flashcast/flash10.png'
    ];


    constructor(x, y) {
        super().loadImg('img/Flashcast/flash01.png');
        this.loadImages(this.IMAGES_FLASH);

        this.x = x + 280;
        this.y = y + 120;

        this.height = 100;
        this.width = 100;

        this.speed = 15

        this.animate();
    }

    animate() {
        this.currentImage = 0;
        let flash = setInterval(() => {
            if (this.isDead()) {
                clearInterval(flash);
                this.damage = 0;
            } else {
                this.objectAnimation(this.IMAGES_FLASH);
            }
        }, 1000 / 20);
        setInterval(() => {
            this.moveRight();
        }, 1000 / 10);
        setTimeout(() => {
            this.energy = 0;
        }, 1000);
    }
}