export default {
  namespaced: true,
  state: {
    theme: "light", // 'light' or 'dark'
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
