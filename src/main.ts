import { createApp } from "vue"
import App from "@/App.vue"
import "@/index.css"
import router from "@/router" // index.js
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSearch, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { createPinia } from "pinia"

// make icon available globally
library.add(faSearch)
library.add(faAngleDown)
library.add(faAngleUp)

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app")
