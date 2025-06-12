class LevelSelect extends Phaser.Scene {
    constructor() {
        super('LevelSelect');
    }

    create() {
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

        this.add.text(centerX, centerY - 120, 'Select a Level', {
            fontSize: '48px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Define your charts here
        this.levels = [
            {
                name: 'Easy',
                chart: "D U - - D U D U - - R - - L - - R L R - L R - L R"
            },
            {
                name: 'Medium',
                chart: "D U D U - - R - - L - - R L R - L R - L R - L R - - - - L - - L - - R - - R"
            },
            {
                name: 'Hard',
                chart: "D U D U D U D U - - - - - - - - - - - - - - - - - L - U - U - L - -  - - - - - - - - - - R - - R -"
            }
        ];

        this.levelButtons = [];

        this.levels.forEach((level, idx) => {
            const btn = this.add.text(centerX, centerY + idx * 60, level.name, {
                fontSize: '36px',
                fill: '#ff0',
                backgroundColor: '#222',
                padding: { x: 20, y: 10 }
            })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.scene.start('LevelMapCamera', { chart: level.chart });
            });
            this.levelButtons.push(btn);
        });
    }
}

export default LevelSelect;