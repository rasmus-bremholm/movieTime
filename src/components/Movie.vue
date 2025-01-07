<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Movie",
	components: {},
});
</script>
<template>
	<p>{{ $route.params.id }}</p>
</template>
<style></style>
