export default {
  namespaced: true,
  state: {
    theme: "light", 
  },
  mutations: {
    SET_THEME(state, theme) {
      state.theme = theme;
    },
  },

  actions: {
    updateTheme({ commit }, theme) {
      commit("SET_THEME", theme);
    },
  },
  getters: {
    currentTheme: (state) => state.theme,
  },
};
