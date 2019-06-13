<template>
  <div class="message">
    <p>{{message}}</p>
    <div class="lower">
      <a class="keep-playing-button" @click="clearMessage">Keep going</a>
      <a class="retry-button" @click="$emit('try_again')">Try again</a>
    </div>
  </div>
</template>

<script>
import { store, mutations } from "./../store";

export default {
  name: "Message",
  computed: {
    message() {
      return store.notification.message;
    }
  },
  methods: {
    clearMessage() {
      mutations.setNotification({});
    }
  }
};
</script>

<style>
</style>
