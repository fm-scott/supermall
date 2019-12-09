import  Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)




const home = () => import('views/home/home')
const category = () => import('views/cagegory/category')
const buycars = () => import('views/buycars/buycars')
const profile = () => import('views/profile/profile')

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  }, {
    path: '/category',
    name: 'category',
    component: category
  },{
    path: '/buycars',
    name: 'buycars',
    component: buycars
  },{
    path: '/profile',
    name: 'profile',
    component: profile
  }

]

export default new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
