<template>
    <div class="p-2">
        <p class="mb-2"><span v-if="reply">Replying</span><span v-else>Commenting</span>  as: <b>user</b></p>
        <textarea type="textarea" class="w-full  border-1 border-grey-300" />
        <button class="btn my-2" @click="toggleReply"> Submit</button>
    </div>
</template>

<script setup>
const props = defineProps({
    comments:{
        type:Array
    },
    reply: {
        type:Boolean,
        default:false
    }
})
</script>

<style >

</style>