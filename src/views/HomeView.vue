<template>
  <div>
    <div class="container-fluid p-0 m-0">
      <GallerySection />
      <AboutMe />
      <OfferInfo />
    </div>
  </div>
</template>
  
<script>
import GallerySection from '../components/GallerySection/GallerySection.vue';
import AboutMe from '../components/AboutMe.vue';
import OfferInfo from '../components/OfferSection/OfferInfo.vue';

export default {
  name: 'HomeView',
  components: {
    GallerySection,
    AboutMe,
    OfferInfo,
  }
}
</script>

<style scoped>
</style>

