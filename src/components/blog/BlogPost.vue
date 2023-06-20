<template>
    <div>
        <div v-if="!blog">
            <Loading />
        </div>
        <div v-if="blog" class="w-full">
            <div 
                :style="[`background-image: url(${blog.thumbnail});`, 'background-repeat: no-repeat;', 'background-size: 100% 100%;']"
                class="h-100 relative flex justify-center"
            >
            <h1 class="text-white absolute top-30 text-4xl">{{ blog.title }}</h1>
        </div>
        <div v-html="blog.content" class="p-12" />

        <div v-if="blog.comments.length > 0">
        Comments</div>

        </div>
    </div>
</template>

<script setup>

import {ref, onMounted} from 'vue'
import {useBlogStore} from '@/stores/blog'
import { useRoute } from 'vue-router'
import Loading from '../UI/Loading.vue'
const store = useBlogStore()
const route = useRoute()
const blog = ref()
async function fetch() {
    //get the post
    console.log('component fetch function')
    console.log(store)
    await store.getBlogById(route.params.id)
    blog.value = store.blog
}

onMounted(() => {
    fetch()
})
</script>

<style>

</style>