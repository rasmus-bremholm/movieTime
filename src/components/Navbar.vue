<script lang="ts">
import { defineComponent } from "vue";
import City from "./City.vue";

export default defineComponent({
	name: "Navbar",
	components: {
		City,
	},
	data() {
		return { city: null };
	},
});
</script>
<template>
	<nav>
		<div class="navbar-content">
			<p>Version: 0.0.4 2024</p>
			<p>Logo</p>
			<router-link to="/"><li>Upptäck</li></router-link>
			<router-link to="/bioklubben"><li>Bioklubben</li></router-link>
			<div id="loginSection">
				<router-link to="/login"
					><li id="login">
						Logga in<span class="material-symbols-outlined"> person </span>
					</li></router-link
				>
				<router-link to="/"><li>Stad</li></router-link>
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

#searchBar {
	display: flex;
	gap: 1rem;
	align-items: center;
}
#loginSection {
	display: flex;
	gap: 1rem;
}
a {
	display: contents;
}
li {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
#login {
	border: 1px solid white;
	padding: 4px 16px;
	border-radius: 16px;
}
#login:hover {
	border: 1px solid hsl(0, 0%, 60%);
}
</style>
