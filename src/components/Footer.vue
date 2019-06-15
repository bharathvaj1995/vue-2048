<template functional>
  <div class="footer">
    <strong>How to play:</strong>
    <ul>
      <li>
        Use your
        <strong>arrow keys</strong> to move the tiles.
      </li>
      <li>
        Use your
        <strong>voice command</strong> to move the tiles.
        (UP / DOWN / LEFT / RIGHT)
      </li>
    </ul>

    <hr>

    <p>
      <strong>CREDITS:</strong>&nbsp;2048 by
      <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli.</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "game-footer",
  props: {
    isSpeechSupported: {
      type: Boolean,
      value: false
    }
  }
};
</script>

<style scoped>
.footer {
  margin: 24px 0px;
}
a {
  color: #776e65;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
