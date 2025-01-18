<template>
  <div class="task-card">
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
    <p>Priority: {{ task.priority }}</p>
    <p>Due Date: {{ task.dueDate }}</p>
    <p>Status: {{ task.status }}</p>
    <button @click="onEdit">Edit</button>
    <button @click="onDelete">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEdit() {
      this.$emit("edit", this.task); 
    },
    onDelete() {
      this.$emit("delete", this.task.id); 
    },
  },
};
</script>
