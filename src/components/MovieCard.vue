<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "MovieCard",
});
</script>
<template><div class="movieCard"></div></template>
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
