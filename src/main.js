import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch, faFilter);


import './assets/main.css'
import 'virtual:windi.css'

const pinia = createPinia()
const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)

app.use(router)
app.use(pinia)

app.mount('#app')
