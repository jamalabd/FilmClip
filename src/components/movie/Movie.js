import React, {Fragment} from 'react';
import {MovieStyle, H2Style, ImgStyle, ParagStyle, DiscStyle} from '../styles/MovieStyle';

function Movie({movie}) {
  return (<Fragment>
    <MovieStyle >
      <H2Style>{movie.Title}</H2Style>
      <div>
        <ImgStyle src={movie.Poster} alt='poster'/>
      </div>
      <DiscStyle>
        <ParagStyle>{movie.Type}</ParagStyle>
        <ParagStyle>{movie.Year}</ParagStyle>
      </DiscStyle>
    </MovieStyle>
  </Fragment>);
}

export default Movie;
