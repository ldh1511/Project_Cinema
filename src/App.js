import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import FilmSchedule from './components/FilmSchedule';
import axios from 'axios';
import Order from './components/Order';
function App() {
  const [data, setData] = useState();
  const getData = async () => {
    const url = 'https://603913a8d2b9430017d23bc1.mockapi.io/film';
    const response = await axios.get(url);
    const data = await response.data;
    setData(data);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={() => <Home data={data} />}></Route>
          <Route path='/film-schedule' component={() => <FilmSchedule data={data} />}></Route>
          <Route path='/order/:slug' component={(props) => <Order {...props}/>}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
