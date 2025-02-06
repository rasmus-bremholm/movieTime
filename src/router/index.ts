import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Movie from "../views/Movie.vue";

export default createRouter({
	history: createWebHistory("/"),
	routes: [
		{
			path: "/",
			name: "Home",
			component: HomePage,
		},
		{
			path: "/movies/:id",
			component: Movie,
		},
	],
});
