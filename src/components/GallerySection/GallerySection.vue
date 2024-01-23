<template>
    <div class="gallery-section">
        <div class="row">
            <div class="col-12">
                <InfoButton class="mt-5 mb-5">GALERIA PROJEKTÓW GRAFICZNYCH</InfoButton>
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