<script lang="ts">
import { defineComponent } from "vue";
import { API_OPTIONS } from "../utils/apiOptions";
import { Movie } from "../types/movieInterfaces";
import Navbar from "./Navbar.vue";

// const url = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';

export default defineComponent({
	name: "Movie",
	components: { Navbar },
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
	<Navbar />
	<div id="backdrop-container">
		<img
			id="backdrop-image"
			:src="`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`"
			alt="" />
	</div>

	<div id="movie-contents">
		<div id="paddings">
			<div id="movie-title">
				<h1>{{ movie.title }}</h1>
			</div>
			<div id="movie-details">
				<div id="movie-poster-container">
					<img
						:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
						:alt="`Poster for ${movie.title}`" />
				</div>
				<div id="movie-info-container"></div>
			</div>
		</div>
	</div>
</template>
<style scoped>
#backdrop-container {
	position: absolute;
	width: 100%;
	overflow: hidden;
	z-index: -999;
}
#backdrop-container::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}
#backdrop-image {
	width: 100%;
	height: auto;
	display: block;
}
#movie-contents {
	display: inline-block;
	overflow: hidden;
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
#paddings {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100svh;
	max-width: 1200px;
}
</style>
