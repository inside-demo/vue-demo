import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Users from './components/Users.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter()

// Pointing routes to the components they should use
router.map({
  '/home': {
    component: Home
  },
  'users': {
    component: Users
  },
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/home'
})

router.start(App, '#app')