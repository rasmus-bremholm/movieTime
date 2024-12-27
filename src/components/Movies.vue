<script lang="ts">
import { defineComponent } from "vue";

interface Movie {
	name: string;
	description: string;
	image: string;
}

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${import.meta.env.VITE_READ_ACCESS_TOKEN}`,
	},
};

export default defineComponent({
	name: "Movies",
	data() {
		return {
			movies: [] as Movie[],
			loading: true,
		};
	},

	async created() {
		// Fetch Data here
		try {
			console.log(import.meta.env.VITE_READ_ACCESS_TOKEN);
			const res = await fetch(
				"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
				options
			);
			this.movies = await res.json();
		} catch (error) {
			console.log("Failed to fetch movies", error);
		} finally {
			this.loading = false;
			// Finally set loading state to false.
		}
	},
});
</script>

<template>
	<div v-if="loading">Loading...</div>
	<div v-else></div>
</template>
