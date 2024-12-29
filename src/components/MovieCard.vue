<script lang="ts">
import { computed, defineComponent } from "vue";
import { Movie } from "../types/movieInterfaces";
import { genreMap } from "../utils/genreMap";
import { formatRating } from "../utils/ratingFormat";

export default defineComponent({
	name: "MovieCard",
	props: {
		movie: {
			type: Object as () => Movie,
			required: true,
		},
	},
	setup(props) {
		const formattedRating = formatRating(props.movie.vote_average);

		const mappedGenres = computed(() =>
			props.movie.genre_ids.map((id) => genreMap[id] || "Unknown").join(", ")
		);

		return { mappedGenres, formattedRating };
	},
});
</script>
<template>
	<div class="movieCard">
		<img
			:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
			:alt="movie.title ? `Poster for ${movie.title}` : 'Movie Poster'" />
		<div class="movieCardDetails">
			<div class="cardDetailsRatings">
				<p><span class="material-symbols-outlined"> star </span>{{ formattedRating }}</p>
				<p>{{ mappedGenres }}</p>
			</div>
			<div class="cardDetailsText">
				<h3>{{ movie.title }}</h3>
				<p>{{ movie.overview }}</p>
			</div>
		</div>
	</div>
</template>
<style scoped>
.movieCard {
	position: relative;
	height: 370px;
	width: 245px;
	overflow: hidden;

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

	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.cardDetailsRatings {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
}

.cardDetailsRatings p {
	font-size: 12px;
}

.cardDetailsText h3 {
	padding-bottom: 0.5rem;
}
.movieCardDetails p {
	font-size: 0.75rem;
	line-height: 1.6;
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
