<template>
  <div>
    <div class="container-fluid p-0 m-0">
      <GallerySection />
      <AboutMe />
      <Offer />
    </div>
  </div>
</template>
  
<script>
import GallerySection from '../components/GallerySection/GallerySection.vue';
import AboutMe from '../components/AboutMe.vue';
import Offer from '../components/OfferSection/Offer.vue';

export default {
  name: 'HomeView',
  components: {
    GallerySection,
    AboutMe,
    Offer,
  }
}
</script>

<style scoped>
</style>

