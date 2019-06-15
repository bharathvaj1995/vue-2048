<template>
  <div id="app">
    <Wrapper/>
  </div>
</template>

<script>
import Wrapper from "./components/Wrapper.vue";
export default {
  name: "app",
  components: {
    Wrapper
  }
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  background: #faf8ef;
  color: #776e65;
  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
}

body {
  margin: 80px 0;
}

@media screen and (max-width: 520px) {
  body {
    margin: 40px 0;
  }
}
</style>
