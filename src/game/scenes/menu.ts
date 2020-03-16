import * as Phaser from 'phaser'
import AlignGrid from '@/game/utils/alignGrid'

export class MenuScene extends Phaser.Scene {
  alignGrid: AlignGrid

  constructor () {
    super('MenuScene')
  }

  create () {
    const gameWidth = this.game.config.width as number
    const gameHeight = this.game.config.height as number
    this.alignGrid = new AlignGrid({
      scene: this,
      cols: 10,
      rows: 10,
      width: gameWidth,
      height: gameHeight
    })
    this.alignGrid.show()

    const rect = this.add.rectangle(0, 0, 100, 100)
    rect.setFillStyle(0x0000ff)
    rect.setOrigin(0.5)

    this.alignGrid.placeAt(5, 5, rect)

    // this.add.image(200, 200, 'title')
  }
}
