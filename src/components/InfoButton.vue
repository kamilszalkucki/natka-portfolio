<template>
    <button :class="btnClass" class="text-center" :style="btnStyle">
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: "InfoButton",
    props: {
        btnClass: {
            type: String,
        },
        btnStyle: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style scoped>
button {
    width: 274px;
    height: 88px;
    border-radius: 50px;
    background-color: #EEE5D3;
    text-align: center;
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    color: #B6A38D;
    border: none;
}
</style>