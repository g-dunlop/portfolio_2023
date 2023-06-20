<template>
    <div>
        <img :src=blog.thumbnail class="w-full opacity-60 hover:opacity-80 cursor-pointer max-h-30" @click="this.$router.push(`/blog/${blog.id}`)"/>
        <h2 class="font-bold text-xl py-2 cursor-pointer hover:text-blue-500" @click="this.$router.push(`/blog/${blog.id}`)">{{ blog.title }}</h2>
        <h3>{{ blog.tagline }}</h3>
        <p><small>CREATED: {{ date }}</small></p>
        <p v-for="tag in blog.tags" class="badge badge-primary hover:badge-accent cursor-pointer mr-2">{{ tag }}</p>
        <h3 class="font-bold text-sm py-2">By:  {{blog.user.username}} </h3>
       
    </div>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
    blog:Object
})

const date = computed(() => new Date(props.blog.created_at).toUTCString())
</script>

<style >

</style>