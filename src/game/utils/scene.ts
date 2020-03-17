import * as Phaser from 'phaser'
import AlignGrid from './alignGrid'

export class Scene extends Phaser.Scene {
  alignGrid: AlignGrid
  alignGridConfig: {
    cols: number,
    rows: number
  }

  constructor (sceneName, config) {
    super(sceneName)
    this.alignGridConfig = config
  }

  create () {
    const { cols, rows } = this.alignGridConfig
    const gameWidth = this.game.config.width as number
    const gameHeight = this.game.config.height as number
    this.alignGrid = new AlignGrid({
      cols,
      rows,
      scene: this,
      width: gameWidth,
      height: gameHeight
    })
  }
}
