import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css';

export default ({ black }) => {

    useEffect (() => {
        const icoClose = document.getElementById('close');
        const isEmpty = str => !str.trim().length;
        
        if (document.getElementById("search").value.length == 0){
            icoClose.classList.remove('ico--close--focus');
        } else {
            icoClose.classList.add('ico--close--focus')
        }
    },[])

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href=""> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix" /> </a>
            </div>
            <div className="header--menu">
                    <ul>
                        <li><a>Inicio</a></li>
                        <li><a>Séries</a></li>
                        <li><a>Filmes</a></li>
                        <li><a>Documentários</a></li>
                    </ul>
                </div>
            <div className="header--right">
                <div className="header--search">
                    <button type="submit"><SearchIcon className="ico--search"/></button><input type="text" name="search" id="search" placeholder="Buscar"/>
                    <CloseIcon id="close" className="ico--close"/>
                </div>
                <div className="header--user">
                    <a href="/">
                        <NotificationsIcon className="ico--notify"/>
                        <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user" />
                    </a>
                </div>
            </div>
        </header>
    )
}