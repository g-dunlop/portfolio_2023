<template>
    <div class="navbar  justify-between items-center">
        <div class="flex items-center">
            <RouterLink class="mr-4" to="/"><img src="../../assets/favicon.ico" @click="setActive('home')"></RouterLink>
            <h2 class=" transition-all ml-4 font-bold font-mono text-lg tracking-widest">graemedunlop.com</h2>
        </div>
        <nav class="w-5/10 hidden lg:flex justify-end">
            <RouterLink class="link" to="/about"  :class="{active:activeLink.about}" @click="setActive('about')">About</RouterLink>
        </nav>
        <RouterLink to="/login" class="btn">Login</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import {ref} from 'vue'

const activeLink = ref({
    about:false,
    home:true
})

const setActive = (name) => {
    for (const [key,value] of Object.entries(activeLink.value)){
        console.log(key)
        console.log(activeLink.value)
        activeLink.value[key] = false
        if(key===name){
            activeLink.value[name] = true
            console.log('match', name, activeLink.value[name])
        }
    }
}
</script>

<style scoped>
.link{
    text-decoration:none;
}
.link:hover{
    border-bottom:1px solid black;
    transition-property: border-bottom;
    transition-duration: 1500ms;
    transition-timing-function: linear;
}

.active{
    border-bottom:1px solid black !important;
}
</style>