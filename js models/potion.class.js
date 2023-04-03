class Potion extends CollectableObjects {
    width = 30;
    height = 36;
    mana = 40;

    constructor() {
        super().loadImg('img/mana/potion.png');
    }
}