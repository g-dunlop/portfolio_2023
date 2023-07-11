<template>
    
        <div v-for="blog, index in blogs" class="px-4" :class="[index % 2 === 1 ? 'w-9/9 md:w-4/8': 'w-9/9 md:w-2/8']" >
            <BlogCard :blog="blog" />
        </div>
 
</template>

<script setup>
import BlogCard from './BlogCard.vue'
const props = defineProps({
    blogs: Array
})


</script>

<style >

</style>