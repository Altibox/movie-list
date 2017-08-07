import React from 'react';

const style = {
	backgroundColor: '#ddd',
	padding: '15px 10px',
	margin: '2px',
	cursor: 'pointer'
};

export default class MovieListItem extends React.Component {
	render() {
		return <li
			onClick={() => this.props.onMovieClick(this.props.url)}
			style={style}
			className={this.props.selected ? 'selected' : ''}>
			{this.props.label}
		</li>;
	}
}