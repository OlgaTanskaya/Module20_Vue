<template>
  <div>
    <h2>Settings</h2>
    <p>Here you can update your settings.</p>
    <!-- Кнопка для удаления всех карточек -->
    <button @click="deleteAllTasks" class="delete-button">
      Delete All Tasks
    </button>
  </div>
</template>

<script>
export default {
  name: "AppSettings",
  methods: {
    // Метод для удаления всех задач
    deleteAllTasks() {
      this.$store.dispatch("tasks/deleteAllTasks");
    },
  },
};
</script>

<style scoped>
/* Кнопка для удаления всех задач */
.delete-button {
  margin-top: 20px;
  background-color: #f44336; /* Красный цвет */
}

.delete-button:hover {
  background-color: #d32f2f; /* Более темный красный при наведении */
}
</style>
