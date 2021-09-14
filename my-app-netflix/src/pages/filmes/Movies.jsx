import React, {useState, useEffect} from 'react';

import MovieRow from '../../components/MovieRow';
import Tmdb from '../../Tmdb';

export default function Movies(){
    const [actionMovies, setActionMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [romanceMovies, setRomanceMovies] = useState([]);
    

    useEffect(() => {
        const loadMovies = async () => {
            let list = await Tmdb.getHomeList();

            let actionMovies = list.filter(i => i.slug === 'action');
            let topRated = list.filter(i => i.slug === 'toprated');
            let comedy = list.filter(i => i.slug === 'comedy');
            let horror = list.filter(i => i.slug === 'horror');
            let romance = list.filter(i => i.slug === 'romance');
            setRomanceMovies(romance);
            setHorrorMovies(horror);
            setComedyMovies(comedy);
            setTopRatedMovies(topRated);
            setActionMovies(actionMovies);
        }

       loadMovies();
    }, [])

    return(
        <div>
            <section className="lists">
                {topRatedMovies.map((item, key) => (
                   <MovieRow key={key} title={item.title} items={item.items} />
               ))}
                {actionMovies.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
                {comedyMovies.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
                {horrorMovies.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
                {romanceMovies.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}

                {topRatedMovies.length <= 0 &&
                 <div className="loading">
                     <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
                 </div>
                }
            </section>
        </div>
    )
}