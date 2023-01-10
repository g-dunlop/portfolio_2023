<template>
    <div>
        <h1>Projects</h1>
            <!-- <div v-for="project in projects">
                <h1>{{ project.name }}</h1>
            </div> -->

            <div class="lg:flex w-100/100 justify-center py-8 bg-rose-700 md:grid-cols-1 sm:grid-cols-1">
                <div v-for="project in projects" class=" card lg:w-30/100 md:w80/100 sm:w-80/100 mx-6 bg-white border-gray-500">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="car!"/></figure>
                    <div class="card-body bg-white rounded-xl">
                        <div class="flex justify-between">
                            <h2 class="card-title">{{project.name}}</h2>
                            <span class="badge badge-lg text-xs bg-emerald-800">{{project.date}}</span>
                        </div>
                        <p class="font-extralight">{{ project.description_short }}</p>
                        <ul class="">
                            <li class="text-xs tracking-widest badge bg-red-500 ml-2" v-for="tool in project.tools">{{ tool }}</li>
                        </ul>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary" @click="navigate(project.id)">ReadMe!</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- use tiny slider for this? -->
            <div class="carousel w-5/10">
                    <div id="item1" class="carousel-item w-full">
                        <img src="https://placeimg.com/800/200/arch" class="w-full" />
                    </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" class="w-full" />
                </div>
            </div> 
            <div class="flex justify-center w-5/10 py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a> 
                <a href="#item2" class="btn btn-xs">2</a> 
                <a href="#item3" class="btn btn-xs">3</a> 
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
       
    </div>
</template>

<script>

import { onMounted, ref, computed } from 'vue';
import {useProjectsStore} from '@/stores/projects'

export default{
setup() {
    const store = useProjectsStore()
    // let projects = ref(store.projects)
    async function fetch() {
    console.log('component fetch function')
    store.fetchProjects()
    
    
    
}
return {
    projects: computed(() => store.projects), fetch,
}
},
mounted() {
    this.fetch()
},
methods:{
    navigate (id) {
        console.log(id)
        this.$router.push(`/projects/${id}`)
    }
}
}
</script>

<style>

</style>
<!-- need to put this fetch in pinia -->