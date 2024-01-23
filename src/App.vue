<template>
  <header class="main w-100">
    <NavBar />

    <div class="row">
      <div class="col-12 p-0 m-0">
        <div class="d-flex justify-content-center align-items-center position-relative top-50 start-50 translate-middle">
          <img class="img-fluid d-block mb-3" src="./assets/img/t-shirt.png" alt="t-shirt-black">
          <img class="position-absolute top-50 start-50 translate-middle-x logo-animation img-fluid"
            src="./assets/img/logo.svg" alt="" style="transform: translateY(-100%);">
        </div>
      </div>
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import NavBar from './components/Header/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  font-family: Poppins sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

header.main {
  background-color: #EEE5D3;
  min-height: 75vh;
}

/* Domyślna animacja dla obrazka */
.logo-animation {
  transition: opacity 0.3s ease-in-out;
  /* Efekt przejścia dla przezroczystości */
}

/* Po najechaniu myszką */
.logo-animation:hover {
  opacity: 0;
  /* Ustawienie przezroczystości na 0, aby obrazek zniknął */
}

/* Po najechaniu myszką - zmiana obrazka */
.logo-animation:hover {
  content: url('./assets/img/logo_hover.svg');
  /* Zmiana źródła obrazka */
  opacity: 1;
  /* Ustawienie przezroczystości na 1, aby obrazek pojawił się ponownie */
}
</style>
