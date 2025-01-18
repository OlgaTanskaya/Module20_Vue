import { createStore } from "vuex";
import tasks from "./modules/tasks";
import settings from "./modules/settings";

const store = createStore({
  modules: {
    tasks, 
    settings, 
  },
});

export default store;
