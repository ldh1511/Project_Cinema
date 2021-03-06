import React, { useState, useRef } from 'react';
import Event from './Event';
import FilmShowtimes from './FilmShowtimes';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import CinemaShowtimes from './CinemaShowtimes';
const FilmSchedule = ({ data, film_cinema, cinema }) => {
    const [slot, setSlot] = useState(null);
    const ref = useRef();
    const handleClick = (e) => {
        for (let i = 0; i < ref.current.childNodes.length; i++) {
            if (ref.current.childNodes[i].childNodes[0].className.includes("btn-active")) {
                ref.current.childNodes[i].childNodes[0].className = "btn";
            }
        }
        if (e.target.className !== "btn-container") {
            e.target.className = "btn btn-active";
        }
    }
    const handleSelectTime = (dt) => {
        setSlot(dt);
    }
    if (slot) {
        let time=slot.slot.replace(":","");
        time=time.replace(" ","");
        let day=slot.date.getDate() +"-"+(slot.date.getMonth()+1)+"-"+slot.date.getFullYear();
        let slug=time + "_" + slot.data.idFilm +"_"+ slot.data.idLocation+"_"+day;
        return <Redirect to={`/order/${slug}`}></Redirect>
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