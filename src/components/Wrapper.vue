<template>
  <div class="wrapper">
    <Header :score="'100'" :best-score="'250'"/>
    <div class="description">
      <p>
        Join the numbers and get to the
        <strong>2048 tile!</strong>
      </p>
      <a @click="init">New Game</a>
    </div>
    <GameContainer :tiles="tiles"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import GameContainer from "./GameContainer.vue";
import { store, mutations } from "./../store";

export default {
  name: "Wrapper",
  components: {
    Header,
    GameContainer,
    Footer
  },
  data() {
    return {
      initalTiles: 2,
      tileDmns: 124,
      tilePos: 121,
      tiles: [],
      grid: []
    };
  },
  created() {
    this.resetDmns();
  },
  computed: {
    gridDmns() {
      return this.grid.length * this.tileDimension;
    },
    availableTiles() {
      const tiles = [];
      const size = this.preference.size;

      for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
          if (!this.grid[x][y]) {
            tiles.push({
              x,
              y
            });
          }
        }
      }

      return tiles;
    },
    preference() {
      return store.preference;
    }
  },
  methods: {
    resetDmns() {
      const elem = document.documentElement;
      const body = document.getElementsByTagName("body")[0];
      const x = window.innerWidth || elem.clientWidth || body.clientWidth;

      if (x < 520) {
        this.tileDimension = 69.5;
        this.tilePosition = 67;
      } else {
        this.tileDimension = 124;
        this.tilePosition = 121;
      }
    },
    init() {
      this.initGrid(this.preference.size);

      this.tiles = [];
      mutations.setScore(0);
      this.clearMessage();

      let initalTiles = this.initalTiles;
      while (initalTiles) {
        this.addRandomTile();
        initalTiles -= 1;
      }
    },
    initGrid(size) {
      this.grid = Array(size)
        .fill()
        .map(() => Array(size).fill(0));
    },
    addTile(tile = {}) {
      this.tiles.push({
        x: tile.x,
        y: tile.y,
        value: tile.value,
        isMerged: tile.isMerged
      });
      this.grid[tile.x][tile.y] = 1;
    },
    addRandomTile() {
      if (this.availableTiles.length > 0) {
        const value = Math.random() < 0.9 ? 2 : 4; // TODO move to constants
        const randomTile = this.randomAvailableTile();

        this.addTile({
          x: randomTile.x,
          y: randomTile.y,
          value: value,
          isMerged: false
        });
      }
    },
    randomAvailableTile() {
      const availableTiles = this.availableTiles;

      if (availableTiles.length) {
        return availableTiles[
          Math.floor(Math.random() * availableTiles.length)
        ];
      }
    },
    clearMessage() {
      mutations.setNotification({});
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}

a {
  display: inline-block;
  background: #8f7a66;
  border-radius: 3px;
  padding: 0 20px;
  text-decoration: none;
  color: #f9f6f2;
  height: 40px;
  line-height: 42px;
  display: block;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}

.description {
  display: flex;
  justify-content: space-between;
}

.description p {
  font-size: 1.2rem;
  margin: 8px 0px;
}
</style>
