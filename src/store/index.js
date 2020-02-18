import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
actions:{
	getDate(ctx, searchValue){
		console.log(searchValue)
		axios
		.get(this.state.url + searchValue+"&appid="+this.state.apiKey+"&lang=ru&&units=metric")
		.then(response => (
			ctx.commit('parseDate',response.data)
		))
	}
},
mutations:{
	parseDate(state, obj){
		state.arrWeather.length = 0;
      let objWeather = {};
      for(let key of obj.list){
        let date = key.dt_txt.slice(0,11)
        if(typeof objWeather[date] == 'undefined')
          objWeather[date] = []
        objWeather[date].push({
          "time":key.dt_txt.slice(11,20),
          "temp":key.main.temp,
          "pressure":key.main.pressure,
          "humidity":key.main.humidity,
          "description":key.weather[0].description,
          "wind":key.wind.speed,
          "icon":key.weather[0].icon,
        });
      }
      for(let key in objWeather){
        state.arrWeather.push(objWeather[key]);
      }
    },
},
state:{
	arrWeather:[],
	errorMessage:"",
	url:"http://api.openweathermap.org/data/2.5/forecast?q=",
	apiKey:"dee4ae5a7f92682673b9bc825467e808"
},
getters:{
	allWeather(state) {
		return state.arrWeather
	}
}
})