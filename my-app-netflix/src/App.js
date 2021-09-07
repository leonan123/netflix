import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import StartPage from './pages/inicio/StartPage';
import Series from './pages/series/Series';
import Documentaries from './pages/documentarios/Documentaries';
import Movies from './pages/filmes/Movies';

export default () => {
  const [blackHeader, setBlackHeader] = useState(false);

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
    <div className="page">
      <BrowserRouter>
        <Header black={blackHeader} />
        <div className="marginTop">
          <Switch>
            <Route path="/StartPage">
              <StartPage />
            </Route>
            <Route path="/Series">
              <Series />
            </Route>
            <Route path="/Movies">
              <Movies />
            </Route>
            <Route path="/Documentaries">
              <Documentaries />
            </Route>v
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}