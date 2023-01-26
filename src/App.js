import React from 'react';
import { useEffect } from 'react';
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import './App.css';

const API_URL = "http://www.omdbapi.com?apikey=75439f4";

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("Rambo");    
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input 
                    placeholder='Search for movies...'
                    value='Rambo'
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={() => {}}
                />
            </div>
        </div>
    );
}

export default App;
