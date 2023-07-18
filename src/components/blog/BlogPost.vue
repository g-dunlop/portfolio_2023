<template>
    <div>
        <div v-if="!blog" class="flex justify-center pt-8">
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

            <hr class="border-1 border-gray-200" />
            <div >
                <h2 class="text-2xl font-semibold mb-2 p-8">Comments</h2>
                <!-- <hr class="border-1 mb-8" /> -->
                <div v-if="blog.comments.length > 0">
                    <BlogComments :comments="blog.comments" />
                </div>
                <div v-if="blog.comments.length === 0" class="pl-8 pb-8">
                    Be the first to comment
                </div>
                <button class="btn ml-8 mb-8" @click="toggleComment">Leave a Comment</button>
                
                <div v-if="isComment && user.isLoggedIn" class="w-9/10 md:w-5/10 lg:3/10 mx-8 px-4 border-2 border-gray-100 rounded-lg mb-8" >
                    <BlogCommentForm :blogPostId="blog.id" />
                </div>
                <div v-if="isComment && !user.isLoggedIn">
                    <p class="w-9/10 md:w-5/10 lg:3/10 mx-8 border-2 border-gray-100 rounded-lg mb-8">
                        Please 
                        <router-link :to="`/login/${blog.id}`" class="font-semibold">
                            log in
                        </router-link> to leave a comment</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref, computed, onMounted} from 'vue'
import {useBlogStore} from '@/stores/blog'
import {useUserStore} from '@/stores/user'
import { useRoute } from 'vue-router'
import Loading from '../UI/Loading.vue'
import BlogComments from './BlogComments.vue'
import BlogCommentForm from './BlogCommentForm.vue'

const store = useBlogStore()
const userStore = useUserStore()
const route = useRoute()
// const blog = ref()
const isComment = ref(false)


const user = computed({
    get() {
        return userStore.user
    }
}) 

const blog = computed({
    get() {
        return store.blog
    }
})

async function fetch() {
    console.log('component fetch function')
    console.log(store)
    await store.getBlogById(route.params.id)
    // blog.value = store.blog
}
const toggleComment = () => {
    isComment.value = !isComment.value
}

onMounted(() => {
    fetch()
})
</script>

<style>

</style>