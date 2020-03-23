import * as Phaser from 'phaser'
import AlignGrid from './alignGrid'
import { Game } from '@/game'

type AlignGridConfig = {
  cols: number,
  rows: number
}
export class Scene extends Phaser.Scene {
  alignGrid: AlignGrid
  alignGridConfig: AlignGridConfig
  game: Game

  constructor (sceneName: string, config: AlignGridConfig) {
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
