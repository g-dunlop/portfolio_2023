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

        <button class="btn mt-8" @click="login()">Login</button>
    </div>
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue';
import {useUserStore} from '@/stores/user'
const store = useUserStore()

const email = ref()
const password = ref()

async function login () {
 console.log('welcome')
 const result = await store.login(email, password)
 console.log('Login.vue:', result)
 if (result.status === 200) {
    console.log('Logged in')
 } 
 if (result.status !== 200) {
    console.log('Fail!')
 }
//  await axios.post('.netlify/functions/login')
}
</script>

<style>

</style>