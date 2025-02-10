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
	methods: {
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
			<h2>Filmer i {{ selectedCity || "din hemstad!" }}</h2>
		</div>
		<Movies />
	</div>
</template>

<style scoped>
#title-container {
	padding-bottom: 1.5rem;
}
.container-paddings {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
