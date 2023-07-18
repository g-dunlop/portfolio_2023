<template>
    <div class="flex justify-center mt-16">
        <div class="bg-gray-100 p-12 text-center rounded-xl">
        <h2 class="text-center font-bold"><span v-if="!isRegister">Login</span><span v-else>Register</span> </h2>
            <div v-if="!isRegister">
                <Login :blogId="blogId" />
                <p class="w-full text-right text-sm mt-2 cursor-pointer hover:font-semibold hover:underline" @click="toggleRegister">Don't have an account?</p>
            </div>
            <div v-if="isRegister">
                <Register />
                <p class="w-full text-right text-sm mt-2 cursor-pointer hover:font-semibold hover:underline" @click="toggleRegister">Already have an account?</p>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import {ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'

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