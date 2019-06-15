<template>
  <div
    :class="`tile tile-${data.value} ${data.isNew ? ' tile-new' : ''} ${data.isMerged ? ' tile-merged' : ''}`"
    :style="{ transform: 'translate(' + calcStyleX(data.x) + 'px,' + calcStyleY(data.y) + 'px)'}"
  >
    <div class="tile-inner">{{data.value}}</div>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: ["data"],

  methods: {
    calcStyleX(x) {
      return this.$parent.tilePosition * x;
    },

    calcStyleY(y) {
      return this.$parent.tilePosition * y;
    }
  }
};
</script>

<style>
.tile,
.tile .tile-inner {
  width: 107px;
  height: 107px;
  line-height: 116.25px;
}

.tile {
  position: absolute;
  -webkit-transition: 100ms ease-in-out;
  -moz-transition: 100ms ease-in-out;
  transition: 100ms ease-in-out;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  transition-property: transform;
}
.tile .tile-inner {
  border-radius: 3px;
  background: #eee4da;
  text-align: center;
  font-weight: bold;
  z-index: 10;
  font-size: 55px;
}
.tile.tile-2 .tile-inner {
  background: #eee4da;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0),
    inset 0 0 0 1px rgba(255, 255, 255, 0);
}
.tile.tile-4 .tile-inner {
  background: #ede0c8;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0),
    inset 0 0 0 1px rgba(255, 255, 255, 0);
}
.tile.tile-8 .tile-inner {
  color: #f9f6f2;
  background: #f2b179;
}
.tile.tile-16 .tile-inner {
  color: #f9f6f2;
  background: #f59563;
}
.tile.tile-32 .tile-inner {
  color: #f9f6f2;
  background: #f67c5f;
}
.tile.tile-64 .tile-inner {
  color: #f9f6f2;
  background: #f65e3b;
}
.tile.tile-128 .tile-inner {
  color: #f9f6f2;
  background: #edcf72;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2381),
    inset 0 0 0 1px rgba(255, 255, 255, 0.14286);
  font-size: 45px;
}

.tile.tile-256 .tile-inner {
  color: #f9f6f2;
  background: #edcc61;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.31746),
    inset 0 0 0 1px rgba(255, 255, 255, 0.19048);
  font-size: 45px;
}

.tile.tile-512 .tile-inner {
  color: #f9f6f2;
  background: #edc850;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.39683),
    inset 0 0 0 1px rgba(255, 255, 255, 0.2381);
  font-size: 45px;
}

.tile.tile-1024 .tile-inner {
  color: #f9f6f2;
  background: #edc53f;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619),
    inset 0 0 0 1px rgba(255, 255, 255, 0.28571);
  font-size: 35px;
}

.tile.tile-2048 .tile-inner {
  color: #f9f6f2;
  background: #edc22e;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556),
    inset 0 0 0 1px rgba(255, 255, 255, 0.33333);
  font-size: 35px;
}

.tile.tile-super .tile-inner {
  color: #f9f6f2;
  background: #3c3a32;
  font-size: 30px;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.tile-new .tile-inner {
  animation: appear 200ms ease 100ms;
  animation-fill-mode: backwards;
}

@media screen and (max-width: 520px) {
  .tile,
  .tile .tile-inner {
    width: 60px;
    height: 60px;
    line-height: 67.5px;
  }

  .tile .tile-inner {
    font-size: 35px;
  }

  .tile.tile-128 .tile-inner {
    font-size: 25px;
  }

  .tile.tile-256 .tile-inner {
    font-size: 25px;
  }

  .tile.tile-1024 .tile-inner {
    font-size: 15px;
  }
}
</style>
