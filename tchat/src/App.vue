<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
  
  background: #FEC600;
}
input {
    text-align: center;
    font-size: 100px;

    background-color: transparent;
    border: none;
    outline: none;
}
#app {
  background-color: 'yellow';
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import Navbar from './components/Navbar.vue';

export default {
    components: {
        Navbar
    }
}
</script>