<template>
    <div class="gallery-section">
        <div class="row">
            <div class="col-12">
                <InfoButton :btnStyle="{ backgroundColor: '#EEE5D3', color: '#B6A38D' }" :hoverStyles="{ opacity: '.7' }" class="mt-5 mb-5">GALERIA PROJEKTÓW GRAFICZNYCH</InfoButton>
            </div>
        </div>
    </div>
</template>

<script>
import InfoButton from '../InfoButton.vue';

export default {
    name: "GallerySection",
    components: {
        InfoButton,
    }
}
</script>

<style scoped>
.gallery-section {
    background-color: #A5927C;
}
</style>