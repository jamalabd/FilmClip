import React, { Fragment } from 'react';

function Movie({ movie }) {
  return (
    <Fragment>
      <div className='movie'>
        <h2>{movie.Title}</h2>
        <div>
          <img src={movie.Poster} width='200' alt='poster' />
        </div>
        <p>{movie.Type}</p>
        <p>{movie.Year}</p>
      </div>
    </Fragment>
  );
}

export default Movie;
