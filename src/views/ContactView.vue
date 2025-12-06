<template>
    <div class="flex justify-center ">
        <div class="bg-gray-100 w-full p-16 text-center rounded-xl flex flex-col items-center">
        <h2 class="font-bold"><span v-if="!isRegister">Contact me</span></h2>
        <p class="w-full text-sm mt-2">Send me a message and I'll get back to you!</p>
            <div class="flex flex-col w-10/10 md:w-6/10 items-center bg-white mt-8 rounded-lg">
                <Contact />
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'
import Contact from '../components/Forms/Contact.vue'
const route = useRoute()

const isRegister = ref(false)
const blogId = ref(null)
const toggleRegister = () => {
    isRegister.value=!isRegister.value
}

onMounted(() => {
    if (route.params.id) {
        blogId.value = route.params.id
    }
})

</script>

<style >

</style>