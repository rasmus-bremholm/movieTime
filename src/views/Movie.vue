<script lang="ts">
import { defineComponent } from "vue";
import { API_OPTIONS } from "../utils/apiOptions";
import axios from "axios";
import { Movie } from "../types/movieInterfaces";

// const url = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';

export default defineComponent({
	name: "Movie",
	data() {
		return {
			movie: {} as Movie,
			loading: true,
			error: false,
			movieId: this.$route.params.id,
			posterPath: "",
			backdropPath: "",
		};
	},
	async created() {
		try {
			const res = await axios.get<Movie>(
				`https://api.themoviedb.org/3/movie/${this.movieId}?language=en-US`,
				API_OPTIONS
			);
			this.movie = res.data;
			// Börjar lösa poster problemet
			this.posterPath = this.movie.poster_path;
			this.backdropPath = this.movie.backdrop_path;
		} catch (error) {
			console.log("Failed to fetch movie", error);
			this.error = true;
		} finally {
			this.loading = false;
			//console.log(this.movie);
		}
	},
	computed: {
		formatTitle(): string {
			/*Om filmtitlen är för lång (såg ett exempel) så kortar vi ner den här.*/
			if (this.movie.title && this.movie.title.length > 20) {
				return this.movie.title.slice(0, 20) + "...";
			} else {
				return this.movie.title;
			}
		},
	},
});
</script>
<template>
	<div id="backdrop-container">
		<img
			v-if="!loading"
			id="backdrop-image"
			:src="`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`"
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
						v-if="!loading"
						id="posterImg"
						:src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`"
						:alt="`Poster for ${movie.title}`" />
					<button>Köp Biljett</button>
				</div>
				<div id="movie-info-container">
					<h3>{{ movie.original_title }}</h3>
					<p>{{ movie.tagline }}</p>
					<div>
						<div>
							<h4>Info</h4>
						</div>
						<div>
							<h4>Skådespelare</h4>
						</div>
					</div>
					<div>
						<h4>Story</h4>
						<p>{{ movie.overview }}</p>
					</div>
				</div>
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
#movie-details {
	display: grid;
	grid-template-columns: auto 2fr;
	grid-template-rows: 1fr;
	padding-right: 5rem;
	padding-left: 5rem;
}
#movie-info-container {
	padding: 1rem;
}
#movie-poster-container {
	display: flex;
	flex-direction: column;
}
#paddings {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100svh;
	max-width: 1200px;
}

#posterImg {
	width: 200px;
}

button {
	margin-top: 2rem;
	background-color: hsl(0, 70%, 50%);
	border-radius: 1.5rem;
	border: none;
	padding: 0.5rem 2rem;
}
@media (max-width: 550px) {
	#movie-details {
		grid-template-columns: auto;
		padding-right: 1rem;
		padding-left: 1rem;
	}
	#movie-poster-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
</style>
