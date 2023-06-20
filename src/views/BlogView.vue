<template>
    <div class="w-full">
      
      <div class="flex mx-8 py-8 justify-between items-center">
        <ul class="flex flex-wrap">
          <li><h4 class="uppercase px-2">All Posts</h4></li>
          <li><h4 class="uppercase px-2">Coding</h4></li>
          <li><h4 class="uppercase px-2">Cycling</h4></li>
        </ul>
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
            class="absolute top-7 right-0 md:right-10 md:-top-1 input input-bordered input-sm" 
            type="text" 
            placeholder="Type your search item..."
            />
        </div>
        
      </div>
      <div class="w-full flex justify-center my-8" v-if="blogs.length === 0">
              <Loading />
          </div>
  <div class="w-full flex flex-col md:flex-row justify-start">
      <div class="w-9/9 md:w-6/9 flex flex-wrap p-4">
          
        <BlogList :blogs="blogs" />
      </div>
      <div v-if="blogs.length > 0" class="w-9/9 md:w-3/9 p-4 rounded-lg">
        <BlogEditorialList :blogs="blogs" />
      </div>
    </div>

    </div>
  </template>

  <script setup>
  import {ref, onMounted} from 'vue'
  import BlogList from '../components/blog/BlogList.vue'
  import BlogEditorialList from '../components/blog/BlogEditorialList.vue'
  import {useBlogStore} from '@/stores/blog'
  import Loading from '../components/UI/Loading.vue'

  const isSearch = ref(false)
  const toggleSearch = () => {
    isSearch.value = !isSearch.value
  }

  const store = useBlogStore()
  const blogs = ref([])
  async function fetch() {
  console.log('component fetch function')
  console.log(store)
  await store.fetchBlogs()
  blogs.value = store.blogs
}
onMounted(() => {
    fetch()
})
  </script>
  
  <style>
   
 
  </style>