<template>
    <div>
        <section class="section "> 
            <h2 class="h2">About</h2> 
            <p class="p">This was a 2-day individual project I worked on at the end of week 7 of the CodeClan course.  It's based on a toy called 'Simon', which ~I had when I was younger.  I chose to make this project to consolidate React and MongoDB and to challenge myself with a project that required some game logic.  As I learned new things on the course, such as UseContext, React Modal, I applied them to this project as a way of practicing them. 
                </p>
        </section>    
        <section class="section ">  
            <h2 class="h2">Screenshots</h2> 
            
            <table class="table">   
                <tr class="tr">     
                    <td class="td">
                        <label htmlFor="my_modal_1" class=""><img class="img" alt="MemoryGame_1" src="/memorygamepics/mg_1.webp"/></label>
                        <input type="checkbox" id="my_modal_1" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box">
                                <img id="1" class="" alt="MemoryGame_1" src="/memorygamepics/mg_1.webp"  />
                                <div class="modal-action">
                                    <label for="my_modal_1" class="btn">Close</label>
                                </div>
                            </div>
                        </div>        
                    </td>   
                    <td class="td">
                        <label htmlFor="my_modal_2" class=""><img class="img" alt="MemoryGame_2" src="/memorygamepics/mg_2.webp"/></label>
                        <input type="checkbox" id="my_modal_2" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box">
                                <img id="2" class="" alt="MemoryGame_2" src="/memorygamepics/mg_2.webp"  />
                                <div class="modal-action">
                                    <label for="my_modal_2" class="btn">Close</label>
                                </div>
                            </div>
                        </div>        
                    </td>   
                </tr>   
                <tr class="tr">     
                    <td class="td">
                        <label htmlFor="my_modal_3" class=""><img class="img" alt="MemoryGame_3" src="/memorygamepics/mg_3.webp"/></label>
                        <input type="checkbox" id="my_modal_3" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box">
                                <img id="3" class="" alt="MemoryGame_3" src="/memorygamepics/mg_3.webp"  />
                                <div class="modal-action">
                                    <label for="my_modal_3" class="btn">Close</label>
                                </div>
                            </div>
                        </div>     
                    </td>     
                    <td class="td">
                        <label htmlFor="my_modal_4" class=""><img class="img" alt="MemoryGame_4" src="/memorygamepics/mg_4.webp"/></label>
                        <input type="checkbox" id="my_modal_4" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box">
                                <img id="4" class="" alt="MemoryGame_4" src="/memorygamepics/mg_4.webp"  />
                                <div class="modal-action">
                                    <label for="my_modal_4" class="btn">Close</label>
                                </div>
                            </div>
                        </div>     
                    </td>  
                </tr>  
            </table> 
        </section>   
        <section class="section "> 
            <h2 class="h2">Tools</h2>  
            <ul class="ul">   
                <li class="li">React</li>   
                <li class="li">Express</li>    
                <li class="li">Node.js</li>    
                <li class="li">Mongo DB</li>  
            </ul> 
        </section>  
        <section class="section "> 
            <h2 class="h2">How to Run</h2> 
            <ol class="ol">   
                <li class="li">clone repository to your computer</li>   
                <li class="li">cd server</li>   
                <li class="li">npm install</li>   
                <li class="li">Get mongod up and running.  The following terminal commands work for me if you're not sure how:     
                    <ul class="ul">       
                        <li class="li">sudo mkdir -p /System/Volumes/Data/data/db</li>       
                        <li class="li">sudo chown -R `id -un` /System/Volumes/Data/data/db</li>       
                        <li class="li">--dbpath /System/Volumes/Data/data/db</li>     
                    </ul>     
                </li>   
                <li class="li">npm run seeds</li>   
                <li class="li">npm run server:dev</li>   
                <li class="li">cd ../client</li>   
                <li class="li">npm install</li>   
                <li class="li">npm start</li> 
            </ol> 
        </section>   
        <section class="section learned">  
            <h2 class="h2">What I learned</h2> 
            <ul class="ul">   
                <li class="li">I got some good practice with useEffect on this project, particularly with the animation of the squares lighting up.</li>   
                <li class="li">I also, got some good practice with useState and game logic, particularly in handling the user input during the game itself.</li>   
                <li class="li">I just had a crack at this without any planning and it affected the design and my ability to change things up later.</li>  
            </ul>  
        </section>  
        <section class="section differently">  
            <h2 class="h2">What we would do differently</h2> 
            <ul class="ul">   
                <li class="li">Plan!  At least do some wireframing for a small personal project.</li>   
                <li class="li">Maybe by the time anybody reads this, I'll have learned how to use authentication to stop duplicate names entering the database.</li>   
                <li class="li">If I get time, I'd like to add a 'High Scores' section so the user can see how they compare to the top scores.</li> 
            </ul> 
        </section>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style >

</style>