<template>
<div class="content_box">
	<div class="weather" v-for="value in objWeather" :key ="value.id">
		<h1>Время: {{value.time}}</h1>
		<p><img :src="value.icon"></p>
		<p>Температура: {{value.temp}}</p>
		<p>Атмосферное давление: {{value.pressure}}</p>
		<p>Влажность воздуха: {{value.temp}}</p>
		<p>{{value.description}}</p>
	</div>
</div>
</template>

<script>
export default {
	name: 'Weather',
	data(){
		return {
			date:this.$route.params.date,
			objWeather:{}
		}
	},
	computed:{
		allWeather(){
			return this.$store.getters.allWeather;
		}
	},
	watch: {
		$route(to) {
			console.log(to);
			this.date = to.params['date'];
			this.objWeather = this.allWeather[this.date];
		},
		allWeather(){
			console.log(this.date)
			this.objWeather = this.allWeather[this.date]
			console.log(this.objWeather)
		}
	},
	created(){
		console.log("++++")
		this.objWeather = this.allWeather[this.date]
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
margin: 40px 0 0;
}
.content_box{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 1000px;
	justify-content: center;
	align-items: center;

}
p{
	margin: 0;
}
.weather{
	display: flex;
	flex-direction: column;
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
