import React, { useEffect, useState } from 'react';
import './StartPage.css';
import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie';
import Tmdb from '../../Tmdb';

export default function StartPage() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            //Pegando a lista Total
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            //Pegando o Featured
            let originals = list.filter(i => i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
            console.log(chosenInfo);
        }

        loadAll();

    }, []);
    return (
        <div className="page">
            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
            <footer>

            </footer>

            {movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
                </div>
            }
        </div>
    )
}