import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "MainScene" });
    }

    misses = 0;

    create() {
        let sky = this.add.image(400, 300, "sky");
        sky.setTint(0x7f0000).setInteractive();
        let next = this.add.image(400, 300, "next").setInteractive();
        next.on("pointerdown", () => {
            this.scene.start("Scene2", { misses: this.misses });
        });
        sky.on("pointerdown", () => {
            this.misses++;
        });
    }
    update() {}
}
