<template>
    <div>
        <div class="col-12 container gallery-container d-flex p-0">
            <div class="row w-100">
                <div v-for="(image, index) in visibleImages" :key="index" class="col-sm-12 col-md-6 col-lg-4 p-2">
                    <ImageSquare :image="image">Zobacz projekt</ImageSquare>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ImageSquare from './GallerySection/ImageSquare.vue';

export default {
    name: "PortfolioGallery",
    components: {
        ImageSquare,
    },
    props: {
        visibleImages: {
            type: Array,
            default: null,
        }
    },
    setup() {

    }
}
</script>
<style scoped>
.gallery-container {
    max-width: 1077px;
}
</style>