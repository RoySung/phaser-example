import * as Phaser from 'phaser'
import AlignGrid from '@/game/utils/alignGrid'

class Road extends Phaser.GameObjects.Container {
  scene: Phaser.Scene
  game: Phaser.Game
  bg: Phaser.GameObjects.Image
  alignGrid: AlignGrid
  lineGroup: Phaser.GameObjects.Group
  vSpace: number | undefined
  lineMoveCount: number = 0

  constructor (config) {
    super(config.scene)
    this.scene = config.scene
    this.game = config.game
    this.alignGrid = config.alignGrid

    this.bg = this.scene.add.image(0, 0, 'road')
    this.add(this.bg)
    this.scene.add.existing(this)
    this.alignGrid.scaleToGameW(this.bg, 1)

    const height = this.game.config.height as number
    this.setSize(this.bg.displayWidth, height)

    this.lineGroup = this.scene.add.group()
  }

  makeLines () {
    this.vSpace = this.displayHeight / 30
    const gameHieght = this.game.config.height
    let firstLine = this.scene.add.image(this.x, 0, 'line')
    this.lineGroup.add(firstLine)
    const lineHieght = firstLine.displayHeight
    const space = lineHieght + this.vSpace
    for (let y = firstLine.y + space; y < gameHieght; y += space) {
      let line = this.scene.add.image(this.x, y, 'line')
      this.lineGroup.add(line)
    }
  }

  moveLines () {
    this.lineMoveCount += 1
    const moveTime = 40
    const lines = this.lineGroup.getChildren()
    // @ts-ignore
    let distance = (lines[0].displayHeight + this.vSpace) / moveTime
    const isOutside = this.lineMoveCount > moveTime
    distance = isOutside ? -distance * this.lineMoveCount : distance

    lines.forEach((line: Phaser.GameObjects.Image) => {
      line.y += distance
    })

    if (isOutside) this.lineMoveCount = 0
  }
}

export default Road
