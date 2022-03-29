<script setup>
import { onMounted, ref } from 'vue'
import TheTopBar from '@/components/TheTopBar.vue'

let title = ref(null)

onMounted(() => {
    console.log('get item info from db...')
    // if no values, redirect to 404
    title.value = 'Todo Title'
})
</script>

<template>
    <TheTopBar />
</template>

<style scoped lang="scss">

</style>