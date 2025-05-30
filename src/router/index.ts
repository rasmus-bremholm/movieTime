import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Movie from "../views/Movie.vue";
import Bioklubben from "../views/Bioklubben.vue";
import Login from "../views/Login.vue";

export default createRouter({
	history: createWebHistory("/"),
	routes: [
		{
			path: "/",
			name: "Home",
			component: HomePage,
		},
		{
			path: "/bioklubben",
			component: Bioklubben,
		},
		{
			path: "/movies/:id",
			component: Movie,
		},
		{
			path: "/login",
			component: Login,
		},
	],
});
