<template>
    <div class="gallery-section">
        <div class="row w-100 p-0 m-0">
            <div class="col-12">
                <InfoButton :btnStyle="btnGalleryStyles" :hoverStyles="btnGalleryStylesHover" class="mt-5 mb-5">
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
                <InfoButton :btnStyle="btnSeeMoreGallery"
                    class="mt-5 mb-5">
                    ZOBACZ WIĘCEJ
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
            transition: '.3s'
        };

        const btnGalleryStylesHover = {

        }

        const btnSeeMoreGallery = {
            backgroundColor: '#A5927C',
            color: '#EEE5D3',
            cursor: 'pointer',
            height: '43px',
            width: '147px',
            borderRadius: '23px',
            textAlign: 'center',
            font: 'normal normal 600 13px/20px Poppins',
            letterSpacing: '0px',
            border: '2px solid #EEE5D3',
        };

        onMounted(() => {
            images.value = importMiniaturesImg();
            visibleImages.value = images.value.slice(0, visibleImageCount.value);
        });

        const visibleImages = ref([]);

        return {
            images,
            visibleImages,
            visibleImageCount,
            btnGalleryStyles,
            btnSeeMoreGallery,
            btnGalleryStylesHover
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
  