<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
	name: "Bioklubben",
	components: {
		Navbar,
	},
	data() {
		return { form: { fornamn: "", efternamn: "", email: "", password: "" }, disabeled: true };
	},
	watch: {
		form: {
			// Hittade detta på stackoverflow, inte säker på varför den används.
			handler(newValue) {
				// Hatar regex. Fråga mig inte hur den funkar. Men den kollar email iaf.
				this.disabeled =
					!newValue.fornamn ||
					!newValue.efternamn ||
					!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue.email) ||
					newValue.password.length < 5;
			},
			// Denna kollar tydligen I objektet ifall det funkar. Därför det gamla sättet sket sig.
			deep: true,
		},
	},
	methods: {
		handleSubmit(event: Event) {
			event.preventDefault();
			console.log("Submitted");
		},
	},
});
</script>
<template>
	<Navbar />
	<main>
		<div id="wrapper">
			<div id="info-container">
				<h1>Välkommen till BioKlubben!</h1>
				<p class="tagline">
					Om du älskar filmer och att gå på bio är detta medlemsskapet för dig. Som medlem samlar du
					poäng på varje biobesök och alla köp i butiken!
				</p>
				<p>
					Som medlem tjänar du poäng på din biobiljett och alla köp i kiosken. Du kan använda dina
					intjänade poäng till att köpa biobiljetter och annat gott ifrån vår butik.
				</p>
				<h2>Personliga erbjudanden och premiärer</h2>
				<p>
					Du som medlem i bioklubben får förmåner utöver din poängsamling. Du kommer få personliga
					erbjudanden såsom rabbater, både på film och snax. Men även inbjudningar till premiärer
					och förhandsvisningar av nya filmer.
				</p>
			</div>
			<div id="form-container">
				<h2>Registrera dig som medlem.</h2>
				<form>
					<label for="fornamn">Förnamn</label>
					<input placeholder="Förnamn" id="fornamn" type="text" v-model="form.fornamn" /><label
						for="efternamn"
						>Efternamn</label
					><input placeholder="Efternamn" id="efternamn" type="text" v-model="form.efternamn" />
					<label for="email">Epost</label>
					<input placeholder="Epost" id="email" type="email" v-model="form.email" />
					<label for="losenord">Lösenord</label>
					<input placeholder="Lösenord" id="losenord" type="password" v-model="form.password" />
					<input
						id="submit"
						type="submit"
						value="Registrera"
						:disabled="disabeled"
						@submit="handleSubmit" />
				</form>
			</div>
		</div>
	</main>
</template>
<style scoped>
main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

form {
	display: flex;
	flex-direction: column;
}
input {
	max-width: 500px;
	padding: 0.2rem;
}
.tagline {
	font-weight: bold;
}

#wrapper {
	max-width: 1024px;
	padding-top: 2rem;
}
#submit {
	margin-top: 2rem;
	background-color: red;
	border: none;
	padding: 1rem 4rem;
	border-radius: var(--card-border-radius);
}
#submit:hover {
	background-color: rgb(175, 0, 0);
}
#submit:disabled {
	background-color: rgb(175, 175, 175);
	color: hsl(0, 0%, 10%);
}
#submit:disabled:hover {
	background-color: rgb(124, 123, 123);
}
</style>
