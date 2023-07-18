<template>
    <div class="p-2">
        <p class="mb-2"><span v-if="reply">Replying</span><span v-else>Commenting</span>  as: <b>{{user.username}}</b></p>
        <textarea type="textarea" v-model="commentBody" class="w-full  border-1 border-grey-300 px-2" />
        <button class="btn my-2" @click="submitComment()"> Submit</button>
    </div>
</template>

<script setup>
import axios from 'axios';
const apiUrl = import.meta.env.VITE_HASURA_ENDPOINT;
import {ref, computed, reactive, defineEmits} from 'vue'
import {useUserStore} from '@/stores/user'
import {useBlogStore} from '@/stores/blog'
const userStore = useUserStore()
const blogStore = useBlogStore()

const user = computed({
    get() {
        return userStore.user
    }
}) 
const props = defineProps({
    comment:{
        type:Object
    },
    reply: {
        type:Boolean,
        default:false
    },
    blogPostId: {
        type: Number,
        default:null
    }
})
const commentBody = ref('')

async function submitComment(){
    let newComment = reactive({})
    if (props.reply) {
        newComment = {
            comment:commentBody.value,
            blog_post_id:props.comment.blog_post_id,
            comment_repliedto_id:props.comment.id,
            author_id:user.value.id
        }
    }
    if (!props.reply) {
        newComment = {
            comment:commentBody.value,
            blog_post_id:props.blogPostId,
            author_id:user.value.id,
            comment_repliedto_id:null,
        }
    }
    const result = await axios({
        method:"POST",
        url:apiUrl,
        headers:{
          "content-type": "application/json",
          "Authorization": `Bearer ${user.value.jwt}`
        },
        data: {
          query:`
          mutation MyMutation {
            insert_blog_comments(objects: {comment:"${newComment.comment}", blog_post_id:${newComment.blog_post_id}, author_id: ${newComment.author_id}, comment_repliedto_id:${newComment.comment_repliedto_id} }  ) {
                affected_rows
                }
            }
          `
        }
      })
      
      console.log('post comment:', result)
      await blogStore.getBlogById(props.blogPostId)
      //need to emit toggle comment or toggle reply

}
</script>

<style >

</style>