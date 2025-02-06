<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
	name: "Bioklubben",
	components: {
		Navbar,
	},
});
</script>
<template>
	<Navbar />
	<p>Bioklubben</p>
</template>
<style scoped></style>
