import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      count: 66
    }
  },
  mutations: {
    add(state) {
      state.count++;
    }
  }
})

export default store;