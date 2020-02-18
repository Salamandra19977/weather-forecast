import VueRouter from 'vue-router'
import WeatherForecastDayOne from './components/WeatherForecastDayOne.vue'
import WeatherForecastDayTwo from './components/WeatherForecastDayTwo.vue'
import WeatherForecastDayThree from './components/WeatherForecastDayThree.vue'
import WeatherForecastDayFour from './components/WeatherForecastDayFour.vue'
import WeatherForecastDayFive from './components/WeatherForecastDayFive.vue'
import WeatherForecastDaySix from './components/WeatherForecastDaySix.vue'

export default new VueRouter({
    routes: [
        {
            path: '/', // http://localhost:8080/
            component: WeatherForecastDayOne
        },
        {
            path: '/WeatherForecastDayTwo',
            component: WeatherForecastDayTwo
        },
        {
            path: '/WeatherForecastDayThree',
            component: WeatherForecastDayThree
        },
        {
            path: '/WeatherForecastDayFour',
            component: WeatherForecastDayFour
        },
        {
            path: '/WeatherForecastDayFive',
            component: WeatherForecastDayFive
        },
        {
            path: '/WeatherForecastDaySix',
            component: WeatherForecastDaySix
        }
    ],
    mode: 'history'
})