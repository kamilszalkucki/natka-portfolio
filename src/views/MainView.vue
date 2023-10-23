<template>
    <NavBar />
  
    <main>
      <header>
        <HeaderComponent />
      </header>
    </main>
  </template>
  
<script>
import NavBar from '../components/NavBar';
import HeaderComponent from '../components/Header/HeaderComponent';
export default {
  name: 'App',
  components: {
    NavBar,
    HeaderComponent,
  }
}
</script>

