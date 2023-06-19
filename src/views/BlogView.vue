<template>
    <div class="w-full">
      
      <div class="flex mx-8 justify-evenly items-center">
        <p><font-awesome-icon icon="search" /></p>
        <h1 class="header">Blog</h1>
        <p><font-awesome-icon icon="filter" /></p>
      </div>

      <BlogList />

    </div>
  </template>

  <script setup>
  import BlogList from '../components/blog/BlogList.vue'

  </script>
  
  <style>
   
 
  </style>