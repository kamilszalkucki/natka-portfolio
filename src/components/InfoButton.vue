<template>
    <button class="text-center" @mouseover="isHovered = true" @mouseleave="isHovered = false"
        :style="styles">
        <slot></slot>
    </button>
</template>

<script>
import { ref, computed } from 'vue';
export default {
    name: "InfoButton",
    props: {
        btnStyle: {
            type: Object,
            default: () => ({})
        },
        hoverStyles: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {
        const isHovered = ref(false);
        const mergedStyles = computed(() => {
            return isHovered.value ? { ...props.btnStyle, ...props.hoverStyles } : props.btnStyle;
        });

        return {
            isHovered,
            styles: mergedStyles,
        }
    }
}
</script>

<style scoped>
button {
    width: 274px;
    height: 88px;
    border-radius: 50px;
    /* background-color: #EEE5D3; */
    text-align: center;
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    /* color: #B6A38D; */
    border: none;
}
</style>