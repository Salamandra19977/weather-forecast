import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import GetDate from './mixins/getDate'
import Сhangestyle from './directives/changestyle.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.mixin(GetDate)
Vue.directive('changestyle', Сhangestyle);

Vue.filter('showDate', function(str) {
	let curentDate = new Date();
	let curentMontch = curentDate.getMonth() + 1
	let curentYear = curentDate.getFullYear()
	let curentDay = curentDate.getDate()
	if(curentMontch.toString().length == 1)
		curentMontch = "0" + curentMontch
	if(curentDay.toString().length == 1)
		curentDay = "0" + curentDay+1;
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
	if(str == curentYear+"-"+curentMontch+"-"+curentDay)
		return "сегодня"
	return day + arr[month - 1];
});

new Vue({
  render: h => h(App),
  router, store
}).$mount('#app')
