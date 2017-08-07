import React from 'react';
import MovieListItem from './MovieListItem';

const style = {
	listStyle: 'none',
	margin: 0,
	padding: 0
}

export default class MovieList extends React.Component {
	render() {
		return <ul style={style}>
			{
				Object
				.entries(this.props.movies)
				.map(([ label, url ], i) =>
					<MovieListItem
						onMovieClick={this.props.onMovieClick}
						label={label}
						url={url}
						selected={i == this.props.selected}
					/>
				)
			}
		</ul>;
	}
}
