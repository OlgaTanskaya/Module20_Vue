<template>
  <div>
    <h2>My Tasks</h2>
    <!-- Форма для редактирования -->
    <div v-if="isEditing">
      <h3>Edit Task</h3>
      <TaskForm
        ref="taskForm"
        :task="editingTask"
        @submit="handleTaskUpdate"
        @cancel="cancelEditing"
      />
    </div>

    <div v-else>
      <div v-if="tasks.length">
        <h3 class="task-title">Tasks List</h3>
        <TaskCard
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @edit="startEditing"
          @delete="deleteTask"
        />
      </div>
      <p v-else>No tasks available. Please add a task.</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TaskCard from "../components/TaskCard.vue";
import TaskForm from "../components/TaskForm.vue";

export default {
  components: { TaskCard, TaskForm },
  data() {
    return {
      isEditing: false,
      editingTask: null,
    };
  },
  computed: {
    ...mapGetters("tasks", ["allTasks"]),
    tasks() {
      return this.allTasks;
    },
  },
  methods: {
    ...mapActions("tasks", ["addTask", "updateTask", "deleteTask"]),

    startEditing(task) {
      this.editingTask = { ...task };
      this.isEditing = true;
    },

    handleTaskUpdate(task) {
      this.updateTask(task).then(() => {
        this.isEditing = false;
        this.editingTask = null;
      });
    },
    cancelEditing() {
      this.isEditing = false;
      this.editingTask = null;
    },
  },
};
</script>
