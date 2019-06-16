import Vue from "vue";

export const store = Vue.observable({
  preference: {
    size: 4
  },
  stats: {
    currScore: 0,
    bestScore: 0
  },
  message: ""
});

export const mutations = {
  setPreference(preference) {
    store.preference = {
      ...store.preference,
      ...preference
    };
  },
  setScore(score) {
    store.stats.currScore = score;
    this.setBestScore();
  },
  setBestScore() {
    const stats = store.stats;
    stats.bestScore =
      stats.currScore >= stats.bestScore ? stats.currScore : stats.bestScore;
  },
  setMessage(message = "") {
    store.message = message;
  }
};
