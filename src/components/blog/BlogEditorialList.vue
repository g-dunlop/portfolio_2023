<template>
    <div>
        <div class="bg-red-500 p-2  w-6/9">
            <h2 class="text-white font-bold tracking-wider">Recent Posts</h2>
        </div>
        <div v-for="blog in blogs" class="w-8/9 bg-gray-100 mt-4 p-2 cursor-pointer" @click="this.$router.push(`/blog/${blog.id}`)">
            <h3 class="font-semibold">{{ blog.title }}</h3>
            <small v-for="tag in blog.tags" class="pr-2">{{ tag }}</small>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        blogs:Array
    })
</script>

<style>

</style>