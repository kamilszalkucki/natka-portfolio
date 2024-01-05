<template>
  <nav class="navbar">
    <div class="container-fluid w-100 d-flex justify-content-center mt-5">
      <ul class="d-flex w-100 justify-content-center">
        <li class="me-3 p-1"><a class="text-decoration-none" href="">O MNIE</a></li>
        <li class="me-3 p-1"><a class="text-decoration-none" href="">GALERIA</a></li>
        <li class="me-3 p-1"><a class="text-decoration-none" href="">OFERTA</a></li>
        <li class="me-3 p-1"><a class="text-decoration-none" href="">KONTAKT</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

ul li {
  border: 2px solid #B6A38D;
  border-radius: 23px;
  min-width: 114px;
  transition: .3s;
  cursor: pointer;
}

ul li:hover {
  background: #FFFFFF47 0% 0% no-repeat padding-box;
}

ul li a {
  letter-spacing: 0px;
  color: #B6A38D;
  font: normal normal 600 13px/20px Poppins;
}
</style>