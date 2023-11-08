<template>
    <div>
        <div class="d-flex flex-column w-100">
            <CarouselHeader :images = "images" />
        </div>
    </div>
</template>

<script setup>
import CarouselHeader from './CarouselHeader.vue';

const images = [
    {
        "path": 'header-image-1.jpg',
        "interval": '5000',
    },
    {
        "path": 'header-image-2.jpg',
        "interval": '3000'
    },
    {
        "path": 'header-image-3.jpg',
        "interval": '0'
    }
];
</script>

<style scoped></style>