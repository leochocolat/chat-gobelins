<template>
  <div id="app">
    <div class="flash"></div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./fonts/gotham/stylesheet.css";
@import "./fonts/PilatExtended/stylesheet.css";
@import "./fonts/Monarch/stylesheet.css";
@import "./fonts/Airstrike/stylesheet.css";
@import "./fonts/Frivole/stylesheet.css";
@import "./fonts/GoboldBold/styles.css";

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
.flash {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;

  visibility: hidden;
  opacity: 0;

  background-color: white;

  pointer-events: none;
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