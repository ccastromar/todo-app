<template>
  <div id="app">
    <div class="container">
      <h1>Todo App</h1>
      <p>Example built with Nest.js, MongoDB and Vue.js</p>
     
        <LoginUser v-on:login-user="loginUser" v-on:register-user="registerUser"/>
       <hr>
      <div class="row">
        <h4>JWT Token</h4>
        <div class="col-md-12 alert alert-info">
        <p class="token">{{ this.token }}</p>
        </div>
      </div>
        <AddTodo v-on:add-todo="addTodo"/>  
        <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>      
      <hr>

      <div class="alert alert-danger" v-if="errors && errors.length">
        <strong>Errors</strong>
        <ul>
          <li :key="error.id" v-for="error in errors">{{ error }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import LoginUser from "./components/LoginUser";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo,
    LoginUser
  },
  data() {
    return {
      todos: [],
      errors: [],
      token: ""
    };
  },
  created() {
    this.$http
      .get("todo")
      .then(res => (this.todos = res.data))
      .catch(err => (this.errors = [...this.errors, err.response.data]));
  },
  methods: {
    deleteTodo(id) {
      const token = this.token.token;
      // console.log(token)
      if (token) {
        this.$http.defaults.headers.common["Authorization"] = "Bearer " + token;
      }
      this.$http
        .delete(`/todo/${id}`)
        .then(() => (this.todos = this.todos.filter(todo => todo._id !== id)))
        .catch(err => (this.errors = [...this.errors, err.response.data]));
    },
    addTodo(newTodo) {
      const token = this.token.token;
      const { title, completed } = newTodo;
       if (token) {
        this.$http.defaults.headers.common["Authorization"] = "Bearer " + token;
      }
      this.$http
        .post("todo", {
          title,
          completed,
          category: 'default'
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => (this.errors = [...this.errors, err.response.data]));
    },
    loginUser(newLogin) {
      const { email, password } = newLogin;
      // console.log(newLogin);
      this.$http
        .post("auth/login", {
          email,
          password
        })
        .then(res => (this.token = res.data))
        //.then( res => this.errors = [...this.errors, res.data])
        .catch(err => (this.errors = [...this.errors, err.response.data]));
    },
    registerUser(newLogin) {
      const { email, password } = newLogin;
      // console.log(newLogin);
      this.$http
        .post("auth/register", {
          email,
          password
        })
        .then(res => (this.token = res.data))
        //.then( res => this.errors = [...this.errors, res.data])
        .catch(err => (this.errors = [...this.errors, err.response.data]));
    }
  }
};
</script>

<style>
.error {
  font-size: 10pt;
  color: rgb(221, 17, 17);
}

</style>