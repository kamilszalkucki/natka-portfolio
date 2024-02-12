<template>
    <div>
        <InfoButton :btnStyle="btnGalleryStyles" class="mt-5 mb-5">
            GALERIA PROJEKTÓW GRAFICZNYCH
        </InfoButton>
        <PortfolioGallery :visibleImages="images" />
    </div>
</template>
<script>
import { onMounted, ref } from 'vue';
import PortfolioGallery from '../components/PortfolioGallery.vue';
import InfoButton from '../components/InfoButton.vue';

export default {
    name: "PortfolioView",
    components: {
        PortfolioGallery,
        InfoButton,
    },
    setup() {
        const images = ref([]);

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

        onMounted(() => {
            images.value = importMiniaturesImg();
        });

        return {
            images,
            btnGalleryStyles
        }
    }
}
</script>
<style></style>