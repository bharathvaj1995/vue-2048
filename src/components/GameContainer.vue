<template>
  <div class="game-container" :style="{width:`${dmns}px`, height: `${dmns}px`}">
    <Message/>
    <div class="grid-container">
      <div v-for="(row,rowKey) in grid" :key="rowKey" class="grid-row">
        <div v-for="(col,colKey) in row" :key="colKey" class="grid-cell"></div>
      </div>
    </div>

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
    },
    dmns: {
      type: Number,
      default: 0
    },
    grid: {
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

.game-container {
  margin-top: 40px;
  position: relative;
  padding: 15px;
  cursor: default;
  touch-action: none;
  background: #bbada0;
  border-radius: 6px;
  width: 500px;
  height: 500px;
  box-sizing: border-box;
}

.grid-container {
  position: absolute;
  z-index: 1;
}

.grid-row {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.grid-row:last-child {
  margin-bottom: 0;
}

.grid-cell {
  width: 106.25px;
  height: 106.25px;
  margin-right: 15px;
  border-radius: 3px;
  background: rgba(238, 228, 218, 0.35);
}
.grid-cell:last-child {
  margin-right: 0;
}
</style>
