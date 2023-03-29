class StatusBar extends DrawableObject{
    HEALTH_IMAGES = [
        'img/HP_BAR/HP_bar_00.png',
        'img/HP_BAR/HP_bar_10.png',
        'img/HP_BAR/HP_bar_20.png',
        'img/HP_BAR/HP_bar_30.png',
        'img/HP_BAR/HP_bar_40.png',
        'img/HP_BAR/HP_bar_50.png',
        'img/HP_BAR/HP_bar_60.png',
        'img/HP_BAR/HP_bar_70.png',
        'img/HP_BAR/HP_bar_80.png',
        'img/HP_BAR/HP_bar_90.png',
        'img/HP_BAR/HP_bar_100.png'
    ]

    percentage = 100;

    constructor(){
        super();
        this.loadImages(this.HEALTH_IMAGES);
        this.x = 130;
        this.y = 0;
        this.width = 300;
        this.height = 30;
        this.setPercentage(100);
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.HEALTH_IMAGES[this.resolveImageIndex()]
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){
        if (this.percentage == 100) {
            return 10
        } else if(this.percentage > 90) {
            return 9
        } else if(this.percentage > 80) {
            return 8
        } else if(this.percentage > 70) {
            return 7
        } else if(this.percentage > 60) {
            return 6
        } else if(this.percentage > 50) {
            return 5
        } else if(this.percentage > 40) {
            return 4
        } else if(this.percentage > 30) {
            return 3
        } else if(this.percentage > 20) {
            return 2
        } else if(this.percentage > 10) {
            return 1
        } else if(this.percentage > 0) {
            return 0
        }
    }
}

