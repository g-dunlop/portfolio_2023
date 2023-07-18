<template>
    <div>
        <p class="text-sm text-red-500 mt-2">{{ error }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    error:String
})
</script>

<style lang="scss" scoped>

</style>