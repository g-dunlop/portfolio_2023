<template>
    <div>
        <h1>Projects</h1>
       
            <div v-for="project in projects">
                <h1>{{ project.name }}</h1>
            
            </div>
       
    </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
const hasura = import.meta.env.VITE_X_HASURA_ADMIN_SECRET;
const apiUrl = import.meta.env.VITE_HASURA_ENDPOINT;

export default{
setup() {
let projects = ref()
async function fetch() {
    try {
        const result = await axios({
            method:"POST",
            url:apiUrl,
            headers:{
                "content-type":"application/json",
                "x-hasura-admin-secret":hasura
            },
            data:{
                query:`
                    query getAllProjects {
                        projects {
                            date
                            description_short
                            name
                            purpose
                            tools
                        }
                        }
                    `
            }
        })
        console.log(result.data.data.projects)
        this.projects = result.data.data.projects
    } catch (error) {
        console.error(error)
    }
}
return {
    projects, fetch
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