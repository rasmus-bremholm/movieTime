<script lang="ts">
import { defineComponent } from "vue";
import { Movie } from "../types/movieInterfaces";

export default defineComponent({
	name: "MovieCard",
	props: {
		movie: {
			type: Object as () => Movie,
			required: true,
		},
	},
});
</script>
<template>
	<div class="movieCard">
		<img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="" />
	</div>
</template>
<style scoped>
.movieCard {
	display: flex;
	height: 370px;
	width: 245px;
	overflow: hidden;
	background-color: #757575;
	border-radius: 15px;
}
</style>
