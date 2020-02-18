<template>
<div class="hello">
<div class="Weather" v-for="value in allWeather[0]" :key ="value.id">
<h1>Время: {{value.time}}</h1>
<p>Температура: {{value.temp}}</p>
<p>Атмосферное давление: {{value.pressure}}</p>
<p>Влажность воздуха: {{value.temp}}</p>
<p>{{value.description}}</p>
</div>
</div>
</template>

<script>
export default {
name: 'WeatherOne',
computed:{
allWeather(){
return this.$store.getters.allWeather;
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
</style>
