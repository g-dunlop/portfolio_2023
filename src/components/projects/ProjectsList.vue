<template>
    <!-- make card component -->
    <div>
            <div class="lg:flex flex-wrap w-100/100 justify-center  py-8 bg-slate-100 md:grid-cols-1 sm:grid-cols-1">
                <div v-for="project in projects" class="h-35rem card lg:w-30/100 md:w80/100 sm:w-80/100 mb-6  mx-6 bg-white shadow-2xl">
                    <figure class="w-10/10"><img class="w-10/10 h-15rem" :src="project.thumbnail_url" alt="car!"/></figure>
                    <div class="card-body bg-white rounded-xl h-20rem">
                        <div class="flex justify-between">
                            <h2 class="card-title">{{project.name}}</h2>
                            <span class="badge badge-lg text-xs bg-red-500">{{project.date}}</span>
                        </div>
                        <p class="font-extralight text-s h-50px">{{ project.description_short }}</p>
                        <ul class="h-50px">
                            <li class="text-xs tracking-widest badge bg-black m-1" v-for="tool in project.tools">{{ tool }}</li>
                        </ul>
                        <div class="card-actions justify-end mt-5">
                            <button class="btn btn-primary btn-sm" @click="navigate(project.id)">ReadMe!</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- use tiny slider for this? -->
            <!-- <div class="carousel w-5/10">
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
            </div> -->
       
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