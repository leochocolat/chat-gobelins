<template>
  <div class="page-login">
    <div class="form__container">
      <form @submit.prevent="onSubmit">
        <p class="label__username">Login</p>
        <input v-on:input="onInputHandler" class="input__username" type="text" v-model="username" placeholder="username">
      </form>
    </div>
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
    },
    onInputHandler() {
      this.$el.querySelector('.form__container').classList.add('on-input');
    }
  }
}
</script>

<style lang="scss">

.page-login {
  display: flex;

  width: 100%;
  height: 100vh;

  justify-content: center;
  align-items: center;  
}

.form__container {
  max-width: 60%;
  display: inline;

  margin: auto;
  padding: 10px 40px;
  box-sizing: border-box;

  text-align: left;
}

.label__username {
  font-family: 'Pilat Extended';
  color: black;
  font-size: 80px;
  line-height: 1em;
  margin: 0;
}

.input__username {
  font-family: 'Pilat Extended';
  font-weight: bold;
  line-height: 1em;
  text-align: left;

  width: 100%;

  height: 1em;

  &::placeholder {
    color: black;
    opacity: .3;
  }
}

.on-input {
    transform: rotate(-3deg);

    background-color: white;
}

</style>
