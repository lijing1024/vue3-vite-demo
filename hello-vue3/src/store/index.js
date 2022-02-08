// import { createStore } from 'vuex';
import { createStore } from './gvuex.js';
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