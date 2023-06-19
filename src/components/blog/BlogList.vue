<template>
    <div class="w-full flex flex-col md:flex-row justify-start">
    <div class="w-9/9 md:w-6/9 flex flex-wrap p-8">
        <div v-if="blogs.length === 0">
            <Loading />
        </div>
        <div v-for="blog, index in blogs" class="p-4" :class="[index % 2 === 1 ? 'w-9/9 md:w-4/8': 'w-9/9 md:w-2/8']" >
            <BlogCard :blog="blog" />
        </div>
    </div>
    </div>
</template>

<script setup>
import BlogCard from './BlogCard.vue'
import {ref, onMounted} from 'vue'
import {useBlogStore} from '@/stores/blog'
import Loading from '../UI/Loading.vue'
// fetch blog posts here
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

<style >

</style>