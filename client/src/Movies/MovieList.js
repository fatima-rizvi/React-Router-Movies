import React from 'react';
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

export default function MovieList(props) {
  console.log(props);
  // debugger
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const { url } = useRouteMatch()
  // const props.movies = items.find(item => {
  //   return item.id == id
  // }) || {}
  console.log('url:',url);
  console.log('movie id:',props.movie.id);
  // debugger
  return (
    <Link to = {`${url}movies/${props.movie.id}`} style = {{textDecoration: 'none', color: 'black'}}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}
