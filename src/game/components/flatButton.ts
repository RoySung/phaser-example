import * as Phaser from 'phaser'
type Config = {
  scene: Phaser.Scene,
  key: string,
  text: string,
  textConfig?: object,
  x?: number,
  y?: number,
  onClick: Function
}
const textDefaultConfig = {
  color: '#ffffff',
  fontSize: 20
}

class FlatButton extends Phaser.GameObjects.Container {
  config: Config
  scene: Phaser.Scene
  bg: Phaser.GameObjects.Image
  text: Phaser.GameObjects.Text

  constructor (config: Config) {
    const { scene, key, text, textConfig, x, y, onClick } = config
    super(scene)

    this.config = config
    this.scene = scene

    this.bg = this.scene.add.image(0, 0, key)
    this.add(this.bg)

    const currentTextConfig = textConfig || textDefaultConfig
    this.text = this.scene.add.text(0, 0, text, currentTextConfig)
    this.text.setOrigin(0.5)
    this.add(this.text)

    if (x) this.x = x
    if (y) this.y = y

    this.bg.setInteractive()
    this.bg.on('pointerover', this.over, this)
    this.bg.on('pointerout', this.out, this)
    if (onClick) this.bg.on('pointerdown', onClick)

    this.scene.add.existing(this)
  }

  over () {
    this.scale = 1.2
  }

  out () {
    this.scale = 1
  }
}

export default FlatButton
