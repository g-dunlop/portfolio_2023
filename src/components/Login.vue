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
        <button class="btn mt-8" @click="login()">
            <span v-if="!loading"> Login </span> 
            <span v-if="loading"><Loading :size="'10px'"/></span>
        </button>
    </div>
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue';
import {useUserStore} from '@/stores/user'
import Loading from './UI/Loading.vue'
import ErrorMessage from './UI/ErrorMessage.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useUserStore()

const props = defineProps({
    blogId:String
})

const email = ref('')
const password = ref('')
const loading = ref(false)
const error=ref('')

async function login () {
    loading.value = true
    if (!password.value || !email.value){
    error.value = 'Please make sure all fields are complete'
    loading.value = false
    return
    }
    console.log('welcome')
    const result = await store.login(email, password)
    console.log('Login.vue:', result)
    loading.value = false
    if (result.status === 200) {
        console.log('Logged in')
        if(props.blogId){
            router.push(`/blog/${props.blogId}`)
        }
    } 
    if (result.status !== 200) {
        console.log('Fail!')
        error.value = result.data
    }
//  await axios.post('.netlify/functions/login')
}
</script>

<style>

</style>