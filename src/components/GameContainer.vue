<template>
  <div class="game-container">
    <Message/>
    <div class="tile-container">
      <Tile
        v-for="tile in tiles"
        :key="`${tile.value}-${tile.x}-${tile.y}-${Math.random()}`"
        :data="tile"
      />
    </div>
  </div>
</template>

<script>
import Tile from "./Tile.vue";
import Message from "./Message.vue";

export default {
  name: "GameContainer",
  components: {
    Tile,
    Message
  },
  props: {
    tiles: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.tile-container {
  position: absolute;
  z-index: 2;
}
</style>
