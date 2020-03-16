import * as Phaser from 'phaser'
import Bar from '@/game/components/bar'

export class LoadScene extends Phaser.Scene {
  progressText: Phaser.GameObjects.Text
  bar: Bar

  constructor () {
    super('LoadScene')
  }

  preload () {
    const gameWidth = this.game.config.width as number
    const gameHeight = this.game.config.height as number
    const style = {
      color: '#ffffff',
      fontSize: gameWidth / 20
    }

    this.bar = new Bar({
      scene: this,
      x: gameWidth / 2,
      y: gameHeight / 2,
      color: 0xff0000
    })
    this.progressText = this.add.text(gameWidth / 2, gameHeight / 2, '0%', style)
    this.progressText.setOrigin(0.5, 0.5)
    this.load.on('progress', this.onProgress, this)

    this.load.image('road', 'images/road.jpg')
    this.load.image('line', 'images/line.png')
    this.load.spritesheet('cars', 'images/cars.png', {
      frameWidth: 60,
      frameHeight: 126
    })

    this.load.image('titleBack', 'images/titleBack.jpg')
    this.load.image('title', 'images/title.png')

    this.load.image('pcar1', 'images/pcar1.png')
    this.load.image('pcar2', 'images/pcar2.png')
    this.load.image('cone', 'images/cone.png')
    this.load.image('barrier', 'images/barrier.png')
    this.load.image('toggleBack', 'images/ui/toggles/1.png')
    this.load.image('sfxOff', 'images/ui/icons/sfx_off.png')
    this.load.image('sfxOn', 'images/ui/icons/sfx_on.png')
    this.load.image('musicOn', 'images/ui/icons/music_on.png')
    this.load.image('musicOff', 'images/ui/icons/music_off.png')
    this.load.audio('backgroundMusic', ['audio/random-race.mp3', 'audio/random-race.ogg'])
    this.load.audio('boom', ['audio/boom.mp3', 'audio/boom.ogg'])
    this.load.audio('whoosh', ['audio/whoosh.mp3', 'audio/whoosh.ogg'])
  }

  onProgress (value: number) {
    const percent = Math.floor(value * 100)
    this.progressText.setText(percent.toString())
    this.bar.setPercent(value)
  }

  create () {
    this.scene.start('MenuScene')
  }
}
