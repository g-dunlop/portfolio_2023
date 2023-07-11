<template>
    <!-- make card component -->
    <div>
        <div class="py-16 px-8">
            <h2 class="text-center font-bold text-3xl mb-4">Projects</h2>
            <div class="w-full flex justify-center" v-if="projects.length < 1">
                <Loading />
            </div>
            <div class="carousel w-10/10 " v-if="projects.length > 1" >
                <ProjectsListItem :projects="projects" />
            </div> 
            <div class="flex justify-center w-10/10 py-4 gap-2">
                <a :href="`#${index+1}`" class="btn btn-xs hover:btn-accent active:" :class="[isActive[index+1] ? 'btn-accent': 'btn-neutral']" v-for="project, index in projects" @click="setActive(index+1)">{{index+1}}</a> 
            </div>
        </div>
    </div>
</template>

<script>

import { onMounted, ref, reactive, computed, defineAsyncComponent } from 'vue';
import {useProjectsStore} from '@/stores/projects'
import Loading from '../UI/Loading.vue'
const ProjectsListItem = defineAsyncComponent(() => 
import ('./ProjectsListItem.vue'))


export default{
    components:{
        Loading, ProjectsListItem
    },
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
    projects: computed(() => store.projects), fetch, isActive, setActive, Loading
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