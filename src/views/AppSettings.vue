<template>
  <div>
    <h2>Settings</h2>
    <p>Here you can update your settings.</p>
    <button @click="deleteAllTasks" class="delete-button">
      Delete All Tasks
    </button>
  </div>
</template>

<script>
export default {
  name: "AppSettings",
  methods: {
    
    deleteAllTasks() {
      this.$store.dispatch("tasks/deleteAllTasks");
    },
  },
};
</script>

<style scoped>

.delete-button {
  margin-top: 20px;
  background-color: #f44336; 
}

.delete-button:hover {
  background-color: #d32f2f; 
}
</style>
