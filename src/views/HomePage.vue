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
	methods: {
		updateCity() {
			//! HÄR SKA DU SKRIVA IMORGON MÅNDAG!
		},
	},
});
</script>

<template>
	<Navbar />
	<div class="container-paddings">
		<div id="title-container"><h2 @city-name="updateCity">Filmer i Göteborg</h2></div>
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
