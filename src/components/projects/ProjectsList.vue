<template>
    <div>
        <h1>Projects</h1>
       
            <div v-for="project in projects">
                <h1>{{ project.name }}</h1>
            
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
    projects: computed(() => store.projects), fetch
}
},
mounted() {
    this.fetch()
}
}
</script>

<style>

</style>
<!-- need to put this fetch in pinia -->