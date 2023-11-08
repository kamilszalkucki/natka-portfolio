<template>
    <div @mouseenter="startChangingImage" @mouseleave="stopChangingImage">
        <img :src="currentImage" alt="Zdjęcie" />
    </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Lista zdjęć do wyboru
const images = [
    'url_do_pierwszego_zdjecia.jpg',
    'url_do_drugiego_zdjecia.jpg',
    'url_do_trzeciego_zdjecia.jpg',
];

const currentImageIndex = ref(0);
const currentImage = ref(images[currentImageIndex.value]);

// Funkcja zmieniająca obraz po najechaniu myszką
const startChangingImage = () => {
    intervalId = setInterval(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
        currentImage.value = images[currentImageIndex.value];
    }, 1000); // Zmień co 1 sekundę
};

// Funkcja zatrzymująca zmianę obrazu po opuszczeniu myszki
const stopChangingImage = () => {
    clearInterval(intervalId);
};

let intervalId;

// Odpowiednie nasłuchiwanie zdarzeń
onMounted(() => {
    startChangingImage();
});

onBeforeUnmount(() => {
    clearInterval(intervalId);
});
</script>
  
<style scoped>
/* Dodaj stylizację, jeśli jest to konieczne */
</style>
  