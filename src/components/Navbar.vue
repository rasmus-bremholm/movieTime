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
			<p>Logo</p>
			<p>Popular Movies</p>
			<p>My List</p>
			<div>
				<span class="material-symbols-outlined"> search </span><input type="search" name="" id="" />
			</div>
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
