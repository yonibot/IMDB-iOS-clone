class Movie {
	constructor(apiMovie) {
		const clonedMovie = JSON.parse(JSON.stringify(apiMovie));
		Object.assign(this, clonedMovie);
		this.uuid = require('uuid/v4')();
	}

	get trailerUrl() {
		if (this.videos) {
			const trailer = this.videos.results[0];
			return `https://www.youtube.com/watch?v=${trailer.key}`
		}
	}
}

export { Movie as default };