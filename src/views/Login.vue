<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
	name: "Login",
	components: {
		Navbar,
	},
	data() {
		return { form: { email: "", password: "" }, disabeled: true, inloggad: false };
	},
	watch: {
		form: {
			handler(newValue) {
				this.disabeled = !newValue.email || !newValue.password;
			},
			deep: true,
		},
	},
	methods: {
		handleLogin() {
			console.log("Loggat in!");
			this.inloggad = true;
		},
	},
});
</script>
<template>
	<div id="backdrop-container">
		<img src="../assets/medlem.webp" alt="" id="backdrop-image" />
	</div>
	<main>
		<div id="login-container">
			<h2>Logga In</h2>
			<form>
				<label for="email">Epost</label>
				<input type="text" name="email" id="email" v-model="form.email" />
				<label for="email">Lösenord</label>
				<input type="password" name="password" id="password" v-model="form.password" />
				<input type="submit" value="Logga In" id="submit" @submit.prevent="handleLogin" />
			</form>
			<div v-if="inloggad">
				<p>Välkommen!</p>
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

#login-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: hsl(0, 0%, 20%);
	padding: 3rem;
	margin-top: 2rem;
	border-radius: 1rem;

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		input {
			border: none;
			padding: 0.5rem;
		}
	}
}

#submit {
	margin-top: 2rem;
	background-color: hsl(0, 70%, 50%);
	border-radius: 1.5rem;
}
/* Allt som har med backdroppen här. */
#backdrop-image {
	width: 100%;
	height: auto;
	display: block;
	opacity: 20%;
}

#backdrop-container {
	position: absolute;
	top: 0;
	width: 100%;
	overflow: hidden;
	z-index: -999;
}
#backdrop-container::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}
</style>
