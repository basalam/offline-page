import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)

router.beforeEach(function offlineCatcher(to, from, next) {
  const isOnline = navigator?.onLine ?? true

  if (isOnline) {
    next()
  } else {
    store.dispatch('setupOfflineMode', /*targetPath*/ to.fullPath)
  }
})

app.mount('#app')
