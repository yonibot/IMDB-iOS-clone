## IMDB Clone

For a (forthcoming) blog post on converting a React Native app from conventional promise syntax to async/await syntax.

Includes basic IMDB movie lookup functionality.

To use this, make sure to obtain a [TMDB API key](https://www.themoviedb.org/documentation/api) and place it in `src/Api/TmdbClient.js`.

Twitter: [@yoniweisbrod](https://twitter.com/yoniweisbrod)


---

TMDB image sizes (from the Config API):

```
"backdrop_sizes": [
  "w300",
  "w780",
  "w1280",
  "original"
],
"logo_sizes": [
  "w45",
  "w92",
  "w154",
  "w185",
  "w300",
  "w500",
  "original"
],
"poster_sizes": [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original"
],
"profile_sizes": [
  "w45",
  "w185",
  "h632",
  "original"
],
"still_sizes": [
  "w92",
  "w185",
  "w300",
  "original"
]
```