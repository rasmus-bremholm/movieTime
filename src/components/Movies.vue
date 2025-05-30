<script lang="ts">
import { defineComponent } from "vue";
import MovieCard from "./MovieCard.vue";
import SkeletonCard from "./skeletons/SkeletonCard.vue";
import { API_OPTIONS } from "../utils/apiOptions";
import axios from "axios";
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
			error: false,
		};
	},

	async created() {
		// Fetch Data here, change to Axios
		try {
			const res = await axios.get<MovieApiResponse>(
				"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
				API_OPTIONS
			);
			this.movies = res.data.results;
		} catch (error) {
			console.log("Failed to fetch movies", error);
			this.error = true;
		} finally {
			this.loading = false;
			// Finally set loading state to false.
			//console.log(this.movies);
		}
	},
});
</script>

<template>
	<div class="container">
		<div v-if="loading">
			<div class="grid-container">
				<SkeletonCard v-for="n in 20" :key="n" />
			</div>
		</div>
		<div v-if="error">
			<p>Failed to load Movies. Please try again later.</p>
		</div>
		<div v-else>
			<div class="grid-container">
				<router-link v-for="movie in movies" :key="movie.id" :to="`/movies/${movie.id}`"
					><MovieCard :movie="movie"
				/></router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(4, 246px);
	gap: 2rem;
}

@media (max-width: 1100px) {
	.grid-container {
		grid-template-columns: repeat(3, 246px);
	}
}

@media (max-width: 810px) {
	.grid-container {
		grid-template-columns: repeat(2, 246px);
	}
}

@media (max-width: 540px) {
	.grid-container {
		grid-template-columns: repeat(1, 246px);
	}
}
</style>
