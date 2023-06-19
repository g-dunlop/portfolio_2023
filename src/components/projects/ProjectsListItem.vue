<template>
    <div :id="index+1" class="carousel-item w-full bg-gray-300 rounded-lg" v-for="project, index in projects">
        <div class="w-full flex flex-col lg:flex-row p-2 items-center">
            <figure class="w-10/10 h-full rounded cursor-pointer">
                <iframe class="w-full h-80"  :src="project.video_url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
            </figure>
            <div class="w-10/10 lg:w-8/10 p-8 h-full bg-white rounded ">
                <div class="flex justify-between">
                    <h2 class="card-title">{{project.name}}</h2>
                    <span class="badge badge-lg border-0 text-sm bg-red-600">{{project.date}}</span>
                </div>
                <p class="font-extralight text-s py-4">{{ project.description_short }}</p>
                <ul class="py-4">
                    <li class="text-xs tracking-widest badge border-0 bg-stone-800 m-1" v-for="tool in project.tools"><p class="">{{ tool }}</p></li>
                </ul>
                <div class="card-actions justify-end pt-8">
                    <button class="btn btn-sm" @click="navigate(project.id)">ReadMe!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        projects: Array,
    },
    setup (props) {
        return {props}
    },
    methods:{
    navigate (id) {
        console.log(id)
        this.$router.push(`/projects/${id}`)
    }
}
}
</script>

<style >

</style>