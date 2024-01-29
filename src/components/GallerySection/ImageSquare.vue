<template>
    <div class="image-container">
        <a href="#"><img :src="image" class="img-fluid" @mouseover="isHovered = true" @mouseleave="isHovered = false"
                alt="image">
            <h5 v-show="isHovered" class="overlay-text" @mouseover="isHovered = true">
                <slot></slot>
            </h5>
        </a>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    name: "ImageSquare",
    components: {},
    props: {
        image: {
            type: String,
            default: null,
        }
    },
    setup() {
        const isHovered = ref(false);

        return {
            isHovered
        }
    }
}
</script>
<style scoped>
img {
    width: 349px;
    height: 262px;
    border-radius: 24px;
    transition: .3s;
}

img:hover, .overlay-text:hover + a img {
    cursor: pointer;
    transform: scale(1.02);
    opacity: 0.7;
}

.image-container {
    position: relative;
}

.overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    transition: 0.7s;
    opacity: 1;
}

.image-container:hover img {
  cursor: pointer;
  opacity: 0.7;
}

</style>