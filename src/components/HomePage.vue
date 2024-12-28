<script lang="ts">
import { defineComponent } from "vue";
import Movies from "./Movies.vue";

export default defineComponent({
	name: "HomePage",
	components: {
		Movies,
	},
});

</script>
<template>
	<template>
		<Movies />
	</template>
</template>
