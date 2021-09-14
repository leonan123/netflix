import React, { useState, useEffect } from 'react';
import MovieRow from '../../components/MovieRow';
import Tmdb from '../../Tmdb';
import './Series.css';

export default function Series() {

    const [series, setSeries] = useState([]);

    useEffect(() => {
        const loadSeries = async () => {
            let list = await Tmdb.getHomeList();
            let series = list.filter(i => i.slug === 'series');
            setSeries(series);
        }
        loadSeries()
    }, []);


    return (
        <div>
            <section className="lists">
                {series.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
            {series.length <= 0 &&
                <div className="loading">
                    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
                </div>
            }
        </div>
    )
}