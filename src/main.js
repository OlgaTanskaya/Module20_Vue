import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index"; 
import "./assets/styles/styles.css"; 
createApp(App).use(router).use(store).mount("#app");
