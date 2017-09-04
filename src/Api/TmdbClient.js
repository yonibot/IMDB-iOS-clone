import {keys} from '../secret/keys';

class TmdbClient {
	baseUrl = 'https://api.themoviedb.org/3'
	api_key = keys.tmdbKey

	async fetchMovies(q) {
		try {
			const url = `${this.baseUrl}/search/movie?query=${q}&api_key=${this.api_key}`;
			const response = await fetch(url);
			const result = await response.json();
			console.log(`Search Queried: ${q}, Results: ${result.results}`)
			return result.results
		}
		catch (err) {
			return {message: err.message}			
		}
	}

	async fetchMovie(id) {
		try {
			const url = `${this.baseUrl}/movie/${id}?append_to_response=videos&api_key=${this.api_key}`;
			const response = await fetch(url);
			return await response.json();
		}
		catch (err) {
			return {message: err.message}			
		}
	}

}

const tmdbClient = new TmdbClient();

export {tmdbClient as default};
