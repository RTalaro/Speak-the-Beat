class CreditScene extends Phaser.Scene {
    constructor() {
        super('Credits');
    }

    preload() {
        // Make sure to load the title image
        this.load.setPath('./assets/');
        this.load.image('credit', 'credits.png');
    }

    create() {
        // Add the title background image centered on screen
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

        this.add.image(centerX, centerY, 'credit').setOrigin(0.5);

        // Overlay text
        this.add.text(centerX, centerY + 150, 'Thanks for playing! Press SPACE to retry', {
            fontSize: '24px',
            fill: '#ffffff',
        }).setOrigin(0.5);

        // Start main game scene when space is pressed
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.stop('LevelMapCamera');
            this.scene.stop('Face');
            this.scene.stop();
            this.scene.start('Title');
        });
    }
}
