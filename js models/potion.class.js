class Potion extends CollectableObjects {
    width = 30;
    height = 36;
    mana = 20;

    constructor() {
        super().loadImg('img/mana/potion.png');
    }
}