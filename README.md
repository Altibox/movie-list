# movie-list
## usage
```
const movies = {
  'Danger 5': 'https://www.youtube.com/watch?v=0Z09bNgSeMI',
  'Marvel\'s Inhumans': 'https://www.youtube.com/watch?v=1sYF1SXcWqQ',
  'The Dark Tower': 'https://www.youtube.com/watch?v=GjwfqXTebIY'
};

<MovieList
  movies={movies}
  selected={1} //selected is the index of the selected movie
  onMovieClick={url => console.log(url)} //callback which returns url for clicked movie
/>
```