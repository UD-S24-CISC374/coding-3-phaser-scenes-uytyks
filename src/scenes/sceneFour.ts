import Phaser from "phaser";

export default class Scene4 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene4" });
    }
    misses: number;

    init(data: { misses: number }) {
        this.misses = data.misses;
    }
    create() {
        let count = this.misses;
        let sky = this.add.image(400, 300, "sky");
        sky.setTint(0xff00ff).setInteractive();
        let message = `Misses: ${this.misses}`;
        let msgText = this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#ffffff",
                fontSize: "50px",
            })
            .setOrigin(1, 0);
        let next = this.add
            .image(100, 300, "next")
            .setInteractive()
            .setTint(0xff66ff)
            .setScale(0.75);
        next.on("pointerdown", () => {
            if (count > 0) {
                count--;
                next.setX(Phaser.Math.Between(50, 750))
                    .setY(Phaser.Math.Between(50, 550))
                    .setScale(Phaser.Math.Between(1, 100) / 40);
                console.log(next.x);
                console.log(next.y);
                console.log(next.scale);
                console.log("==");
                msgText.setText(`Misses: ${count}`);
            } else {
                this.scene.start("End");
            }
        });
        sky.on("pointerdown", () => {
            count++;
            msgText.setText(`Misses: ${count}`);
        });
    }

    update() {}
}
