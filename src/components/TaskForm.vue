<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">Title:</label>
      <input
        id="title"
        v-model="taskData.title"
        @blur="validateField('title')"
        :class="{ error: errors.title }"
      />
      <p v-if="errors.title">{{ errors.title }}</p>
    </div>
    <div>
      <label for="description">Description:</label>
      <textarea
        id="description"
        v-model="taskData.description"
        @blur="validateField('description')"
        :class="{ error: errors.description }"
      ></textarea>
      <p v-if="errors.description">{{ errors.description }}</p>
    </div>
    <div>
      <label for="priority">Priority:</label>
      <select
        id="priority"
        v-model="taskData.priority"
        @blur="validateField('priority')"
        :class="{ error: errors.priority }"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <p v-if="errors.priority">{{ errors.priority }}</p>
    </div>
    <div>
      <label for="dueDate">Due Date:</label>
      <input
        id="dueDate"
        type="date"
        v-model="taskData.dueDate"
        @blur="validateField('dueDate')"
        :class="{ error: errors.dueDate }"
      />
      <p v-if="errors.dueDate">{{ errors.dueDate }}</p>
    </div>
    <!-- Новый селект для статуса -->
    <div>
      <label for="status">Status:</label>
      <select
        id="status"
        v-model="taskData.status"
        @blur="validateField('status')"
        :class="{ error: errors.status }"
      >
        <option value="new">New</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <p v-if="errors.status">{{ errors.status }}</p>
    </div>
    <div>
      <button type="submit" :disabled="!isValid">Save</button>
      <button type="button" @click="$emit('cancel')">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({
        title: "",
        description: "",
        priority: "low",
        dueDate: "",
        status: "new",
      }),
    },
  },
  data() {
    return {
      taskData: { ...this.task },
      errors: {},
    };
  },
  computed: {
    isValid() {
      return Object.keys(this.errors).length === 0;
    },
  },
  methods: {
    validateField(field) {
      if (!this.taskData[field]) {
        this.errors[field] = `${field} is required.`;
      } else {
        delete this.errors[field];
      }
    },
    onSubmit() {
      this.validateField("title");
      this.validateField("description");
      this.validateField("priority");
      this.validateField("dueDate");
      this.validateField("status");

      if (this.isValid) {
        this.$emit("submit", { ...this.taskData });
        this.resetForm(); // Очистка формы, если это форма создания
      }
    },
    resetForm() {
      this.taskData = {
        title: "",
        description: "",
        priority: "low",
        dueDate: "",
        status: "new",
      };
      this.errors = {};
    },
  },
};
</script>
