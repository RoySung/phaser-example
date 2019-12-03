<template>
  <div>
    <h3>Game</h3>
    <div id="game"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { gameFactory } from '@/game'

@Component
export default class Game extends Vue {
  game: any

  mounted () {
    this.game = gameFactory()
  }
}
</script>

<style scoped>

</style>
