class CreditScene extends Phaser.Scene {
    constructor() {
        super('Credits');
    }

    preload() {
        this.load.setPath('./assets/');
        this.load.image('credit', 'credits.png');
    }

    create() {
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

        this.add.image(centerX, centerY, 'credit').setOrigin(0.5);

        const backBtn = this.add.text(centerX, centerY + 220, 'Back to Title', {
            fontSize: '32px',
            fill: '#fff',
            backgroundColor: '#222',
            padding: { left: 30, right: 30, top: 10, bottom: 10 }
        }).setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', function() { this.setStyle({ fill: '#ff0' }); })
        .on('pointerout', function() { this.setStyle({ fill: '#fff' }); })
        .on('pointerdown', () => {
            this.scene.stop('LevelMapCamera');
            this.scene.stop('Face');
            this.scene.stop();
            this.scene.start('Title');
        });

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.stop('LevelMapCamera');
            this.scene.stop('Face');
            this.scene.stop();
            this.scene.start('Title');
        });
    }
}
