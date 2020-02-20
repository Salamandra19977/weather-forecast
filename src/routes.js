import VueRouter from 'vue-router'
import Weather from './components/Weather.vue'

export default new VueRouter({
    routes: [
        {
            path: '/weather/:date',
            component: Weather
        }
    ],
    mode: 'history'
})