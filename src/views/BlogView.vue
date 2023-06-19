<template>
    <div class="w-full">
      
      <div class="flex mx-8 justify-evenly items-center">
        <div class="relative">
          <p>
            <font-awesome-icon 
              icon="search" 
              class="cursor-pointer hover:text-blue-600"
              @click="toggleSearch"
              />
          </p>
          <input 
            v-if="isSearch" 
            class="absolute top-10 input input-bordered input-sm" 
            type="text" 
            placeholder="Type your search item..."
            />
        </div>
        <h1 class="header">Blog</h1>
        <p><font-awesome-icon icon="filter" /></p>
      </div>

      <BlogList />

    </div>
  </template>

  <script setup>
  import {ref} from 'vue'
  import BlogList from '../components/blog/BlogList.vue'

  const isSearch = ref(false)
  const toggleSearch = () => {
    isSearch.value = !isSearch.value
  }
  </script>
  
  <style>
   
 
  </style>