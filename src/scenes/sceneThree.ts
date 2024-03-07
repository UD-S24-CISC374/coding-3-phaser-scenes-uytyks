import Phaser from "phaser";

export default class Scene3 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene3" });
    }
    misses: number;

    init(data: { misses: number }) {
        this.misses = data.misses;
    }
    create() {
        let velocity = 10000;
        let sky = this.add.image(400, 300, "sky");
        sky.setTint(0x00ff00).setInteractive();
        let message = `Misses: ${this.misses}`;
        let msgText = this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#ffffff",
                fontSize: "50px",
            })
            .setOrigin(1, 0);
        let next = this.physics.add
            .image(100, 300, "next")
            .setInteractive()
            .setTint(0x22ff22)
            .setScale(0.75)
            .setBounce(1)
            .setCollideWorldBounds(true)
            .setRotation(Math.random() * 3000);
        this.time.addEvent({
            delay: 300,
            loop: true,
            callback: () => {
                next.setVelocityX(Phaser.Math.Between(-1000, 1000) * velocity);
                next.setVelocityY(
                    Phaser.Math.Between(-1000, 1000) * velocity
                ).setRotation(Math.random() * 3000);
            },
        });
        next.on("pointerdown", () => {
            this.scene.start("Scene4", { misses: this.misses });
        });
        sky.on("pointerdown", () => {
            this.misses++;
            msgText.setText(`Misses: ${this.misses}`);
        });
    }

    update() {}
}
