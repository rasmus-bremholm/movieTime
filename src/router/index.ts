import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Movie from "../components/Movie.vue";

export default createRouter({
	history: createWebHistory("/"),
	routes: [
		{
			path: "/",
			name: "Home",
			component: HomePage,
		},
		{
			path: "/movies:id",
			component: Movie,
		},
	],
});
