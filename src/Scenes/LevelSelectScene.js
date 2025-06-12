class LevelSelectScene extends Phaser.Scene {
    constructor() {
        super('LevelSelect');
        this.charts = [
            {
                name: "testing (delete later)",
                chart: "1000 L"
            },
            {
                name: "Easy",
                chart: "200 - L - - - L - L - - - R - R - R - R - - U - - D - - U U - - D D - L - R - U - D"
            },
            {
                name: "Medium",
                chart: "300 - L - R - U - D - L - R - U - D - - - - L L - R R - L L - U U - - L R - D U - - D D D D - U U U U"
            },
            {
                name: "Hard",
                chart: "500 D U - - - - - - - - - D U D U - - R - - L - - R L R - L R - L R - L R \
                                                        - - - - L - - L - - R - - R - - - - - - - D U D U D U D U - - - - - -\
                                                        - - - - - - - - - - - - - - - - - L - U - U - L - -  - - - - - - - - - - R - - R - \
                                                        R D - D - - - - - - - - - - - - - - - - - D R - L - - - - - - - - - -\
                                                        R - U - D - D - D - U - U - - D - - D - - - - - - - - - - - - - - - D\
                                                        D - - - D - U - U U - - R - - R L - - - - - - - - - - - - - - - - - -\
                                                        - - - - - - - - - - - - - - - D - - - - - - - - - - - - - - - - - - -\
                                                        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - U - - - L"
            }
        ];
    }

    create() {
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

        this.add.text(centerX, centerY - 150, 'Select a difficulty', {
            fontSize: '48px',
            fill: '#fff'
        }).setOrigin(0.5);

        this.menuTexts = [];
        this.selected = 0;

        this.charts.forEach((level, idx) => {
            let fillColor = '#fff';  // default color
            if (idx === this.selected) {
                fillColor = '#ff0';
            }

            let txt = this.add.text(centerX, centerY + idx * 60, level.name, {
                fontSize: '32px',
                fill: fillColor
            }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => {
                this.selected = idx;
                this.updateMenu();
            })
            .on('pointerout', () => {
                this.updateMenu();
            })
            .on('pointerdown', () => {
                this.scene.stop();
                this.scene.start('loadScene', { chart: this.charts[idx].chart });
            });
            this.menuTexts.push(txt);
        });

        this.input.keyboard.on('keydown-UP', () => {
            this.selected = (this.selected - 1 + this.charts.length) % this.charts.length;
            this.updateMenu();
        });
        this.input.keyboard.on('keydown-DOWN', () => {
            this.selected = (this.selected + 1) % this.charts.length;
            this.updateMenu();
        });
        this.input.keyboard.on('keydown-ENTER', () => {
            this.scene.stop();
            this.scene.start('loadScene', { chart: this.charts[this.selected].chart });
        });
    }

    updateMenu() {
        this.menuTexts.forEach((txt, idx) => {
            if (idx === this.selected) {
                txt.setColor('#ff0');
            } else {
                txt.setColor('#fff');
            }
        });
    }
}