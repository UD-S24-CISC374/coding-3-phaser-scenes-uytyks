import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("sky", "assets/sky.png");
        this.load.image("ground", "assets/platform.png");
        this.load.image("star", "assets/star.png");
        this.load.image("bomb", "assets/bomb.png");
        this.load.spritesheet("dude", "assets/dude.png", {
            frameWidth: 32,
            frameHeight: 48,
        });
        this.load.image("next", "assets/next.png");
    }

    create() {
        this.scene.start("MainScene");
        this.time.addEvent({
            delay: 3000,
            loop: true,
            callback: () => {
                if (this.scene.isSleeping("MainScene")) {
                    this.scene.sleep("Scene2").run("MainScene");
                } else {
                    this.scene.sleep("MainScene").run("Scene2");
                }
            },
        });
    }
}
