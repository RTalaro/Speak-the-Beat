class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    preload() {
        this.load.setPath('./assets/');
        this.load.image('title', 'title.png');
    }

    create() {
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

        this.add.image(centerX, centerY, 'title').setOrigin(0.5);

        this.add.text(centerX, centerY + 150, 'Press SPACE to start', {
            fontSize: '24px',
            fill: '#ffffff',
        }).setOrigin(0.5);

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.stop();
            this.scene.start('loadScene');
        });
    }
}
