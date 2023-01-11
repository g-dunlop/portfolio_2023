import {defineStore} from 'pinia';
import {ref} from 'vue';
const hasura = import.meta.env.VITE_X_HASURA_ADMIN_SECRET;
const apiUrl = import.meta.env.VITE_HASURA_ENDPOINT;
import axios from 'axios';

export const useProjectsStore = defineStore('projects', () => {
    // other options...
    const projects = ref([])

    async function getProjectById (id) {
        console.log('getProjectsById', id)
        const project =  this.projects.filter(project => project.id == id)
        console.log(project)
        return project
    }

    async function fetchProjects () {
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
                                id
                                date
                                description_short
                                name
                                purpose
                                tools
                                thumbnail_url
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

    return {projects, fetchProjects, getProjectById}
  })