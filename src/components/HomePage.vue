<script setup lang="ts">
import Movies from "./Movies.vue";
</script>
<template>
	<h1>Movie Time</h1>
	<Suspense>
		<template #default>
			<Movies />
		</template>
		<template #fallback>
			<div>Loading...</div>
		</template>
	</Suspense>
</template>
