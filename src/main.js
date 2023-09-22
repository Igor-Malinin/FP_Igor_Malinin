import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mainComponents from '@/components/main/sections'

const app = createApp(App)

mainComponents.forEach(component => {
  app.component(component.name, component)
})

app
  .use(store)
  .use(router)
  .mount('#app')
