export interface MovieApiResponse {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

export interface Movie {
	id: number | string;
	title: string;
	overview: string;
	tagline: string;
	poster_path: string;
	backdrop_path: string;
	release_date: string;
	genre_ids: number[];
	adult: boolean;
	original_language: string;
	original_title: string;
	popularity: number;
	vote_average: number;
	revenue: number;
}
