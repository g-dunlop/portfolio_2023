<template>
    <div v-for="comment in comments" class="w-10/10">
        <div class="w-9/10 md:w-5/10 lg:3/10 mx-8 px-4 bg-gray-100 rounded-lg">
            <div class="chat chat-start">
                <div class="chat-header"><p class="font-semibold">{{ comment.author.username }}</p></div>
                <div class="chat-bubble chat-bubble-warning">{{ comment.comment }}</div>
                <div class="chat-footer opacity-50">{{ date(comment) }}</div>
            </div>
            <div v-for="reply in comment.replies" class="chat chat-end">
                <div class="chat-header"><p class="font-semibold">{{ reply.author.username }}</p></div>
                <div class="chat-bubble chat-bubble-error">{{ reply.comment }}</div>
                <div class="chat-footer opacity-50">{{ date(reply) }}</div>
            </div>
        </div>
        <button class="btn ml-8 my-8" @click="toggleReply"><font-awesome-icon 
              icon="reply" 
              class="cursor-pointer hover:text-blue-600"
        /> &nbsp Reply</button>

        <div v-if="isReply" class="w-9/10 md:w-5/10 lg:3/10 mx-8 px-4 border-2 border-gray-100 rounded-lg mb-8" >
            <BlogCommentForm :reply="true"/>
        </div>
        
    </div>
    <hr class="border-1 mb-8" />
</template>

<script setup>
import {computed, ref} from 'vue'
import BlogCommentForm from './BlogCommentForm.vue'
const props = defineProps({
    comments:Array
})


const isReply = ref(false)
const date = (comment) => computed(() => new Date(comment.created_at).toUTCString())


const toggleReply = () => {
    isReply.value = !isReply.value
}
</script>

<style >

</style>