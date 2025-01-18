<template>
  <div>
    <h1>Create Task</h1>
    <TaskForm @submit="handleTaskAdd" />
    <router-link to="/">Back to Tasks</router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TaskForm from "@/components/TaskForm.vue";

export default {
  components: { TaskForm },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    handleTaskAdd(task) {
      this.addTask(task).then(() => {
        this.$router.push("/"); 
      });
    },
  },
};
</script>
