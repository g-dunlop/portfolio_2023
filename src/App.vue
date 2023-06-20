<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/UI/Header.vue'
import Footer from './components/UI/Footer.vue'

</script>

<template>
  <Header  />
  <hr class="border-1  border-gray-800"/>
  
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
