<template>
  <div>
    <form >
      <div class="form-row">
        <div class="col-4">
          <input type="text" class="form-control" v-model="email" name="email" placeholder="email">
        </div>
        <div class="col-4">
          <input
            type="password"
            class="form-control"
            v-model="password"
            name="password"
            placeholder="password"
          >
        </div>
        <div class="col-2">
          <button @click="loginUser" class="btn btn-success">Login</button>&nbsp;
          <button @click="registerUser" class="btn btn-info">Register</button>
         
        </div>       
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginUser",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginUser(e) {
      e.preventDefault();
      const newLogin = {
        email: this.email,
        password: this.password
      };
      // Send up to parent
      this.$emit("login-user", newLogin);
      this.email = "";
      this.password = "";
    },
     registerUser(e) {
      e.preventDefault();
      const newLogin = {
        email: this.email,
        password: this.password
      };
      // Send up to parent
      this.$emit("register-user", newLogin);
      this.email = "";
      this.password = "";
    },
  }
};
</script>

<style scoped>
</style>