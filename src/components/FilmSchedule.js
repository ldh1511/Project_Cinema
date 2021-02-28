import React, { useState } from 'react';
import Event from './Event';
import Film from './Film';
import FilmContent from './FilmContent';
const FilmSchedule = ({ data }) => {
    const [film, setFilm]=useState(null);
    const getData = () => {
        if (data) {
            return <Film data={data} filmInfo={filmInfo} />
        }
    }
    const filmInfo=(dt)=>{
        setFilm(dt)
    }
    return (
        <div className='film-schedule'>
            {getData()}
            <FilmContent  film={film}/>
            <Event />
        </div>
    )
}
export default FilmSchedule;