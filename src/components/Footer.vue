<template>
  <div class="footer">
    <p>
      <strong class="important">How to play:</strong> Use your
      <strong>arrow keys</strong> to move the tiles. When two
      tiles with the same number touch, they
      <strong>merge into one!</strong>
    </p>
    <hr>

    <p>
      <strong class="important">NOTE:</strong> This game was written using Vue 2
    </p>

    <hr>

    <p>
      <strong class="important">CREDITS:</strong>&nbsp;2048 by
      <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli.</a>
    </p>
  </div>
</template>

<script>
export default {};
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
