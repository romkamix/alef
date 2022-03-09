export default {
  namespaced: true,
  state: {
    name: "",
    age: "",
    children: [],
    childrenLimit: 5,
  },
  mutations: {
    SAVE(state, payload) {
      Object.assign(state, payload);
    },
  },
  //   actions: {},
  getters: {},
};
