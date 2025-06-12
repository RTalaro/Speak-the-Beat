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

        // Start Button
        const startBtn = this.add.text(centerX, centerY + 100, 'Start', {
            fontSize: '36px',
            fill: '#fff',
            backgroundColor: '#222',
            padding: { left: 30, right: 30, top: 10, bottom: 10 }
        }).setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', function() { this.setStyle({ fill: '#ff0' }); })
        .on('pointerout', function() { this.setStyle({ fill: '#fff' }); })
        .on('pointerdown', () => {
            this.scene.stop();
            this.scene.start('LevelSelect');
        });

        // Credits Button
        const creditsBtn = this.add.text(centerX, centerY + 170, 'Credits', {
            fontSize: '36px',
            fill: '#fff',
            backgroundColor: '#222',
            padding: { left: 30, right: 30, top: 10, bottom: 10 }
        }).setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', function() { this.setStyle({ fill: '#ff0' }); })
        .on('pointerout', function() { this.setStyle({ fill: '#fff' }); })
        .on('pointerdown', () => {
            this.scene.stop();
            this.scene.start('Credits');
        });
    }
}
