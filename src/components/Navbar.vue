<script lang="ts">
import { defineComponent } from "vue";
import City from "./City.vue";

export default defineComponent({
	name: "Navbar",
	components: {
		City,
	},
	emits: ["city-name"],
	data() {
		return { city: "", modalOpen: false };
	},
	methods: {
		expandModal() {
			// Flip floppar för att öppna och stänga
			this.modalOpen = !this.modalOpen;
		},
		selectCity(city: string) {
			this.city = city;
			this.$emit("city-name", city);
			//console.log(city) Detta funkar. Den loggar rätt.
		},
	},
});
</script>
<template>
	<nav>
		<div class="navbar-content">
			<p>Logo</p>
			<router-link to="/"><li>Filmer</li></router-link>
			<router-link to="/bioklubben"><li>Bioklubben</li></router-link>
			<div id="loginSection">
				<router-link to="/login"
					><li id="login">
						Logga in<span class="material-symbols-outlined"> person </span>
					</li></router-link
				>
				<button @click="expandModal">{{ city || "Välj Stad" }}</button>
				<div v-if="modalOpen">
					<h3>Välj din stad</h3>
					<li @click="selectCity('Stockholm')">Stockholm</li>
					<li @click="selectCity('Göteborg')">Göteborg</li>
					<li @click="selectCity('Borås')">Borås</li>
					<li @click="selectCity('Mölndal')">Mölndal</li>
					<li @click="selectCity('Åmål')">Åmål</li>
				</div>
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
