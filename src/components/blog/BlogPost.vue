<template>
    <div>
        <div v-if="!blog">
            <Loading />
        </div>
        <div v-if="blog">
            <h1>{{ blog.title }}</h1>
        
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