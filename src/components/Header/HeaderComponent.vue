<template>
    <div>
        <div class="d-flex flex-column w-100">
            <SideLeft />
        </div>
    </div>
</template>

<script>
import SideLeft from './SideLeft';
export default {
    name: 'HeaderComponent',
    components: {
        SideLeft
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped></style>