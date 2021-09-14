import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default ({ black }) => {

    const [blackHeader, setBlackHeader] = useState(false);
    const [search, setSearch] = useState(" ");

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else
                setBlackHeader(false);
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, []);

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href=""> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix" /> </a>
            </div>
            <div className="header--menu">
                <ul>
                    <li><NavLink className="header--menu--link" to="/StartPage">Inicio</NavLink></li>
                    <li><NavLink className="header--menu--link" to="/Movies">Filmes</NavLink></li>
                    <li><NavLink className="header--menu--link" to="/Documentaries">Documentários</NavLink></li>
                    <li><NavLink className="header--menu--link" to="/Series">Séries</NavLink></li>
                    <li><NavLink className="header--menu--link" to="/Search">Buscar</NavLink></li>
                </ul>
            </div>
            <div className="header--right">
                <div className="header--search">
                    <form action="">
                        <input onChange={ e => setSearch(e.target.value)} type="text" name="query" id="query" placeholder="Buscar" />
                        <button type="submit">
                            <SearchIcon className="ico--search" />
                        </button>
                    </form>
                </div>
                <div className="header--user">
                    <a href="/">
                        <NotificationsIcon className="ico--notify" />
                        <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user" />
                    </a>
                </div>
            </div>
        </header>
    )
}