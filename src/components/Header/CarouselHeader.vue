<template>
    <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="image in images" :key="image.interval" class="carousel-item" :class="image.path == 'header-image-1.jpg' ? 'active' : ''" :data-bs-interval="image.interval != '0' ? image.interval : false">
                    <img :src="require(`../../assets/img/${image.path}`)" class="d-block w-100 img-fluid" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
    </div>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    images: Object,
});

const { images } = toRefs(props);

console.log(images.value);
</script>

<style scoped>
img {
    max-height: 500px;
}
</style>