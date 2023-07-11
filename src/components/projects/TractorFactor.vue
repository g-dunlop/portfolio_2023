<template>
    <div>
        <section class="section "> 
        <h2 class="h2">About</h2> 
        <p class="p">
          This was a 12-day group project completed during weeks 15 and 16 of the CodeClan course by Graeme and Christian.
        </p> 
      </section>  
      <section class="section ">  
        <h2 class="h2">Screenshots</h2>   
        <table class="table">    
          <tr class="tr">     
            <td class="td">       
              <label htmlFor="my_modal_1" class=""><img class="img" alt="tf_1" src="/tractorfactorpics/tf_1.webp"></label>
                  <input type="checkbox" id="my_modal_1" class="modal-toggle" />    
                  <div class="modal">
                    <div class="modal-box">
                      <img id="1" class="" alt="tf_1" src="/tractorfactorpics/tf_1.webp"  />
                      <div class="modal-action">
                        <label for="my_modal_1" class="btn">Close</label>
                      </div>
                    </div>
                  </div>       
            </td>     
            <td class="td">        
              <label htmlFor="my_modal_2" class=""><img class="img" alt="tf_2" src="/tractorfactorpics/tf_2.webp"></label>
                  <input type="checkbox" id="my_modal_2" class="modal-toggle" />    
                  <div class="modal">
                    <div class="modal-box">
                      <img id="1" class="" alt="tf_2" src="/tractorfactorpics/tf_2.webp"  />
                      <div class="modal-action">
                        <label for="my_modal_2" class="btn">Close</label>
                      </div>
                    </div>
                  </div>           
            </td>      
            <td class="td">      
              <label htmlFor="my_modal_3" class=""><img class="img" alt="tf_3" src="/tractorfactorpics/tf_3.webp"></label>
                  <input type="checkbox" id="my_modal_3" class="modal-toggle" />    
                  <div class="modal">
                    <div class="modal-box">
                      <img id="1" class="" alt="tf_3" src="/tractorfactorpics/tf_3.webp"  />
                      <div class="modal-action">
                        <label for="my_modal_3" class="btn">Close</label>
                      </div>
                    </div>
                  </div>               
            </td>    
          </tr>         
          <tr class="tr">      
            <td class="td">         
              <label htmlFor="my_modal_4" class=""><img class="img" alt="tf_4" src="/tractorfactorpics/tf_4.webp"></label>
                  <input type="checkbox" id="my_modal_4" class="modal-toggle" />    
                  <div class="modal">
                    <div class="modal-box">
                      <img id="1" class="" alt="tf_4" src="/tractorfactorpics/tf_4.webp"  />
                      <div class="modal-action">
                        <label for="my_modal_4" class="btn">Close</label>
                      </div>
                    </div>
                  </div>                
            </td>     
            <td class="td">         
              <label htmlFor="my_modal_5" class=""><img class="img" alt="tf_5" src="/tractorfactorpics/tf_5.webp"></label>
                  <input type="checkbox" id="my_modal_5" class="modal-toggle" />    
                  <div class="modal">
                    <div class="modal-box">
                      <img id="1" class="" alt="tf_5" src="/tractorfactorpics/tf_5.webp"  />
                      <div class="modal-action">
                        <label for="my_modal_5" class="btn">Close</label>
                      </div>
                    </div>
                  </div>               
            </td>     
            <td class="td">        
              <label htmlFor="my_modal_6" class=""><img class="img" alt="tf_6" src="/tractorfactorpics/tf_6.webp"></label>
                  <input type="checkbox" id="my_modal_6" class="modal-toggle" />    
                  <div class="modal">
                    <div class="modal-box">
                      <img id="1" class="" alt="tf_6" src="/tractorfactorpics/tf_6.webp"  />
                      <div class="modal-action">
                        <label for="my_modal_6" class="btn">Close</label>
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
          <li class="li">Java</li>   
          <li class="li">SQL</li>   
          <li class="li">Spring Boot</li>   
          <li class="li">React</li>   
          <li class="li">React Bootstrap</li>   
          <li class="li">Google Maps API/Distance Matrix</li>   
          <li class="li">Git</li>  
        </ul>  
      </section>   
      <section class="section "> 
        <h2 class="h2">Project Brief</h2>  
        <p class="p">
          An online tractor auction site has requested an app to help increase the efficiency of their after-sale process.  Once a tractor is sold, as part of their service, the site arranges for a qualified expert to inspect the tractor and authenticate the product for sale.  The site has requested an app which will allow them to find the closest inspectors to the tractor easily.
        </p> 
       
        <section class="section "> 
          <h4 class="h4">MVP</h4>  
          <ul class="ul">   
            <li class="li">A user should be able to:     
              <ul class="ul">       
                <li class="li">Enter a postcode and a type of tractor in order to find the closest inspectors</li>       
                <li class="li">See these inspectors on a map</li>       
                <li class="li">See the road distance from inspector to tractor</li>       
                <li class="li">Perform basic CRUD functions on the database: Add tractors and inspectors, update and delete inspectors and search the database by name of inspector</li>       
                <li class="li">Use the app from a mobile device</li>     
              </ul>   
            </li>  
          </ul>  
        </section>   
        <section class="section "> 
          <h4 class="h4">Possible Extensions</h4>  
          <ul class="ul">   
            <li class="li">The user can give ratings to inspectors and make notes on them</li>   
            <li class="li">The ability to book an inspection via the app (this would, however, require more data about the purchased item from the auction site.)</li>   
            <li class="li">Authentication and login. (Although in this case, there is only one user for the site.)</li>  
          </ul>  
        </section>   
          <section class="section">  
            <h2 class="h2">Planning</h2>  
            <p class="p">The below images demonstrate some of our planning for the MVP stage of the project.  We made use of a MSCW board, class diagrams and wireframes</p>     
            <table class="table">    
              <tr class="tr">     
                <td class="td">      
                  <label htmlFor="my_modal_7" class=""><img id="1" class="img" alt="MSCW" src="/tractorfactorpics/MSCW.webp" /> </label>
                  <input type="checkbox" id="my_modal_7" class="modal-toggle" />    
                  <div class="modal">
                    <div class="modal-box">
                      <img id="1" class="" alt="MSCW board" src="/tractorfactorpics/MSCW.webp" />
                      <div class="modal-action">
                        <label for="my_modal_7" class="btn">Close</label>
                      </div>
                    </div>
                  </div>  
                </td>
                
                <td class="td">         
                  <label htmlFor="my_modal_8" class=""><img id="2" class="img" alt="Class" src="/tractorfactorpics/Class.webp" ></label>
                  <input type="checkbox" id="my_modal_8" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box">
                      <img id="2" class="" alt="Class" src="/tractorfactorpics/Class.webp" >
                      <div class="modal-action">
                        <label for="my_modal_8" class="btn">Close</label>
                      </div>
                    </div>
                  </div>              
                </td> 

                <td class="td">      
                  <label htmlFor="my_modal_9" class=""><img id="2" class="img" alt="Wireframes" src="/tractorfactorpics/Wireframes.webp" ></label>
                  <input type="checkbox" id="my_modal_9" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box">
                      <img id="2" class="" alt="Wireframes" src="/tractorfactorpics/Wireframes.webp" >
                      <div class="modal-action">
                        <label for="my_modal_9" class="btn">Close</label>
                      </div>
                    </div>
                  </div>         
                </td>    
              </tr>   
            </table>   
          </section>   
        </section>    
        <section class="section "> 
          <h2 class="h2">How to Run</h2>   
          <ul class="ul">     
            <li class="li">Fork the repository and then clone it clone to local computer</li>     
            <li class="li">Open the project in Intellij and start the server via the file 'TractorFinderApplication'.</li>     
            <li class="li">You may need to change the path of the csv files we use to seed the database.  These can be found in 'components/DataLoader.js' on lines 63 and 87.</li>   
            <li class="li">cd into the 'client folder'</li>   
            <li class="li">npm install</li>   
            <li class="li">npm start</li>   
          </ul>   
        </section>     
        <section class="section ">  
          <h2 class="h2">What we learned</h2>   
          <ul class="ul">     
            <li class="li">
              We used the outdated version of React-Google-Maps, which led to have to use an older version of React.  This then led to compatibility issues with some other libraries.  I would read about the versions more carefully on a future app!
            </li>     
            <li class="li">
              I've done the previous projects with vanilla CSS, and while it's been good to learn it and understand a little about making sites responsive, Bootsrap and other frameworks are more efficient and I will use them in future.  We choise Bootsrap over Material UI as I was more familiar with it, but I'll definitely give a different framework another go next time.
            </li>     
            <li class="li">
              Libraries are extremely powerful and I need to always consider if there is a library for what I'm about to do(There usually is!).</li>     
              <li class="li">
                Spring is very powerful!  I guess it's more Spring Boot that we used, but the ease with which you can generate SQL queries and access the data is something I'm looking forward to playing about with more.  My next project will have a more complex backend with more realtionships to navigate, and I'm sure Spring will help with that.
            </li>     
            <li class="li">
              Learing how to get data from the csv files into our database took us a long time, but it was worth it in the end and I'm sure something we'll need to do again in the future
            </li>   
          </ul>   
        </section>    
        <section class="section">  
          <h2 class="h2">What we would do differently</h2>   
          <ul class="ul">     
            <li class="li">
              As mentioned above, I'd take more time before getting started to research different libraries and read about the versions.  It feels like it's time when you could have started coding but at worst I think you'll end up achieving the same amount but will likely have a better product than diving into the code. 
            </li>     
            <li class="li">
              There's always more if you had more time.  As a small team, we're OK with what we achieved as the brief for this app was somewhat limited.  If this was something that could be integrated with the auction site, and give us access to things such as the information for each specific tractor being sold, we could generate an automated inspector booking system.
            </li>
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