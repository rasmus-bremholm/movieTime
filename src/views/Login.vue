<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
	name: "Login",
	components: {
		Navbar,
	},
});
</script>
<template>
	<Navbar />
	<main>
		<div id="login-container">
			<form>
				<input type="text" name="" id="name" />
				<input type="text" name="" id="password" />
				<input type="submit" value="Logga In" />
			</form>
		</div>
	</main>
</template>
<style scoped></style>
