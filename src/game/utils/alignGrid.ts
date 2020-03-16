import * as Phaser from 'phaser'

type Config = {
  scene: Phaser.Scene,
  cols: number,
  rows: number,
  width: number,
  height: number
}

class AlignGrid {
  config: Config
  scene: Phaser.Scene
  cw: number
  ch: number
  numberSize: number = 24
  colorHex: string = '#ff0000'

  get color () {
    return Phaser.Display.Color.HexStringToColor(this.colorHex)
  }

  constructor (config: Config) {
    const { scene, cols, rows, width, height } = config
    this.config = config
    this.scene = scene
    this.cw = width / cols
    this.ch = height / rows
  }

  show () {
    const { scene, config, cw, ch, color } = this
    const graphics = scene.add.graphics()
    const handleLineStyle = (isCenter) => {
      const lineWidth = isCenter ? 6 : 2
      graphics.lineStyle(lineWidth, this.color.color32, 0.5)
    }

    for (let x = 0; x < config.width; x += cw) {
      handleLineStyle(x === config.width / 2)
      graphics.moveTo(x, 0)
      graphics.lineTo(x, config.height)
      const index = x / cw
      scene.add.text(x, 0, `${index}`, {
        color: this.color.rgba,
        fontSize: this.numberSize
      })
    }
    for (let y = 0; y < config.height; y += ch) {
      handleLineStyle(y === config.height / 2)
      graphics.moveTo(0, y)
      graphics.lineTo(config.width, y)
      const index = y / ch
      scene.add.text(0, y, `${index}`, {
        color: this.color.rgba,
        fontSize: this.numberSize
      })
    }

    graphics.strokePath()
  }

  placeAt (xx: number, yy: number, obj: { x: number, y: number }) {
    const x = xx * this.cw
    const y = yy * this.ch
    obj.x = x
    obj.y = y
  }
}

export default AlignGrid
