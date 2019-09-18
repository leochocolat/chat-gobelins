<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="username" placeholder="username">
      <button type="submit">SUBMIT</button>
    </form>
  </div>
</template>

<script>
import store from '../store';

export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.username.length > 0) {
        store.registerUser(this.username);
        console.log(store.isRegistered);
      }
    }
  }
}
</script>

<style>

</style>
