import React, { useReducer } from 'react';
import './App.css';
import Header from './header/Header';
import Search from './search/Search';
import Movie from './movie/Movie';

const initialState = {
  loading: false,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case 'SEARCH_MOVIE_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload
      };

    case 'SEARCH_MOVIE_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = searchValue => {
    dispatch({
      type: 'SEARCH_MOVIE_REQUEST'
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=d18d81d6`)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse);
        if (jsonResponse.Response === 'True') {
          dispatch({
            type: 'SEARCH_MOVIE_SUCCESS',
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: 'SEARCH_MOVIE_FAILURE',
            error: jsonResponse.Error
          });
        }
      });
  };

  const { loading, movies, errorMessage } = state;

  return (
    <div className='App'>
      <Header text='Hooked' />
      <Search search={search} />

      <p className='App-intro'>Sharing a few of our favourite movies</p>
      <div className='movies'>
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className='errorMessage'>{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}:${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
