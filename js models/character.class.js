class character extends moveableObject{
    speed = 18;

    RUNNING_IMAGES = [
        'img/elb/3/run/Elf_03__RUN_000.png',
        'img/elb/3/run/Elf_03__RUN_001.png',
        'img/elb/3/run/Elf_03__RUN_002.png',
        'img/elb/3/run/Elf_03__RUN_003.png',
        'img/elb/3/run/Elf_03__RUN_004.png',
        'img/elb/3/run/Elf_03__RUN_005.png',
        'img/elb/3/run/Elf_03__RUN_006.png',
        'img/elb/3/run/Elf_03__RUN_007.png',
        'img/elb/3/run/Elf_03__RUN_008.png',
        'img/elb/3/run/Elf_03__RUN_009.png'
    ];

    IDLE_IMAGES = [
        'img/elb/3/idle/Elf_03__IDLE_000.png',
        'img/elb/3/idle/Elf_03__IDLE_001.png',
        'img/elb/3/idle/Elf_03__IDLE_002.png',
        'img/elb/3/idle/Elf_03__IDLE_003.png',
        'img/elb/3/idle/Elf_03__IDLE_004.png',
        'img/elb/3/idle/Elf_03__IDLE_005.png',
        'img/elb/3/idle/Elf_03__IDLE_006.png',
        'img/elb/3/idle/Elf_03__IDLE_007.png',
        'img/elb/3/idle/Elf_03__IDLE_008.png',
        'img/elb/3/idle/Elf_03__IDLE_009.png'
    ]
    world;

    constructor(){
        super().loadImg('img/elb/3/idle/Elf_03__IDLE_000.png');
        this.loadImages(this.IDLE_IMAGES);
        this.loadImages(this.RUNNING_IMAGES);

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
            this.world.camera_x = -this.x;             
        },1000 / 30);

        setInterval(()=> {
            let i = this.currentImage % this.IDLE_IMAGES.length;       
            let path = this.IDLE_IMAGES[i];
            this.img = this.imageCache[path];
            this.currentImage++;

            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
                //walking animation
                let i = this.currentImage % this.RUNNING_IMAGES.length;       
                let path = this.RUNNING_IMAGES[i];
                this.img = this.imageCache[path];
                this.currentImage++;}
        },1000 / 30)
    };

    
    jump(){

    };
}