import { Scene } from '@/game/utils'
import Road from '@/game/components/road'

export class MainScene extends Scene {
  road: Road

  constructor () {
    super('MainScene', {
      cols: 10,
      rows: 10
    })
  }

  create () {
    super.create()
    this.road = new Road({
      scene: this,
      game: this.game,
      alignGrid: this.alignGrid
    })
    this.road.x = this.game.config.width as number / 2
    this.road.makeLines()

    // this.alignGrid.show()
  }

  update () {
    this.road.moveLines()
  }
}
