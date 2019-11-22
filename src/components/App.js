import React, {useReducer} from 'react';
import {GlobalStyle} from '../components/styles/Global';
import {ThemeProvider} from 'styled-components';
import {theme} from '../components/styles/Theme';
import AppStyle from '../components/styles/AppStyle';
import ErrorStyle from '../components/styles/ErrorStyle';
import MoviesStyle from '../components/styles/MoviesStyle';
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
    dispatch({type: 'SEARCH_MOVIE_REQUEST'});

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=d18d81d6`).then(response => response.json()).then(jsonResponse => {
      console.log(jsonResponse);
      if (jsonResponse.Response === 'True') {
        dispatch({type: 'SEARCH_MOVIE_SUCCESS', payload: jsonResponse.Search});
      } else {
        dispatch({type: 'SEARCH_MOVIE_FAILURE', error: jsonResponse.Error});
      }
    });
  };

  const {loading, movies, errorMessage} = state;

  return (<AppStyle className='App'>
    <ThemeProvider theme={theme}>

      <GlobalStyle/>
      <Header text='Hooked'/>
      <Search search={search}/>
      <p className='App-intro'>Search for your favourite movies</p>
      <MoviesStyle >
        {
          loading && !errorMessage
            ? (<span>loading...
            </span>)
            : errorMessage
              ? (<ErrorStyle className='errorMessage'>{errorMessage}</ErrorStyle>)
              : (movies.map((movie, index) => (<Movie key={`${index}:${movie.Title}`} movie={movie}/>)))
        }
      </MoviesStyle>
    </ThemeProvider>
  </AppStyle>);
}

export default App;
