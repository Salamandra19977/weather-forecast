<template>
  <div id="app">
      <div class="input_box">
          <input class="input_city" @keyup.enter="getDate" v-model="searchValue" type="text" name="">
          <button class="search_btn" @click="test">УЗНАТЬ ПОГОДУ</button>
      </div>
    <router-link tag="button" exact active-class="font-bold" to="/">Сегодня</router-link>
    <router-link tag="button" active-class="font-bold" to="/WeatherForecastDayTwo">Завтра</router-link>
    <router-view></router-view> 
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      searchValue: "",
    }
  },
  methods: {
    test(){
      this.$store.dispatch('getDate', this.searchValue)
    },
    getDate(){
      this.$http.get(this.url + this.searchValue+"&appid="+this.apiKey+"&lang=ru&&units=metric")
      .then(response => (
        this.parseDate(response.data),
        this.showDate = true
      ))
      .catch(error => this.errorMessage = error , this.showDate = false );
    },
    parseDate(obj){
      this.arrWeather.length = 0;
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
        this.arrWeather.push(objWeather[key]);
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
