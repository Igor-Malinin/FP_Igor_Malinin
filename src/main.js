import { createApp } from 'vue'
import App from './App.vue'
import {Vuelidate} from "vuelidate"
import store from './store'
import router from "@/router";
import mainComponents from '@/components/main/sections'
import VueCookies from 'vue-cookies'

const app = createApp(App)

mainComponents.forEach(component => {
  app.component(component.name, component)
})

app
  .use(store)
  .use(router)
  .use(Vuelidate)
  .use(VueCookies)
  .mount('#app')
