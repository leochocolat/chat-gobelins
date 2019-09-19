<template>
  <div class="page-login">
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="username" placeholder="username">
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

.page-login {
  display: flex;

  width: 100%;
  height: 100vh;

  justify-content: center;
  align-items: center;  
}

</style>
