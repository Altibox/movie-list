import Component from '../src';

import React from 'react';
import {render} from 'react-dom';

const movies = {
	'Danger 5': 'https://www.youtube.com/watch?v=0Z09bNgSeMI',
	'Marvel\'s Inhumans': 'https://www.youtube.com/watch?v=1sYF1SXcWqQ',
	'The Dark Tower': 'https://www.youtube.com/watch?v=GjwfqXTebIY'
};

render(
	<Component
		movies={movies}
		selected={1}
		onMovieClick={url => console.log(url)}
	/>,
	document.getElementById('app')
);
