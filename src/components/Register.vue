<template>
    <div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Your Email</span>
            </label>
            <label class="input-group">
                <span class="w-3/10">Email</span>
                <input 
                    type="email"
                    placeholder="info@site.com"
                    class="input input-bordered"
                    v-model="email"
                />
            </label>
        </div>

        <div class="form-control">
            <label class="label">
                <span class="label-text">Your Username</span>
            </label>
            <label class="input-group">
                <span class="w-3/10">Username</span>
                <input 
                    type="text"
                    placeholder="choose a username"
                    class="input input-bordered"
                    v-model="username"
                />
            </label>
        </div>

        <div class="form-control">
            <label class="label">
                <span class="label-text">Your Password</span>
            </label>
            <label class="input-group">
                <span>Password</span>
                <input 
                    type="password"
                    placeholder="*******"
                    class="input input-bordered"
                    v-model="password"
                />
            </label>
        </div>
        <ErrorMessage v-if="error" :error="error" />
        <button class="btn mt-8" @click="register()">
            <span v-if="!loading">Register</span>
            <span v-if="loading"><Loading :size="'10px'"/></span>
        </button>
    </div>
</template>

<script setup>

import {ref} from 'vue'
import {useUserStore} from '@/stores/user'
import ErrorMessage from './UI/ErrorMessage.vue'
import Loading from './UI/Loading.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useUserStore()

const email = ref('')
const password = ref('')
const username = ref('')
const error=ref('')
const loading = ref(false)

const props = defineProps({
    blogId:String
})


async function register () {
loading.value = true
if (!password.value || !username.value || !email.value){
    error.value = 'Please make sure all fields are complete'
    loading.value = false
    return
}
 console.log('welcome')
 const result = await store.register(username, email, password)
 console.log('Register.vue:', result)
 if (result.status === 200) {
    // redirect to login page
    console.log('registered!')
    if(props.blogId){
        router.push(`/login/${props.blogId}`)
    } else{
        router.push('/login')
    }
    
 } 
 if (result.status !== 200) {
    console.log('fail!')
    error.value = result.data
 }
//  await axios.post('.netlify/functions/register')
loading.value = false
}
</script>

<style>

</style>