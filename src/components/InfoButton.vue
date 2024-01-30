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

</style>