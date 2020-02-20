<template>
  <div id="app">
      <div class="input_box">
          <input class="input_city" @keyup.enter="getDate" v-model="searchValue" type="text" name="">
          <button class="search_btn" @click="getDate">УЗНАТЬ ПОГОДУ</button>      
          <li v-for="(value, name) in allWeather" :key = "name">
          <router-link exact active-class="active_btn" tag="button" :to="`/weather/${name}`">
            <span>{{ name | showDate}}</span>
          </router-link>
          </li>
      </div>          
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
    getDate(){
      this.$store.dispatch('getDate', this.searchValue)
    }
  },
  computed:{
    allWeather(){
      return this.$store.getters.allWeather;
    }
  },
}
</script>

<style>
.input_box{
  display: flex;
  font-size: 12pt;
  flex-wrap: wrap;
}
.active_btn{
  background-color: #018f53;
}
.input_city{
  width: 300px;
  font-size: 12pt;
  padding: 5px;
  text-transform: uppercase;
  justify-content: center;
  display: flex;
}
.search_btn{
  display: flex;
  background-color: #00b568;
  color: #fff;
  border: 0px;
  margin-right: 10px
}
button{
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00b568;
  padding: 10px;
  min-width: 80px;
  border: 0px;
  color:#fff;
}
li {
  list-style: none;
  text-decoration: none;
  color: #fff;
}
#app{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
}
</style>
