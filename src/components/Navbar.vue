<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Navbar",
});
</script>
<template>
	<nav>
		<div class="navbar-content">
			<p>Version: 0.0.4 2024</p>
			<h1>Movie Time</h1>
		</div>
	</nav>
</template>

<style scoped>
.navbar-content {
	min-height: 72px;
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	align-items: center;
	justify-items: center;
}
</style>
