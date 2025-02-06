<script lang="ts">
import { defineComponent } from "vue";
import { Movie } from "../types/movieInterfaces";
import { genreMap } from "../utils/genreMap";
import { formatRating } from "../utils/ratingFormat";

export default defineComponent({
	name: "Movie",
	props: {
		movie: {
			type: Object as () => Movie,
			required: true,
		},
	},
	data() {
		return { formattedRating: "" };
	},
	computed: {
		//Mappar genre-IDs till genre-namn
		mappedGenres(): string {
			return this.movie.genre_ids
				? this.movie.genre_ids.map((id) => genreMap[id] || "Unknown").join(", ")
				: "Okänd";
		},
		formatRating(): string {
			return (this.formattedRating = formatRating(this.movie.vote_average));
		},
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
				<p><span class="material-symbols-outlined"> star </span>{{ formatRating }}</p>
				<p>{{ mappedGenres }}</p>
			</div>
			<div class="cardDetailsText">
				<h3>{{ movie.title }}</h3>
				<p>{{ movie.overview }}</p>
			</div>
		</div>
	</div>
	<div>
		<h3>{{ movie.title }}</h3>
	</div>
</template>
<style scoped>
h3 {
	color: white;
	font-size: 16px;
	margin-left: 0.5rem;
}
.movieCard {
	position: relative;
	height: 370px;
	width: 245px;
	overflow: hidden;
	color: hsl(0, 0%, 80%);
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
	margin-left: 0;
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
