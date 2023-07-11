<script setup>
// import ProjectsList from '../components/projects/ProjectsList.vue';
import Hero from '../components/Hero.vue'
import { defineAsyncComponent } from 'vue'
const ProjectsList = defineAsyncComponent(() => 
import ('../components/projects/ProjectsList.vue'))

</script>

<template>
  <main>
    <Hero />
    
    <ProjectsList />
  </main>
</template>


<style scoped>

</style>
