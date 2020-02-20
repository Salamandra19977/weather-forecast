import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.filter('showDate', function(str) {
	//let year = str.slice(0,4);
	let month = str.slice(5,7);	
	let day = str.slice(8,10);
	if(month[0] == "0") month = month.slice(1);
	var arr=[
	' Января',
	' Февраля',
	' Марта',
	' Апреля',
	' Мая',
	' Июня',
	' Июля',
	' Августа',
	' Сентября',
	' Ноября',
	' Декабря',
	];
	return day + arr[month - 1];
});

new Vue({
  render: h => h(App),
  router, store
}).$mount('#app')
