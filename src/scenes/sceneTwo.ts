import Phaser from "phaser";

export default class Scene2 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene2" });
    }
    misses: number;

    init(data: { misses: number }) {
        this.misses = data.misses;
    }
    create() {
        let sky = this.add.image(400, 300, "sky");
        sky.setTint(0x000070).setInteractive();
        let velocity = 1000;
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
            .setTint(0x2255ff)
            .setScale(0.75)
            .setBounce(1.5)
            .setCollideWorldBounds(true)
            .setVelocityX(velocity);
        this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: () => {
                next.setVelocityX(velocity * -1);
            },
        });
        next.on("pointerdown", () => {
            this.scene.start("Scene3", { misses: this.misses });
        });
        sky.on("pointerdown", () => {
            this.misses++;
            msgText.setText(`Misses: ${this.misses}`);
        });
    }

    update() {}
}
