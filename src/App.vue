<template>
  <MainView />
</template>

<script>
import MainView from './views/MainView.vue';
// import NavBar from './components/NavBar';
// import SideLeft from './components/Header/SideLeft';
export default {
  name: 'App',
  components: {
    // NavBar,
    // SideLeft,
    MainView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
</style>
