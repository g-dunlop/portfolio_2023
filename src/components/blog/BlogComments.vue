<template>
    <div v-for="comment, index in comments" class="w-8/10">
        <div class="w-9/10 md:w-5/10 lg:3/10 mx-8 px-4 rounded-lg">
            <div class="chat chat-start">
                <div class="chat-header"><p class="font-semibold">{{ comment.author.username }}</p></div>
                <div class="chat-bubble chat-bubble-warning">{{ comment.comment }}</div>
                <div class="chat-footer opacity-50">{{ date(comment) }}</div>
            </div>
            <div v-for="reply in comment.replies" class="chat chat-end">
                <div class="chat-header"><p class="font-semibold">{{ reply.author.username }}</p></div>
                <div class="chat-bubble chat-bubble-error">{{ reply.comment}}</div>
                <div class="chat-footer opacity-50">{{ date(reply) }}</div>
            </div>
        </div>
        <button ref="" class="btn ml-8 my-8" @click="toggleReply(index)"><font-awesome-icon 
              icon="reply" 
              class="cursor-pointer hover:text-blue-600"
        /> &nbsp Reply</button>

        <div v-if="isReply && replyToShow === index">
            <div v-if="user.isLoggedIn" class="w-9/10 md:w-5/10 lg:3/10 mx-8 px-4 border-2 border-gray-100 rounded-lg mb-8" >
                <BlogCommentForm :reply="true" :comment="comment" :blogPostId="comment.blog_post_id"/>
            </div>
            <div v-if="!user.isLoggedIn">
                <p class="w-9/10 md:w-5/10 lg:3/10 mx-8 border-2 border-gray-100 rounded-lg mb-8">Please 
                    <router-link :to="`/login/${comment.blog_post_id}`" class="font-semibold">
                        log in
                    </router-link> 
                    to leave a reply</p>
            </div>
        </div>
        <hr class="border-1 mb-8" />
    </div>
    
</template>

<script setup>
import {computed, ref} from 'vue'
import BlogCommentForm from './BlogCommentForm.vue'
import {useUserStore} from '@/stores/user'

const props = defineProps({
    comments:Array
})

const userStore = useUserStore()
const isReply = ref(false)
const replyToShow = ref(null)
const date = (comment) => computed(() => new Date(comment.created_at).toUTCString())

const user = computed({
    get() {
        return userStore.user
    }
}) 

const toggleReply = (index) => {
    if (replyToShow.value === index){
        replyToShow.value = null
        isReply.value = !isReply.value
    } else if (replyToShow.value !== index) {
        replyToShow.value = index
        isReply.value = true
    }
    console.log(replyToShow.value)
    console.log(index)
    console.log(replyToShow.value === index)
    
}
</script>

<style >

</style>