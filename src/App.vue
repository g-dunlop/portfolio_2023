<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/UI/Header.vue'
import Footer from './components/UI/Footer.vue'

</script>

<template>
  <Header  />
  <hr class="border-1 border-red-800"/>
  <div class="min-h-screen">
    <RouterView />
  </div>
  
  <Footer />

</template>

<style scoped>

</style>
