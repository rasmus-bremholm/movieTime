<script lang="ts">
// Ha navbaren här istället?
export default {
	name: "App",
};

/*
Ok breakdown av vad vi ska göra idag. Vi ska egentligen flytta ut Navbar från routerview då det var idiotiskt.
Så först och främst måste vi flytta logiken från HomePage.vue -> App.vue utan att ha sönder något.

Var börjar vi? Vi testar bara att flytta ut Rubriken så ser vi vad som går sönder. Vi ska bara göra en commit först och därav denna kommentar.



*/
</script>

<template>
	<RouterView />
</template>
;
