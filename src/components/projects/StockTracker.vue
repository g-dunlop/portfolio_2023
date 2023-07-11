<template>
    <div>
        <section class="section "> 
            <h2 class="h2">About</h2> 
            <p class="p">This was a 6-day group project completed during week 10 of the CodeClan course by Jacob, Christian and Jacob.</p> 
            <p class="p">Following the end of the 6-day project(original repo here: https://github.com/xboyjx/w10_stocks_project), I found some time later in the course to go back and re-factor a few things:</p> 
            <ul class="ul">   
                <li class="li">The delete stock function now works after adding a loading time interval</li>   
                <li class="li">I've adjusted some of the CSS, including heights for the containers, hover effects on the stocks table, and some background colors</li>   
                <li class="li">There is now a 'confirm delete' component so that the user cannot alter their portoflio on just one click</li>   
                <li class="li">When you click on a stock, there is a news section drawing from marketaux API for recent articles linked to the specific stock</li>   
                <li class="li">I also added a second type of chart so the user can switch instantly between analytical tools</li>   
                <li class="li">The user can now add some notes on each stock while analysing</li>  
            </ul>   
        </section>    
        <section class="section ">  
            <h2 class="h2">Screenshots</h2>   
            <table class="table">    
                <tr class="tr">     
                    <td class="td">       
                        <label htmlFor="my_modal_5" class=""><img class="img"  alt="StockTracker_1" src="/stocktrackerpics/st_1.webp"/></label>
                        <input type="checkbox" id="my_modal_5" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box">
                                <img id="1" class="" alt="tf_1" src="/stocktrackerpics/st_1.webp"  />
                                <div class="modal-action">
                                    <label for="my_modal_5" class="btn">Close</label>
                                </div>
                            </div>
                        </div>                  
                    </td>     
                    <td class="td">         
                        <label htmlFor="my_modal_6" class=""><img class="img"  alt="StockTracker_2" src="/stocktrackerpics/st_2.webp"/></label>
                        <input type="checkbox" id="my_modal_6" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box">
                                <img id="1" class="" alt="tf_1" src="/stocktrackerpics/st_2.webp"  />
                                <div class="modal-action">
                                    <label for="my_modal_6" class="btn">Close</label>
                                </div>
                            </div>
                        </div>              
                    </td>    
                </tr>         
                <tr class="tr">     
                    <td class="td">         
                        <label htmlFor="my_modal_7" class=""><img class="img"  alt="StockTracker_3" src="/stocktrackerpics/st_3.webp"/></label>
                        <input type="checkbox" id="my_modal_7" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box">
                                <img id="1" class="" alt="tf_1" src="/stocktrackerpics/st_3.webp"  />
                                <div class="modal-action">
                                    <label for="my_modal_7" class="btn">Close</label>
                                </div>
                            </div>
                        </div>                   
                    </td>     
                    <td class="td">        
                        <label htmlFor="my_modal_8" class=""><img class="img"  alt="StockTracker_3" src="/stocktrackerpics/st_4.webp"/></label>
                        <input type="checkbox" id="my_modal_8" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box">
                                <img id="1" class="" alt="tf_1" src="/stocktrackerpics/st_4.webp"  />
                                <div class="modal-action">
                                    <label for="my_modal_8" class="btn">Close</label>
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
                <li class="li">Node.js</li>   
                <li class="li">MongoDB</li>   
                <li class="li">Express</li>   
                <li class="li">React</li>   
                <li class="li">External APIs</li>   
                <li class="li">Git</li>  
            </ul> </section>   
            <section class="section "> 
                <h2 class="h2">Project Brief</h2> 
                <p class="p">A local trader has come to you with a portfolio of shares. She wants to be able to analyse it more effectively. She has a small sample data set to give you and would like you to build a Minimum Viable Product that uses the data to display her portfolio so that she can make better decisions.</p>    
                <section class="section mvp"> 
                    <h4 class="h4">MVP</h4>   
                    <ul class="ul">     
                        <li class="li">A user should be able to:       
                            <ul class="ul">         
                                <li class="li">View total current value. </li>         
                                <li class="li">View individual trends.</li>         
                                <li class="li">Retrieve a list of share prices from an external API and allow the user to add shares to her portfolio. </li>         
                                <li class="li">View a chart of the current values in her portfolio.</li>         
                                <li class="li">Filter by time interval.</li>       
                            </ul>     
                        </li>    
                    </ul>   
                </section>    
                <section class="section "> 
                    <h4 class="h4">Possible Extensions</h4>   
                    <ul class="ul">   
                        <li class="li">A user can remove shares from her portfolio </li>   
                        <li class="li">Stock predictions/ trend speculation</li>   
                        <li class="li">Authentication/ login</li>   
                    </ul>   
                </section>  
                </section>  
                <section class="section ">  
                    <h2 class="h2">Planning</h2>   
                    <p class="p">The below images demonstrate some of our planning for the MVP stage of the project.  We made use of: Class and Object Diagrams, Wireframes, Trello and a MSCW board. </p>     
                        <table class="table">    
                            <tr class="tr">     
                                <td class="td">       
                                    <label htmlFor="my_modal_1" class=""><img class="img" alt="Screenshot 2022-05-08 at 11 23 15" src="/stocktrackerpics/MSCW.webp"/></label>     
                                    <input type="checkbox" id="my_modal_1" class="modal-toggle" />
                                    <div class="modal">
                                    <div class="modal-box">
                                    <img id="1" class="" alt="tf_1" src="/stocktrackerpics/MSCW.webp"  />
                                    <div class="modal-action">
                                        <label for="my_modal_1" class="btn">Close</label>
                                    </div>
                                    </div>
                                </div>            
                                </td>
        
                                <td>         
                                    <label htmlFor="my_modal_2" class=""><img class="img" alt="P3-1  Project Planning - Trelo" src="/stocktrackerpics/Trello.webp"/></label>
                                    <input type="checkbox" id="my_modal_2" class="modal-toggle" />
                                    <div class="modal">
                                        <div class="modal-box">
                                            <img id="1" class="" alt="tf_1" src="/stocktrackerpics/Trello.webp"  />
                                            <div class="modal-action">
                                                <label for="my_modal_2" class="btn">Close</label>
                                            </div>
                                        </div>
                                    </div>            
                                </td>    
                            </tr>        
                            <tr class="tr">     
                                <td class="td">         
                                    <label htmlFor="my_modal_3" class=""><img class="img" alt="P3-3  Project Planning - Node Tree" src="/stocktrackerpics/NodeTree.webp"/></label>
                                    <input type="checkbox" id="my_modal_3" class="modal-toggle" />
                                    <div class="modal">
                                        <div class="modal-box">
                                            <img id="1" class="" alt="tf_1" src="/stocktrackerpics/NodeTree.webp"  />
                                            <div class="modal-action">
                                                <label for="my_modal_3" class="btn">Close</label>
                                            </div>
                                        </div>
                                    </div>           
                                </td>     
                                <td>        
                                    <label htmlFor="my_modal_4" class=""><img class="img" alt="P12b-1 planning Inforamtion - Wireframe early" src="/stocktrackerpics/Wireframe.webp"></label>
                                    <input type="checkbox" id="my_modal_4" class="modal-toggle" />
                                    <div class="modal">
                                        <div class="modal-box">
                                            <img id="1" class="" alt="tf_1" src="/stocktrackerpics/Wireframe.webp"  />
                                            <div class="modal-action">
                                                <label for="my_modal_4" class="btn">Close</label>
                                            </div>
                                        </div>
                                    </div>             
                                </td>    
                            </tr>   
                        </table>   
                    <!-- </section>    -->
                </section>    
                <section class="section "> 
                    <h2 class="h2">How to Run</h2> 
                    <ul class="ul">   
                        <li class="li">Fork the repository and then clone it clone to local computer</li>   
                        <li class="li">cd server</li>   <li class="li">npm install</li>   
                        <li class="li">Get mongod up and running.  The following terminal commands work for me if you're not sure how:     
                            <ul class="ul">       
                                <li class="li">sudo mkdir -p /System/Volumes/Data/data/db</li>       
                                <li class="li">sudo chown -R `id -un` /System/Volumes/Data/data/db</li>       
                                <li class="li">--dbpath /System/Volumes/Data/data/db</li>     
                            </ul>   
                            <li class="li">npm run seeds</li>   
                            <li class="li">(in a new tab) npm run server:dev</li>          
                            <li class="li">(in a new tab) cd ../client</li>   
                            <li class="li">npm install</li>       
                            <li>npm start</li>
                            </li>  
                        </ul>  
                    </section>    
                    <section class="section ">  
                        <h2 class="h2">What we learned</h2> 
                        <ul class="ul">   
                            <li class="li">Git - this was the first time working on a project in a team, and we’d just been introduced to using different branches and merging.  It wasn’t without its issues, but overall we made effective use of branches and pull requests while working independently on components and features.</li>   
                            <li class="li">Pick APIs Carefully - we rushed into choosing the API but it would be beneficial to carefully consider the desired functions of the app and whether the API will supply the data we need in the way we need.</li>   
                            <li class="li">Always make sure your useEffect isn’t going to go rogue - forgetting the square brackets results in about 30,000 fetch requests in less than a minute.  Good job the API had a limit of 8 requests per minute!</li>   <li class="li">Take time, don’t let code runaway - Due to the short timeframe for the project, we prioritised working code over clear and DRY code, meaning it’s hard work to navigate the code as it currently stands. </li>   
                            <li class="li">Charts - This is here as an example of having something we don’t know anything about, in this case the highcharts library, getting stuck in and being able to use it effectively.  Simple, but no doubt this will be a vital tool in our learning moving forward.</li>  
                        </ul> 
                    </section>  
                    <section class="section ">  
                        <h2 class="h2">What we would do differently</h2> 
                        <ul class="ul">   
                            <li class="li">We still haven’t managed to get the delete stock function to render the updated list to the page without crashing the page.</li>   
                            <li class="li">More data for the user - the app is currently very limited in terms of analytical tools.</li>   
                            <li class="li">Setting up the login page to allow for different users.</li> 
                        </ul> 
                    </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>