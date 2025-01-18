<template>
  <div id="app">
    <header>
      <h1>Task Planner</h1>
      <nav>
        <router-link to="/">My Tasks</router-link>
        <router-link to="/create">Create Task</router-link>
        <router-link to="/settings">Settings</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
