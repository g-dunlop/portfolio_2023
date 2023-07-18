import {defineStore} from 'pinia';
import {ref, reactive} from 'vue';
const hasura = import.meta.env.VITE_X_HASURA_ADMIN_SECRET;
const apiUrl = import.meta.env.VITE_HASURA_ENDPOINT;
import axios from 'axios';

export const useUserStore = defineStore('user', () => {

    const user = reactive({
        id:'',
        username:'',
        jwt:'',
        role:'',
        first_name:'',
        last_name:'',
        isLoggedIn:false    })

    async function register (username, email, password) {
        try {
            const usernameTrim = username.value.trim().toLowerCase()
            const emailTrim = email.value.trim().toLowerCase()
            const result = await axios.post('/.netlify/functions/register', {
                username: usernameTrim, email: emailTrim, password: password.value
            })
            console.log('user.js:', result)
            return result
        }
        catch (error) {
            console.log(error);
            return error.response
        }
    }

    async function login (email, password) {
        try {
            const emailTrim = email.value.trim().toLowerCase()
            const result = await axios.post('/.netlify/functions/login', {
                email: emailTrim, password: password.value
            })
            console.log('user.js:', result)
            setUser(result.data.user)

            return result
        }
        catch (error) {
            console.log(error);
            return error.response
        }
    }

    function setUser(userr) {
        user.id = userr.id
        user.username = userr.username
        user.jwt = userr.token
        user.email = userr.email
        user.role = userr.role
        user.isLoggedIn = true
    }

    function logOut() {
        user.id='',
        user.username='',
        user.jwt='',
        user.role='',
        user.first_name='',
        user.last_name='',
        user.isLoggedIn=false  
    }

    return {user, register, login, logOut}

})