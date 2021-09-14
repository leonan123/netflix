import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import StartPage from './pages/inicio/StartPage';
import Series from './pages/series/Series';
import Documentaries from './pages/documentarios/Documentaries';
import Movies from './pages/filmes/Movies';
import Search from './pages/search/Search';

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
            <Route  exact path="/" component={StartPage}/>
            <Route path="/StartPage" component={StartPage}/>
            <Route path="/Series" component={Series}/>
            <Route path="/Movies" component={Movies}/>
            <Route path="/Documentaries" component={Documentaries}/>    
            <Route path="/Search" component={Search}/>    
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}