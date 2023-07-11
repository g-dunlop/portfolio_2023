<template>
    <div>
        <!-- <PulseLoader /> -->
        <GridLoader :color="'red'"  />
    </div>
</template>

<script setup>
// import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import GridLoader from 'vue-spinner/src/GridLoader.vue'
</script>

<style>

</style>

<!-- <grid-loader :loading="loading" :color="color" :size="size"></grid-loader>
<clip-loader :loading="loading" :color="color" :size="size"></clip-loader>
<rise-loader :loading="loading" :color="color" :size="size"></rise-loader>
<beat-loader :loading="loading" :color="color" :size="size"></beat-loader>
<sync-loader :loading="loading" :color="color" :size="size"></sync-loader>
<rotate-loader :loading="loading" :color="color" :size="size"></rotate-loader>
<fade-loader :loading="loading" :color="color" :height="height" :width="width"></fade-loader>
<pacman-loader :loading="loading" :color="color" :size="size"></pacman-loader>
<square-loader :loading="loading" :color="color" :size="size"></square-loader>
<scale-loader :loading="loading" :color="color" :height="height" :width="width"></scale-loader>
<skew-loader :loading="loading" :color="color" :size="size"></skew-loader>
<moon-loader :loading="loading" :color="color" :size="size"></moon-loader>
<ring-loader :loading="loading" :color="color" :size="size"></ring-loader>
<bounce-loader :loading="loading" :color="color" :size="size"></bounce-loader>          
<dot-loader :loading="loading" :color="color" :size="size"></dot-loader> -->