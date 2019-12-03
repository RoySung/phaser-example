import * as Phaser from 'phaser'
import { GameScene } from './scenes'

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',

  type: Phaser.AUTO,

  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    width: 800,
    height: 600
  },

  scene: GameScene,

  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },

  parent: 'game',
  backgroundColor: '#000000'
}

export const gameFactory = () => new Phaser.Game(gameConfig)
