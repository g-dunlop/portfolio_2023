<template>
     <div class="py-8 w-9/10">
        <div class="form-control flex flex-col items-center">
            <label class="input-group justify-center mb-6">
                <span class="w-3/10 font-bold">Subject</span>
                <input 
                    type="text"
                    placeholder="Interesting Job Offer"
                    class="input input-bordered w-7/10"
                    v-model="message.subject"
                />
            </label>
        </div>
        <div class="form-control flex flex-col items-center">
            <label class="input-group justify-center mb-6">
                <span class="w-3/10 font-bold">Name</span>
                <input 
                    type="text"
                    placeholder="Joe Bloggs"
                    class="input input-bordered w-7/10"
                    v-model="message.name"
                />
            </label>
        </div>
        <div class="form-control flex flex-col items-center">
            <label class="input-group justify-center mb-6">
                <span class="w-3/10 font-bold">Email</span>
                <input 
                    type="email"
                    placeholder="joe.bloggs@gmail.com"
                    class="input input-bordered w-7/10"
                    v-model="message.email"
                />
            </label>
        </div>
        <div class="form-control flex flex-col items-center">
            <label class="input-group justify-center">
                <span class="w-3/10 font-bold">Message</span>
                <textarea 
                    type="textarea"
                    placeholder="Your message"
                    class="input input-bordered w-7/10 h-25"
                    v-model="message.message"
                />
            </label>
        </div>

        
        <ErrorMessage v-if="error" :error="error" />
        <SuccessMessage v-if="success" :message="'Your contact form has been sent!'" />
        <button class="btn mt-8" @click="contact()">
            <span v-if="!loading"> Contact </span> 
            <span v-if="loading"><Loading :size="'10px'"/></span>
        </button>
    </div>
</template>

<script setup>
import axios from 'axios';
import {ref, reactive} from 'vue';
import {useUserStore} from '@/stores/user'
import Loading from '../UI/Loading.vue'
import ErrorMessage from '../UI/ErrorMessage.vue'
import SuccessMessage from '../UI/SuccessMessage.vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const error=ref('')
const success=ref(false)
const message = reactive({
    subject: '',
    name: '',
    email: '',
    message: ''
})

async function contact () {
    
    loading.value = true
    console.log('Sending message from contact form: ', message)
    // Have a contact netlify function that links to emailJS
    if(!message.subject || !message.name || !message.email || !message.message) {
        error.value = 'Please make sure all fields are complete'
        loading.value = false
        return
    }
    const emailTrim = message.email.trim().toLowerCase()
    try {
    const result = await axios.post('/.netlify/functions/contact', {
        title: message.subject,
        name: message.name,
        email: emailTrim,
        message: message.message
    }).catch(e => {
        error.value = e.response.data
        console.error(e)})
    console.log('netlify function response:', result)
    if (result.statusText) {
        success.value = true
        error.value = ''
        console.log('Email sent successfully')
    } 
    else {
        console.log('Fail!')
        error.value = 'There was a problem submitting your form'
    }
    loading.value = false
}
catch (error) {
            console.log(error);
            error.value = error.response
            // return error.response
            loading.value = false
        }
    
    // Keep it simple - just enough to send the emails

}


</script>

<style scoped>

</style>