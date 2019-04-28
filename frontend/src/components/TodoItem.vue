<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete">&nbsp;
      <span>{{todo.title}}</span>&nbsp;
      <span class="label">{{todo.category}}</span>&nbsp;
      <button class="btn btn-danger btn-sm" @click="$emit('del-todo', todo._id)">&times;</button>
      </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
}
</script>

<style scoped>
    .category {
    border-radius: 25px;
    font-size: 8pt;
    background: #00aa22;
    padding: 4px;
    color: #fff;
    border: 1px #ccc solid;
    }
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>
