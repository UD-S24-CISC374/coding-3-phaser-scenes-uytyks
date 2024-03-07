import Phaser from "phaser";

export default class End extends Phaser.Scene {
    constructor() {
        super({ key: "End" });
    }
    create() {
        this.add
            .text(this.cameras.main.width - 15, 15, "YOU WIN!", {
                color: "#000000",
                fontSize: "80px",
            })
            .setOrigin(1.5, -3);
    }

    update() {}
}
