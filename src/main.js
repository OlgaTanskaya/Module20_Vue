import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index"; // Если используете Vuex
import "./assets/styles/styles.css"; // Путь к вашему CSS-файлу
createApp(App).use(router).use(store).mount("#app");
