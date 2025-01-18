import { createRouter, createWebHistory } from "vue-router";
import MyTasks from "../views/MyTasks.vue";
import CreateTask from "../views/CreateTask.vue";
import AppSettings from "../views/AppSettings.vue";

const routes = [
  { path: "/", name: "MyTasks", component: MyTasks },
  { path: "/create", name: "CreateTask", component: CreateTask },
  { path: "/settings", name: "Settings", component: AppSettings },
  {
    path: "/tasks/:id",
    name: "TaskDetails",
    component: () => import("../views/TaskDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
