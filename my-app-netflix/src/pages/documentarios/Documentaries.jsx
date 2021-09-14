import React, { useState, useEffect } from 'react';

import MovieRow from '../../components/MovieRow';
import Tmdb from '../../Tmdb';

export default function Documentaries() {
    const [documentaries, setDocumentaries] = useState([]);

    useEffect(() => {
        const loadDocumentaries = async () => {
            let list = await Tmdb.getHomeList();

            let documentaries = list.filter(i => i.slug === 'documentary');

            setDocumentaries(documentaries);
        }

        loadDocumentaries();
    }, [])
    return (
        <div>
            <section className="lists">
                {documentaries.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
            {documentaries.length <= 0 &&
                <div className="loading">
                    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
                </div>
            }
        </div>
    )
}