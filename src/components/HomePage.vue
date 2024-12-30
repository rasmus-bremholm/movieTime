<script lang="ts">
import { defineComponent } from "vue";
import Movies from "./Movies.vue";
import Navbar from "./Navbar.vue";

export default defineComponent({
	name: "HomePage",
	components: {
		Movies,
		Navbar,
	},
});
</script>

<template>
	<Navbar />
	<div class="container-paddings">
		<Movies />
	</div>
</template>

<style scoped>
.container-paddings {
	max-width: 1280px;
	padding-left: 10rem;
	padding-right: 10rem;
	margin: 0 auto;
	min-height: 100svh;
}
</style>
