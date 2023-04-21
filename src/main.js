import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope , faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'

import './assets/main.css'

const app = createApp(App)
library.add( faEnvelope , faTwitter, faInstagram , faYoutube , faHeart)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
