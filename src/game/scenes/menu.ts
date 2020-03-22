
import { Scene } from '@/game/utils'
import FlatButton from '@/game/components/flatButton'

export class MenuScene extends Scene {
  constructor () {
    super('MenuScene', {
      cols: 10,
      rows: 10
    })
  }

  create () {
    super.create()

    const bg = this.add.image(0, 0, 'titleBack')
    this.alignGrid.placeAt(5, 5, bg)

    const title = this.add.image(0, 0, 'title')
    this.alignGrid.placeAt(5, 3, title)
    this.alignGrid.scaleToGameW(title, 0.8)
    // this.alignGrid.scaleToGridW(title, 8)

    const btnConfig = {
      scene: this,
      key: 'button1',
      text: 'Start',
      onClick: () => console.log('Start')
    }
    const btnStart = new FlatButton(btnConfig)
    this.alignGrid.placeAt(5, 6, btnStart)

    this.alignGrid.show()
  }
}
