
import { Scene } from '@/game/utils'

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
    this.alignGrid.placeAt(5, 5, title)

    this.alignGrid.show()
  }
}
