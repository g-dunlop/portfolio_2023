<script>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  import Loading from '../components/UI/Loading.vue'
  import {useProjectsStore} from '@/stores/projects'
  import TractorFactor from '../components/projects/TractorFactor.vue'
  import StockTracker from '../components/projects/StockTracker.vue'
  import MemoryGame from '../components/projects/MemoryGame.vue'
  import VetManagement from '../components/projects/VetManagement.vue'

  const hasura = import.meta.env.VITE_X_HASURA_ADMIN_SECRET;
  const apiUrl = import.meta.env.VITE_HASURA_ENDPOINT;
  
  export default{
components:{
  Loading, TractorFactor, StockTracker, MemoryGame, VetManagement
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

 const handleImgClick = (url) => {
  console.log(url)
 }
    return {
    project, loading, fetch, Loading, handleImgClick
  }
  },


  mounted() {
    this.fetch()
  }

}
</script>

<template>
  <div>
    <div class="w-full flex justify-center" v-if="loading">
      <Loading />
    </div>
   
    <div v-if="project" class="flex w-10/10 justify-center py-8">
      <div class="w-8/10">
      <h1 class="header">PROJECT: {{ project.name }}</h1>
      <p class="p">{{ project.description_short }}</p>
      <p class="p">{{project.purpose}}</p>

      <!-- <client-only><div class="w-10/10" v-html="project.read_me_html" /></client-only> -->
      <div v-if="$route.params.id === '16'">
       <TractorFactor />
      </div>
      <div v-if="$route.params.id === '9'">
       <StockTracker />
      </div>
      <div v-if="$route.params.id === '18'">
       <MemoryGame />
      </div>
      <div v-if="$route.params.id === '19'">
       <VetManagement />
      </div>
      
      
    </div>
    </div>
  </div>
</template>

<style>
.header{
  font-weight:bold;
  font-size:3em;
}
.h2{
  font-weight:bold;
  margin-top:8px;
  font-size:2rem;
  /* font-weight:bold; */
}
.h4{
  font-weight:bold;
}
.p{
  margin-top:8px;
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

.section {
  margin-top:2rem;
}

.table {
  width:100%;
}
.tr {
  display:flex;
  justify-content:center;
}

.td {
  width:30%;
}

.img {
  width:100%;
  cursor: pointer;
}


</style>
