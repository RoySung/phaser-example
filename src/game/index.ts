import * as Phaser from 'phaser'
import { LoadScene, MenuScene, MainScene } from './scenes'

type GameConfig = Phaser.Types.Core.GameConfig & {
  model: object,
  controller: object
}

const gameConfig: GameConfig = {
  title: 'Sample',

  type: Phaser.AUTO,

  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    width: 480,
    height: 640
  },

  scene: [LoadScene, MenuScene, MainScene],
  // scene: [MenuScene],

  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },

  parent: 'game',
  backgroundColor: '#000000',
  model: {},
  controller: {}
}

export class Game extends Phaser.Game {
  model: any
  controller: any
  emitter: Phaser.Events.EventEmitter

  constructor (config: GameConfig) {
    super(config)
    this.model = config.model
    this.controller = config.controller
    this.emitter = new Phaser.Events.EventEmitter()
  }
}

export const gameFactory = () => {
  const game = new Game(gameConfig)
  return game
}
