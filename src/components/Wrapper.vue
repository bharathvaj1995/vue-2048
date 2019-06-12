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
