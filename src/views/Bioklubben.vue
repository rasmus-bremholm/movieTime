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
	<main>
		<h1>Välkommen till BioKlubben!</h1>
		<p>Om du älskar filmer och att gå på bio</p>
	</main>
</template>
<style scoped></style>
