<template>
  <div id="app">
    <img class="vue-logo" alt="Vue logo" src="./assets/logo.png">
    <sign-up></sign-up>
  </div>
</template>

<script>
import SignUp from './components/SignUp'

export default {
  name: 'app',
  components: {
    SignUp
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
