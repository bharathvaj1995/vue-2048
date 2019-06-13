<template>
  <div class="wrapper">
    <Header :score="'100'" :best-score="'250'"/>
    <div class="description">
      <p>
        Join the numbers and get to the
        <strong>2048 tile!</strong>
      </p>
      <a>New Game</a>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "Wrapper",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      preference: {
        size: 4
      },
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

      for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
          if (!grid[x][y]) {
            cells.push({
              x: x,
              y: y
            });
          }
        }
      }

      return cells;
    }
  },
  methods: {
    resetDmns() {
      const elem = document.documentElement;
      const body = document.getElementsByTagName("body")[0];
      const x = window.innerWidth || elem.clientWidth || body.clientWidth;
      const y = window.innerHeight || elem.clientHeight || body.clientHeight;

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
      this.clearMessage();

      this.tiles = [];
      // this.updateScore(0);

      // for (var i = 0; i < this.initalTiles; i++) {
      //   this.addRandomTile();
      // }
    },
    initGrid(size) {
      this.grid = Array(size)
        .fill()
        .map(() => Array(size).fill(0));
    },
    setMessage() {
      alert("Set message");
    },
    clearMessage() {
      alert("Clear message");
    },
    randomAvailableTiles() {
      const availableTiles = this.availableCells;

      if (availableTiles.length) {
        return availableTiles[
          Math.floor(Math.random() * availableTiles.length)
        ];
      }
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
