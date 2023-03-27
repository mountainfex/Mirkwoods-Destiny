class character extends moveableObject{
    speed = 5;

    WALKING_IMAGES = [
        'img/elb/3/walk/Elf_03__WALK_000.png',
        'img/elb/3/walk/Elf_03__WALK_001.png',
        'img/elb/3/walk/Elf_03__WALK_002.png',
        'img/elb/3/walk/Elf_03__WALK_003.png',
        'img/elb/3/walk/Elf_03__WALK_004.png',
        'img/elb/3/walk/Elf_03__WALK_005.png',
        'img/elb/3/walk/Elf_03__WALK_006.png',
        'img/elb/3/walk/Elf_03__WALK_007.png',
        'img/elb/3/walk/Elf_03__WALK_008.png',
        'img/elb/3/walk/Elf_03__WALK_009.png'
    ];
    world;

    constructor(){
        super().loadImg('img/elb/3/walk/Elf_03__WALK_000.png');
        this.loadImages(this.WALKING_IMAGES);

        this.animation();

    }

    animation(){
        setInterval(() => {
            //moving character and turning img
            if(this.world.keyboard.RIGHT){
                this.x += this.speed;
                this.otherDirection = false;
            }  
            if(this.world.keyboard.LEFT){
                this.x -= this.speed;
                this.otherDirection = true;
            }              
        },1000 / 60);

        setInterval(()=> {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
                //walking animation
                let i = this.currentImage % this.WALKING_IMAGES.length;       
                let path = this.WALKING_IMAGES[i];
                this.img = this.imageCache[path];
                this.currentImage++;}
        },1000 / 30)
    };

    
    jump(){

    };
}