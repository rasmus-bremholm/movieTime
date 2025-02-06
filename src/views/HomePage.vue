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
	flex-direction: column;
	align-items: center;
}
</style>
