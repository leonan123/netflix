import React, { useState, useEffect } from 'react';

import MovieRow from '../../components/MovieRow';
import axios from 'axios';
import Tmdb from '../../Tmdb';

export default function Search(props) {
    const [movies, setMovies] = useState([]);

    const API_KEY = '211d40d925fd6b0ef8c556e6a80689a5';

        useEffect(() => { load() }, [props.location.search]);

        async function load() {
            try {
                let list = await Tmdb.getHomeList();
                let moviesSearch = list.filter(i => i.slug === 'search')
                setMovies(moviesSearch);
                console.log(moviesSearch);
            } catch (error) {
                alert(error);   
            }
        }

    return (
        <div>
            <section className="lists">
                {movies.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item} />
                ))}
                {movies.length <= 0 &&
                    <div className="loading">
                        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
                    </div>
                }
            </section>
        </div>
    )
}