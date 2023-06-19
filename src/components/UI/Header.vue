<template>
    <div class="navbar  justify-between items-center">
        <div class="flex items-center">
            <RouterLink class="mr-4" to="/"><img src="/logo/favicon-32x32.png" @click="setActive('home')"></RouterLink>
            <h2 class=" transition-all ml-4 font-bold font-mono text-lg tracking-widest">graemedunlop.com</h2>
        </div>
        <nav class="w-7/10 hidden md:flex lg:flex justify-end">
            <RouterLink class="link mx-2" to="/cv" :class="{active:activeLink.cv}" @click="setActive('cv')">CV</RouterLink>
            <RouterLink class="link mx-2" to="/about"  :class="{active:activeLink.about}" @click="setActive('about')">About</RouterLink>
            <RouterLink class="link mx-2" to="/blog"  :class="{active:activeLink.blog}" @click="setActive('blog')">Blog</RouterLink>
        </nav>

        <nav class="lg:hidden md:hidden sm:flex">
            <div class="dropdown">
                <!-- <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label> -->
                <label class="btn btn-circle btn-sm swap swap-rotate">
  
                <!--this hidden checkbox controls the state -->
                <input type="checkbox" :checked="checked" @click="setChecked" />
            
                <!-- hamburger icon -->
                <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            
                <!-- close icon -->
                <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
                </label>
                
            </div>
        </nav>
        <RouterLink to="/login" class="btn btn-sm lg:flex md:flex hidden">Login</RouterLink>
    </div>
    <ul tabindex="0" v-if="checked" class="absolute right-0 top-13 mt-3 p-2 shadow bg-base-100 w-10/10 text-center">
        <RouterLink to="/" class="w-10/10 hover:bg-neutral hover:text-white" ><li class="w-10/10 hover:bg-neutral hover:text-white cursor-pointer" @click="setActive('home')">HomePage</li></RouterLink>
        <RouterLink to="/cv" ><li class="w-10/10 hover:bg-neutral hover:text-white cursor-pointer" @click="setActive('cv')">CV</li></RouterLink>
        <RouterLink to="/about" ><li class="w-10/10 hover:bg-neutral hover:text-white cursor-pointer" @click="setActive('about')">About</li></RouterLink>
        <RouterLink to="/blog" ><li class="w-10/10 hover:bg-neutral hover:text-white cursor-pointer" @click="setActive('blog')">Blog</li></RouterLink>
    </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import {ref} from 'vue'

const activeLink = ref({
    about:false,
    cv:false,
    home:true,
    blog:false
})
const checked = ref(false)
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
    checked.value = false
}
const setChecked = () => {
    checked.value = !checked.value
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