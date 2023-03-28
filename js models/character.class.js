class character extends moveableObject{
    speed = 18;
    y = -50;

    frameX = 210;
    frameY = 80;
    frameWidth = -420;
    frameHeight = -130;


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

    JUMPING_IMAGES = [
        'img/elb/3/jump/Elf_03__JUMP_000.png',
        'img/elb/3/jump/Elf_03__JUMP_001.png',
        'img/elb/3/jump/Elf_03__JUMP_002.png',
        'img/elb/3/jump/Elf_03__JUMP_003.png',
        'img/elb/3/jump/Elf_03__JUMP_004.png',
        'img/elb/3/jump/Elf_03__JUMP_005.png',
        'img/elb/3/jump/Elf_03__JUMP_006.png',
        'img/elb/3/jump/Elf_03__JUMP_007.png',
        'img/elb/3/jump/Elf_03__JUMP_008.png',
        'img/elb/3/jump/Elf_03__JUMP_009.png'
    ]

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
        this.loadImages(this.JUMPING_IMAGES);

        this.applyGravity();
        this.animation();
    }    

    animation(){
        setInterval(() => {
            //moving character and turning img
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                this.moveRight();
            }  
            if(this.world.keyboard.LEFT && this.x > 0){
                this.moveLeft();
                this.otherDirection = true;
            } 

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            
            }

            this.world.camera_x = -this.x - 125;             
        },1000 / 30);

        setInterval(()=> {
            this.objectAnimation(this.IDLE_IMAGES);

            if (this.isAboveGround()) {
                this.objectAnimation(this.JUMPING_IMAGES)
            } else {

                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
                    //walking animation
                    this.objectAnimation(this.RUNNING_IMAGES)}
            };
        },1000 / 30);
    };
}