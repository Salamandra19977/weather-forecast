<template>
<div class="content_box">
	<div class="weather" v-for="value in allWeather[date]" :key ="value.id">
		<div class="time">
			<span>{{value.time}}</span>
		</div>
		<div class="icon">
			<img :src="value.icon">
			<p>{{value.description}}</p>
		</div>
		<div class="weathervalue">
		<p v-changestyle.temp="value.temp">Температура: {{value.temp}} °C</p>
		<p>Атм.давление: {{value.pressure}} Па</p>
		<p>Влажность воздуха: {{value.temp}} %</p>		
		</div>

	</div>
</div>
</template>

<script>
export default {
	name: 'Weather',
	data(){
		return {
			date:this.$route.params.date,
		}
	},
	computed:{
		allWeather(){
			return this.$store.getters.allWeather;
		}
	},
	watch:{
		$route(to) {
			this.date = to.params['date'];
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
margin: 40px 0 0;
}
.icon {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: bold;
}
.time {
	display: flex;
	justify-content: center;
	font-size: 14pt;
	font-weight: bold;
	margin-top: 20px;
	color: #535353;
}
.content_box{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 1000px;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
}
p{
	margin: 0;
}
.weather{
	display: flex;
	border-radius: 25px;
	border: 2px solid #ff7400;
	border-style: dotted;
	flex-direction: column;
	color: #535353;
	padding: 15px;
	margin: 10px;
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
