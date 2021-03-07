import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { HashRouter , Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import FilmSchedule from './components/FilmSchedule';
import axios from 'axios';
import Order from './components/Order';
import Cinema from './components/Cinema';
import ScrollToTop from './components/ScrollToTop';
function App() {
  const [data, setData] = useState();
  const [film_cinema, setFilmInfo] = useState();
  const [cinema, setCinema] = useState();
  const getData = async () => {
    const url = 'https://603913a8d2b9430017d23bc1.mockapi.io/film';
    const response = await axios.get(url);
    const data = await response.data;
    setData(data);
  }
  const getFilmInfo = async () => {
    const url = "https://603913a8d2b9430017d23bc1.mockapi.io/film_cinema";
    const response = await axios.get(url);
    const dt = await response.data;
    setFilmInfo(dt);
  }
  const getCinema = async () => {
    const url = "https://603913a8d2b9430017d23bc1.mockapi.io/cinema";
    const response = await axios.get(url);
    const dt = await response.data;
    setCinema(dt);
  }
  useEffect(() => {
    getData();
    getFilmInfo();
    getCinema();
  }, [])
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={() => <Home data={data} />}></Route>
          <Route path='/film-schedule' component={() => <FilmSchedule data={data} film_cinema={film_cinema} cinema={cinema} />}></Route>
          <Route path='/order/:slug' component={(props) => <Order {...props} data={data} cinema={cinema} />}></Route>
          <Route path='/cinema' component={() => <Cinema cinema={cinema}></Cinema>}></Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
