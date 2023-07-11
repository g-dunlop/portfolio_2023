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

        <button class="btn mt-8" @click="register()">Register</button>
    </div>
</template>

<script setup>

import {ref} from 'vue'
import {useUserStore} from '@/stores/user'
const store = useUserStore()

const email = ref()
const password = ref()
const username = ref()

async function register () {
 console.log('welcome')
 const result = await store.register(username, email, password)
 console.log('Register.vue:', result)
 if (result.status === 200) {
    // redirect to login page
    console.log('registered!')
 } 
 if (result.status !== 200) {
    console.log('fail!')
 }
//  await axios.post('.netlify/functions/register')
}
</script>

<style>

</style>