export default {
  namespaced: true,
  state: {
    tasks: [],
    loading: false,
  },
  mutations: {
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    UPDATE_TASK(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    DELETE_ALL_TASKS(state) {
      state.tasks = [];
    },
  },
  actions: {
    async addTask({ commit }, task) {
      // Проверка, что поля задачи заполнены корректно
      console.log(commit);
      console.log(task);
      if (!task.title || !task.description || !task.priority || !task.dueDate) {
        return;
      }

      commit("SET_LOADING", true);

      setTimeout(() => {
        const newTask = {
          ...task,
          id: Date.now(), // Генерация уникального ID
          status: "new", // Установка статуса по умолчанию
        };
        commit("ADD_TASK", newTask);
        commit("SET_LOADING", false);
      }, 500);
    },
    async updateTask({ commit }, task) {
      commit("SET_LOADING", true);
      setTimeout(() => {
        commit("UPDATE_TASK", task);
        commit("SET_LOADING", false);
      }, 500);
    },
    async deleteTask({ commit }, taskId) {
      commit("SET_LOADING", true);
      setTimeout(() => {
        commit("DELETE_TASK", taskId);
        commit("SET_LOADING", false);
      }, 500);
    },
    async deleteAllTasks({ commit }) {
      commit("SET_LOADING", true);
      setTimeout(() => {
        commit("DELETE_ALL_TASKS");
        commit("SET_LOADING", false);
      }, 500);
    },
  },
  getters: {
    allTasks: (state) => state.tasks,
    isLoading: (state) => state.loading,
    taskById: (state) => (id) => state.tasks.find((task) => task.id === id),
  },
};
