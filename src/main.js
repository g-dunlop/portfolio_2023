import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faFilter, faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch, faFilter, faReply);


import './assets/main.css'
import 'virtual:windi.css'

const pinia = createPinia()
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).use(pinia).mount('#app')
