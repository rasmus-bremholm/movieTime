<script lang="ts">
import { defineComponent } from "vue";
import Movies from "../components/Movies.vue";

export default defineComponent({
	name: "HomePage",
	components: {
		Movies,
	},
});
</script>

<template>
	<div class="container-paddings">
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
