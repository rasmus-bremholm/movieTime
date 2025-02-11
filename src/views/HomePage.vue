<script lang="ts">
import { defineComponent } from "vue";
import Movies from "../components/Movies.vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
	name: "HomePage",
	components: {
		Movies,
		Navbar,
	},
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
});
</script>

<template>
	<Navbar @city-name="cityName" />
	<div class="container-paddings">
		<div id="title-container">
			<h2>Filmer i {{ selectedCity || getCityFromStorage() }}</h2>
		</div>
		<Movies />
	</div>
</template>

<style scoped>
#title-container {
	width: 1080px;
	display: flex;
	justify-content: flex-start;
	padding-top: 2rem;
	padding-bottom: 1.5rem;
}
.container-paddings {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 3rem;
}
</style>
