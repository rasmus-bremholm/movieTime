<script lang="ts">
import { computed, defineComponent } from "vue";
import { Movie } from "../types/movieInterfaces";
import { genreMap } from "../utils/genreMap";

export default defineComponent({
	name: "MovieCard",
	props: {
		movie: {
			type: Object as () => Movie,
			required: true,
		},
	},
	setup(props) {
		const mappedGenres = computed(() =>
			props.movie.genre_ids.map((id) => genreMap[id] || "Unknown").join(", ")
		);

		return { mappedGenres };
	},
});
</script>
<template>
	<div class="movieCard">
		<img
			:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
			:alt="movie.title ? `Poster for ${movie.title}` : 'Movie Poster'" />
		<div class="movieCardDetails">
			<p>{{ movie.vote_average }}</p>
			<p>{{ mappedGenres }}</p>
			<h3>{{ movie.title }}</h3>
			<p>{{ movie.overview }}</p>
		</div>
	</div>
</template>
<style scoped>
.movieCard {
	position: relative;
	height: 370px;
	width: 245px;
	overflow: hidden;
	background-color: #757575;
	border-radius: var(--card-border-radius);
}

.movieCard img {
	display: block;
	width: 100%;
	border-radius: var(--card-border-radius);
	transition: transform 0.3s ease;
}

.movieCard:hover img {
	transform: scale(1.1);
}

.movieCardDetails {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 70%;
	background-color: var(--card-details-back);
	padding: 1rem; /* 16px */
	transform: translateY(100%);
	transition: transform 0.2s ease;
}
.movieCardDetails p {
	font-size: 0.9rem;
	line-height: 1.4;
	overflow: hidden;
	text-overflow: ellipsis;
	line-clamp: 4;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
}

.movieCard:hover .movieCardDetails {
	transform: translateY(0);
}
</style>
