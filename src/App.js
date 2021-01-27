import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList.js';
import MovieListHeading from './components/MovieListHeading.js';
import SearchBox from './components/SearchBox.js';
//e37680ae

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  const getMovieRequest = async (searchValue) => {
    const url = 'http://www.omdbapi.com/?s='+searchValue+'&apikey=263d22d8';
    const response = await fetch(url) ;
    const responseJson = await response.json() ;
    if(responseJson){
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {getMovieRequest(searchValue);} , [searchValue] );
	if(movies){
	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
		</div>
  );}
  else{
    return (
      <div className='container-fluid movie-app'>
			  <div className='row'>
          <MovieListHeading heading='Movies' />
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			  </div>
      <div className='row'>
        
      </div>
		</div>
    );
  }

};

export default App;
