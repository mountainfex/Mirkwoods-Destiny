class villain extends moveableObject{

    constructor(){
        super().loadImg('img/ORK/3_ORK/walk/ORK_03_WALK_000.png');

        this.x = 200 + Math.random() * 500; 
    };

}