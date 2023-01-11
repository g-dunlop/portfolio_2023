<script>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  import Loading from '../components/UI/Loading.vue'
  import {useProjectsStore} from '@/stores/projects'
  const hasura = import.meta.env.VITE_X_HASURA_ADMIN_SECRET;
  const apiUrl = import.meta.env.VITE_HASURA_ENDPOINT;
  
  export default{
components:{
  Loading,
},
  setup(){
    //get project from store.  They are already loaded in
    let project = ref()
    let loading = ref()
    const store = useProjectsStore()
    async function fetch() {
      this.loading=true
    try {
    //   console.log(this.$route.params.id)
    //   const result = await(store.getProjectById(this.$route.params.id))
    //   console.log(result)
    //   this.project = result[0]
    // } catch (error) {
    //   console.error(error)
    // } 
    // this.loading = false

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
              projects(where: {id: {_eq: ${this.$route.params.id}}}) {
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
   

    <div v-if="project" class="flex w-10/10 justify-center">
      <div class="w-8/10">
      <h2 class="header">{{ project.name }}</h2>
      <p class="p">{{ project.description_short }}</p>
      <p class="p">{{project.purpose}}</p>
      <div class="w-10/10" v-html="project.read_me_html"></div>

    </div>
    </div>
  </div>
</template>

<style>
.header{
  font-weight:bold;
  font-size:2em;
}
.h2{
  font-weight:bold;
  margin:8px;
  /* font-weight:bold; */
}
.p{
  margin:8px;
}
.ul{
  margin-top:4px;
  padding-left:2em;
  list-style-type:circle;
}
.img{
  width:200px;
  height:130px;
}


</style>
