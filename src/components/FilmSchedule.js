import React, { useState, useEffect, useRef } from 'react';
import Event from './Event';
import FilmShowtimes from './FilmShowtimes';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import CinemaShowtimes from './CinemaShowtimes';
const FilmSchedule = ({ data }) => {
    const [film_cinema, setFilmInfo] = useState();
    const [cinema, setCinema] = useState();
    const [slot, setSlot] = useState(null);
    const ref = useRef();
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
        getFilmInfo();
        getCinema();
        console.log("render")
    }, [])
    const handleClick = (e) => {
        for (let i = 0; i < ref.current.childNodes.length; i++) {
            if (ref.current.childNodes[i].childNodes[0].className.includes("btn-active")) {
                ref.current.childNodes[i].childNodes[0].className = "btn";
            }
        }
        if (e.target.className !== "btn-container") {
            e.target.className = "btn btn-active"
        }
    }
    const handleSelectTime = (dt) => {
        setSlot(dt);
    }
    if (slot) {
        console.log(slot)
        return <Redirect to='/order/2040PM_1_1_4-3-2021'></Redirect>
    }
    else {
        return (
            <div className='film-schedule'>
                <div className='btn-container' ref={ref} onClick={handleClick}>
                    <NavLink to="/film-schedule/movie-showtimes">
                        <button className='btn btn-active'>Lịch chiếu theo phim</button>
                    </NavLink>
                    <NavLink to='/film-schedule/cinema-showtimes'>
                        <button className='btn'>Lịch chiếu theo rạp</button>
                    </NavLink>
                </div>
                <Switch>
                    <Route path={"/film-schedule/movie-showtimes"} component={() =>
                        <FilmShowtimes film_cinema={film_cinema} cinema={cinema} data={data} onClick={handleSelectTime} />
                    } />
                    <Route path={"/film-schedule/cinema-showtimes"} component={() =>
                        <CinemaShowtimes cinema={cinema} film_cinema={film_cinema} film={data} onClick={handleSelectTime} />
                    } />

                </Switch>
                <Event />
            </div>
        )
    }
}
export default FilmSchedule;