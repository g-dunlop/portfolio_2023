<template>
    <!-- make card component -->
    <div>
            <!-- <div class="lg:flex flex-wrap w-100/100 justify-center  py-8 bg-slate-100">
                <div v-for="project in projects" class=" card card-compact lg:w-1/3 md:w90/100 sm:w-90/100 mb-6  mx-6 bg-white shadow-2xl">
                    <figure class="w-10/10 h-15rem"><img class="w-10/10 h-15rem" :src="project.thumbnail_url" alt="car!"/></figure>
                    <div class="card-body bg-white rounded-xl h-15rem">
                        <div class="flex justify-between">
                            <h2 class="card-title">{{project.name}}</h2>
                            <hr />
                            <span class="badge badge-lg text-xs bg-red-500">{{project.date}}</span>
                        </div>
                        <p class="font-extralight text-s h-50px">{{ project.description_short }}</p>
                        <ul class="h-50px">
                            <li class="text-xs tracking-widest badge bg-black m-1" v-for="tool in project.tools">{{ tool }}</li>
                        </ul>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm" @click="navigate(project.id)">ReadMe!</button>
                        </div>
                    </div>
                </div>
            </div> -->

            <!-- use tiny slider for this? -->
            <div class="h-screen pt-8 px-8">
                <h2 class="text-center font-bold text-3xl mb-4">Projects</h2>
            <div class="carousel w-10/10 " >
                <div :id="index+1" class="carousel-item w-full bg-gray-100 rounded-lg" v-for="project, index in projects">
                    <div class="flex flex-col lg:flex-row p-2 items-center">
                    <figure class="w-10/10 h-full rounded px-2 cursor-pointer" @click="navigate(project.id)"><img class="w-auto rounded" :src="project.thumbnail_url" alt="car!"/></figure>
                    <div class="w-10/10 lg:w-8/10 p-8 h-full bg-white rounded ">
                        <div class="flex justify-between">
                            <h2 class="card-title">{{project.name}}</h2>
                            <span class="badge badge-lg text-xs bg-red-500">{{project.date}}</span>
                        </div>
                        <p class="font-extralight text-s py-4">{{ project.description_short }}</p>
                        <ul class="py-4">
                            <li class="text-xs tracking-widest badge bg-black m-1" v-for="tool in project.tools">{{ tool }}</li>
                        </ul>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm" @click="navigate(project.id)">ReadMe!</button>
                        </div>
                    </div>
                </div>
                </div>
                
            </div> 
            <div class="flex justify-center w-10/10 py-4 gap-2">
                <a :href="`#${index+1}`" class="btn btn-xs hover:btn-accent active:" :class="[isActive[index+1] ? 'btn-accent': 'btn-neutral']" v-for="project, index in projects" @click="setActive(index+1)">{{index+1}}</a> 
            </div>
        </div>
    </div>
</template>

<script>

import { onMounted, ref, reactive, computed } from 'vue';
import {useProjectsStore} from '@/stores/projects'

export default{
setup() {
    const store = useProjectsStore()
    const isActive = reactive({
        1:true,
        2:false,
        3:false,
        4:false
    })
    // let projects = ref(store.projects)
    async function fetch() {
    console.log('component fetch function')
    console.log(store)
    store.fetchProjects()
}

    const setActive = (index) => {
        for (const [key, value] of Object.entries(isActive)) {
            key == index ? isActive[index] = true : isActive[key] = false
        }

    }
return {
    projects: computed(() => store.projects), fetch, isActive, setActive
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