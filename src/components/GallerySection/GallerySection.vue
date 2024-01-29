<template>
    <div class="gallery-section container-fluid p-0 m-0">
        <div class="row w-100 p-0 m-0">
            <div class="col-12">
                <InfoButton :btnStyle="btnGalleryStyles" class="mt-5 mb-5">
                    GALERIA PROJEKTÓW GRAFICZNYCH
                </InfoButton>
            </div>
        </div>

        <div class="row w-100 p-0 m-0">
            <div class="col-12 container gallery-container d-flex p-0">
                <div class="row w-100">
                    <div v-for="(image, index) in visibleImages" :key="index" class="col-sm-12 col-md-6 col-lg-4 p-2">
                        <ImageSquare :image="image">Zobacz projekt</ImageSquare>
                    </div>
                </div>
            </div>
        </div>

        <div class="row w-100">
            <div class="col-12">
                <InfoButton :btnStyle="{ backgroundColor: '#EEE5D3', color: '#B6A38D', cursor: 'default' }"
                    class="mt-5 mb-5">
                    GALERIA PROJEKTÓW GRAFICZNYCH
                </InfoButton>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import InfoButton from '../InfoButton.vue';
import ImageSquare from './ImageSquare.vue';

export default {
    name: "GallerySection",
    components: {
        InfoButton,
        ImageSquare,
    },
    setup() {
        const images = ref([]);
        const visibleImageCount = ref(9);

        const importMiniaturesImg = () => {
            const imagesContext = require.context('@/assets/img/miniatures', false, /\.(png|jpe?g|svg)$/);
            return imagesContext.keys().map(imagesContext);
        };

        const btnGalleryStyles = {
            backgroundColor: '#EEE5D3',
            color: '#B6A38D',
            cursor: 'default',
            height: '88px',
            width: '274px',
            borderRadius: '50px',
            textAlign: 'center',
            font: 'normal normal 600 16px/25px Poppins',
            letterSpacing: '0px',
            border: 'none',
        };

        onMounted(() => {
            images.value = importMiniaturesImg();
        });

        const visibleImages = ref([]);

        onMounted(() => {
            visibleImages.value = images.value.slice(0, visibleImageCount.value);
        });

        return {
            images,
            visibleImages,
            visibleImageCount,
            btnGalleryStyles
        };
    },
};
</script>
  
<style scoped>
.gallery-section {
    background-color: #a5927c;
}

.gallery-container {
    max-width: 1077px;
}
</style>
  