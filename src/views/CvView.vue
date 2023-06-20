<template>
    <div class="w-full flex flex-col items-center pb-8">
       <h1 class="text-2xl font-bold uppercase mt-8">CV</h1>
            <div class="flex flex-col md:flex-row my-8 w-8/12 carousel">
                <img id="item1" src="/cv/cv_p1.png" class="carousel-item w-full mx-2 border-1" />
                <img id="item2" src="/cv/cv_p2.png" class="carousel-item w-full mx-2 border-1" />
            </div>
            <div class="flex justify-center w-10/10 py-4 gap-2">
                <a href="#item1" class="btn btn-xs">Page 1</a>
                <a href="#item2" class="btn btn-xs">Page 2</a>
            </div>
                <a href="/cv/cv.pdf" class=" text-gray-500 hover:font-bold hover:text-gray-800"  attributes-list download >Download CV</a>
    </div>
   
</template>

<script setup>

</script>

<style >

</style>