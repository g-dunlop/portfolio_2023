<template>
    <div class="navbar flex justify-between items-center">
        <div class="flex items-center">
            <img src="../../assets/favicon.ico">
            <h2 class=" transition-all ml-4 font-bold font-mono text-lg tracking-widest">graemedunlop.com</h2>
        </div>
        <nav class="w-5/10 flex justify-evenly">
        <RouterLink to="/">Home</RouterLink> 
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>

</style>