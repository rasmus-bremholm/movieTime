<script lang="ts">
import Navbar from "./components/Navbar.vue";

// Ha navbaren här istället?
export default {
	name: "App",
	components: { Navbar },
	data() {
		return { selectedCity: "" };
	},
	created() {
		this.selectedCity = "din hemstad!";
		this.getCityFromStorage();
	},
	methods: {
		getCityFromStorage() {
			if (sessionStorage.getItem("selectedCity") === null) {
				this.selectedCity === "din hemstad!";
			} else {
				this.selectedCity === sessionStorage.getItem("selectedCity");
			}
		},
		cityName(city: string) {
			console.log(city);
			this.selectedCity = city;
		},
	},
};

/*
Ok breakdown av vad vi ska göra idag. Vi ska egentligen flytta ut Navbar från routerview då det var idiotiskt.
Så först och främst måste vi flytta logiken från HomePage.vue -> App.vue utan att ha sönder något.

Var börjar vi? Vi testar bara att flytta ut Rubriken så ser vi vad som går sönder. Vi ska bara göra en commit först och därav denna kommentar.

Vi bara kör egentligen.

*/
</script>

<template>
	<Navbar @city-name="cityName" />
	<div id="title-container">
		<div id="flex-container">
			<h2>Vald Stad: {{ selectedCity || getCityFromStorage() }}</h2>
		</div>
	</div>
	<RouterView />
</template>
<style scoped>
#title-container {
	max-width: 1024px;
}
#flex-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
