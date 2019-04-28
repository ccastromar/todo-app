<template>
  <div>
    <form @submit="addTodo">
      <div class="form-row">
        <div class="col-8">
          <input
            type="text"
            class="form-control"
            v-model="title"
            name="title"
            placeholder="Add Todo..."
          >
        </div>
        <div class="col-4">
          <input type="submit" class="btn btn-success" value="Submit">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        completed: false
      };
      // Send up to parent
      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>