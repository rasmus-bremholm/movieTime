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
	<h1>Movie Time</h1>
	<Movies />
</template>
