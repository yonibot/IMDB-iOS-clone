import {observable, computed, action, autorun, autorunAsync} from 'mobx';
import {observer, observe} from 'mobx-react';
import TmdbClient from '../Api/TmdbClient';

class DataStore{
	@observable searchText = '';
	@observable wishList = [];
	@observable viewedList = [];
	@observable movieResults = [];

	constructor() {
		autorunAsync(async () => {
			const results = await TmdbClient.fetchMovies(this.searchText);
			if (results !== undefined) {
				this.movieResults = results;
			}
		}, 2000);
	}

	@action updateSearchText = (newText) => {
		this.searchText = newText;
	}

}

const myDataStore = new DataStore();

export {myDataStore as default};


// DUMB STREAM ->
// If last change was less than 2 seconds ago
// wait for 2 seconds then trigger the API request
// with the most recent data.

// If last change was greater than 2 seconds ago,
// fire the API request right away.

// =-====>>> USE AUTORUNASYNC!!!!
// 