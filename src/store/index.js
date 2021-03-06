import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
actions:{
	getData(ctx, searchValue){
		axios
		.get(this.state.url + searchValue+"&appid="+this.state.apiKey+"&lang=ru&&units=metric")
		.then(response => (
			ctx.commit('parseObj',response.data)
		))
		.catch(error => ctx.commit('setError', error));
	}
},
mutations:{
	parseObj(state, obj){
		state.errorMessage = "";
		state.objWeather = {}
		for(let key of obj.list){
			let date = key.dt_txt.slice(0,10)
			if(typeof state.objWeather[date] == 'undefined')
				state.objWeather[date] = []
			state.objWeather[date].push({
			"time":key.dt_txt.slice(11,20),
			"temp":key.main.temp,
			"pressure":key.main.pressure,
			"humidity":key.main.humidity,
			"description":key.weather[0].description,
			"wind":key.wind.speed,
			"icon":"https://openweathermap.org/img/wn/"+ key.weather[0].icon + "@2x.png",
			});
		}
    },
    setError(state, error){
	if(error == "Request failed with status code 404")
	state.errorMessage = "Не удалось найти погоду для указанного города";
	else
	state.errorMessage = "Произошла ошибка при отправлении запроса";
    }
},
state:{
	objWeather:{},
	errorMessage:"",
	url:"http://api.openweathermap.org/data/2.5/forecast?q=",
	apiKey:"dee4ae5a7f92682673b9bc825467e808"
},
getters:{
	allWeather(state) {
		return state.objWeather
	},
	getError(state){
		return state.errorMessage
	}
}
})