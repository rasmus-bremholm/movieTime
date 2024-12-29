<script lang="ts">
import { defineComponent } from "vue";
import Movies from "./Movies.vue";

export default defineComponent({
	name: "HomePage",
	components: {
		Movies,
	},
});
</script>

<template>
	<p>Version: 0.0.2 2024</p>
	<h1>Movie Time</h1>
	<Movies />
</template>
