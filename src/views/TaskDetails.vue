<template>
  <div>
    <h2>Task Details</h2>
    <p><strong>Title:</strong> {{ task?.title }}</p>
    <p><strong>Description:</strong> {{ task?.description }}</p>
    <p><strong>Priority:</strong> {{ task?.priority }}</p>
    <p><strong>Status:</strong> {{ task?.status }}</p>
    <p><strong>Due Date:</strong> {{ task?.dueDate }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      const id = this.$route.params.id;
      return this.$store.getters["tasks/allTasks"].find(
        (task) => task.id === id
      );
    },
  },
};
</script>
