// store.js
import { []

const store = createStore({
  state: {
    orderItems: []
  },
  mutations: {
    addItemToOrder(state, item) {
      state.orderItems.push(item);
    },
    removeItemFromOrder(state, index) {
      state.orderItems.splice(index, 1);
    }
  },
  actions: {
    addItemToOrder({ commit }, item) {
      commit('addItemToOrder', item);
    },
    removeItemFromOrder({ commit }, index) {
      commit('removeItemFromOrder', index);
    }
  },
  getters: {
    orderItems: state => state.orderItems
  }
});

export default store;
