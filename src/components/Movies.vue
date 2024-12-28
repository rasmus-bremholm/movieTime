<script lang="ts">
import { defineComponent } from "vue";
import MovieCard from "./MovieCard.vue";
import SkeletonCard from "./skeletons/SkeletonCard.vue";
import { API_OPTIONS } from "../utils/apiOptions";
import { Movie, MovieApiResponse } from "../types/movieInterfaces";

export default defineComponent({
	name: "Movies",
	components: {
		SkeletonCard,
		MovieCard,
	},
	data() {
		return {
			movies: [] as Movie[],
			loading: true,
		};
	},

	async created() {
		// Fetch Data here
		try {
			const res = await fetch(
				"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
				API_OPTIONS
			);
			const data = (await res.json()) as MovieApiResponse;
			this.movies = data.results;
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
	<div class="container">
		<div v-if="loading">
			<div class="grid-container">
				<SkeletonCard v-for="n in 20" />
			</div>
		</div>
		<div v-else>
			<div class="grid-container">
				<MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	width: 100%;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(4, 245px);
	gap: 1rem;
}
</style>
