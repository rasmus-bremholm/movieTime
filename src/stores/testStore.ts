import { defineStore } from "pinia";

export const useTestStore = defineStore("testStore", {
	state: () => ({
		movies: [{ id: 1, title: "MovieName", favorite: true }],
	}),
});
