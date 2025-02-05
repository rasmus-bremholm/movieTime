<script lang="ts">
import { defineComponent } from "vue";
import { API_OPTIONS } from "../utils/apiOptions";
import { Movie } from "../types/movieInterfaces";

// const url = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';

export default defineComponent({
	name: "Movie",
	components: {},
	data() {
		return { movie: {} as Movie, loading: true, error: false, movieId: this.$route.params.id };
	},
	async created() {
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${this.movieId}?language=en-US`,
				API_OPTIONS
			);
			const data = (await res.json()) as Movie;
			this.movie = data;
		} catch (error) {
			console.log("Failed to fetch movie", error);
			this.error = true;
		} finally {
			this.loading = false;
			console.log(this.movie);
		}
	},
});
</script>
<template>
	<img :src="`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`" alt="" />
	<p>{{ $route.params.id }}</p>
</template>
<style scoped>
img {
	width: 100%;
}
</style>
