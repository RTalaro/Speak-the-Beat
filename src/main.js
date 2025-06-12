
// debug
"use strict"

import './Scenes/LevelSelectScene.js';

let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    width: 1600,
    height: 900,
    fps: { forceSetTimeOut: true, target: 60},
    scene: [TitleScene, LevelSelectScene, Load, LevelMapCamera, Game, Face, CreditScene],
    backgroundColor: '#000000'
}

const game = new Phaser.Game(config);
