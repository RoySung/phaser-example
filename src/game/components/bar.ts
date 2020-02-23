import * as Phaser from 'phaser'

class Bar extends Phaser.GameObjects.Container {
  graphics: Phaser.GameObjects.Graphics
  scene: Phaser.Scene

  constructor (config: {
    scene: Phaser.Scene,
    width?: number,
    height?: number,
    x: number,
    y: number,
    color: number
  }) {
    const { scene, color, x, y } = config
    super(scene)
    this.scene = scene
    const width = config.width || 200
    const height = config.height || width / 4

    this.graphics = this.scene.add.graphics()
    this.graphics.fillStyle(color, 1)
    this.graphics.fillRect(0, 0, width, height)
    this.add(this.graphics)
    this.graphics.x = -width / 2
    this.graphics.y = -height / 2

    this.x = x
    this.y = y

    this.scene.add.existing(this)
  }

  setPercent (percent) {
    this.graphics.scaleX = percent
  }
}

export default Bar
