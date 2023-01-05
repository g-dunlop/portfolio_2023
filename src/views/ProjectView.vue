<script>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  import Loading from '../components/UI/Loading.vue'
  const hasura = import.meta.env.VITE_X_HASURA_ADMIN_SECRET;
  const apiUrl = import.meta.env.VITE_HASURA_ENDPOINT;
  
  export default{
components:{
  Loading,
},
  setup(){
    
    let project = ref()
    let loading = ref()
    async function fetch() {
      this.loading=true
    try {
      const result = await axios({
        method:"POST",
        url:apiUrl,
        headers:{
          "content-type": "application/json",
          "x-hasura-admin-secret": hasura
        },
        data: {
          query:`
            query getProject {
              projects(where: {id: {_eq: 3}}) {
                date
                description_short
                id
                name
                purpose
                repo_url
                tools
                read_me_html
                video_url
              }
            }

          `
        }
      })
      console.log(result)
      this.project = result.data.data.projects[0]
      this.loading = false
    } catch (error) {
      console.error(error)
    }
    
  }
    return {
    project, loading, fetch, Loading
  }
  },

  

  mounted() {
    this.fetch()
  }

  
}
</script>

<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
   

    <div v-if="project">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description_short }}</p>
      <p>{{project.purpose}}</p>
      <div class="w-5/10" v-html="project.read_me_html" ></div>
    </div>
  </div>
</template>
