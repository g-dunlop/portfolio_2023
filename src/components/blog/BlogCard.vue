<template>
    <div>
        <img :src=blog.thumbnail class="w-full opacity-60 hover:opacity-80 cursor-pointer max-h-30"/>
        <h2 class="font-bold text-xl py-2 cursor-pointer hover:text-blue-500">{{ blog.title }}</h2>
        <h3>{{ blog.tagline }}</h3>
        <p><small>CREATED: {{ blog.created_at }}</small></p>
        <p v-for="tag in blog.tags" class="badge badge-primary hover:badge-accent cursor-pointer mr-2">{{ tag }}</p>
        <h3 class="font-bold text-sm py-2">By:  {{blog.user.username}} </h3>
        <!-- <p v-html="blog.content" /> -->
        
        <!-- <small>{{blog.updated_at}}</small> -->
       
    </div>
</template>

<script setup>

const props = defineProps({
    blog:Object
})
</script>

<style >

</style>