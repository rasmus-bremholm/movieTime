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
	display: flex;
	justify-content: center;
}
</style>
