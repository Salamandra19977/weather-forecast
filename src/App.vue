<template>
  <div id="app">
      <div class="input_box">
          <input class="input_city" @keyup.enter="getData" v-model="searchValue" type="text" name="">
          <button class="search_btn" @click="getData"></button>
          <li v-for="(value, name) in allWeather" :key = "name">
          <router-link exact active-class="active_btn" tag="button" :to="`/weather/${name}`">
            <span>{{ name | showDate}}</span>
          </router-link>
          </li>
      </div>
    <span class="error">{{getError}}</span>          
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
    getData(){
      if(this.$route.params.date != this.getDate())
      this.$router.push('/weather/'+ this.getDate())
      this.$store.dispatch('getData', this.searchValue)
    }
  },
  computed:{
    allWeather(){
      return this.$store.getters.allWeather;
    },
    getError(){
      return this.$store.getters.getError;
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
.search_btn {
  background-color:#320135;
  background-image: url("./assets/search.png");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  width: 70px;
  color: #fff;
  outline: 0;
  outline-offset: 0; 
  border: 1px solid #320135;
}
.error{
  color: red;
}
.active_btn{
  background-color: #ff7400;
}
button, input {outline:none;}
.input_city{
  width: 300px;
  font-size: 12pt;
  padding: 5px;
  text-transform: uppercase;
  color: #535353;
  justify-content: center;
  display: flex;
}
.search_btn{
  display: flex;
  background-color: #ff9640;
  color: #fff;
  border: 0px;
  margin-right: 10px
}
button{
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff9640;
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
body{
  background-color: #fff;
}
</style>
