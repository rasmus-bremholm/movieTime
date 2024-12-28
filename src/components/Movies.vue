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
	<div v-if="loading"><SkeletonCard /></div>
	<div v-else>
		<div class="grid-container">
			<MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
		</div>
	</div>
</template>
