<template functional>
  <div class="header">
    <h1 class="title">2048</h1>
    <div class="score_container">
      <div class="score">
        <div>Score</div>
        <div>{{props.score}}</div>
      </div>
      <div class="score">
        <div>Best</div>
        <div>{{props.bestScore}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["score", "bestScore"]
};
</script>
<style scoped>
.header {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 5rem;
  font-weight: bold;
  margin: 0;
}

@media screen and (max-width: 520px) {
  .title {
    font-size: 4rem;
  }
}

.score_container {
  display: flex;
}

.score {
  background: #bbada0;
  color: white;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  border-radius: 4px;
  padding: 8px 16px;
  text-align: center;
}
.score:not(:last-child) {
  margin-right: 8px;
}

.score div {
  font-size: 1.4rem;
}

.score div:first-child {
  text-align: center;
  color: #eee4da;
  text-transform: uppercase;
  font-size: 0.8rem;
  line-height: 13px;
}
</style>
