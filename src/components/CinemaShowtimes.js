import React, { useState } from "react";
import poster from '../img/HO00002213.jpg';
const CinemaShowtimes = ({ cinema, film_cinema, film, onClick }) => {
    const [loc, setLoc] = useState(null);
    const [filmShowtime, setFilmShowtime] = useState([]);
    const [cinemaAdd, setCinema] = useState(null);
    let address = [];
    let date = new Date();
    const handleClick = (ele) => {
        setLoc(ele)
    }
    const handleSelect = (ele) => {
        let day = new Date().getDay();
        let newArr = [];
        let filmInfo = []
        film_cinema.map((el) => {
            if (parseInt(el.idLocation) === parseInt(ele.id)) {
                newArr.push(el);
            }
            return true;
        })
        newArr.map((ele) => {
            let x = film.filter(el => parseInt(el.id) === parseInt(ele.idFilm));
            filmInfo.push(x[0]);
            return true;
        })
        filmInfo = filmInfo.map((ele, i) => {
            return ele = { ...ele, day: newArr[i].set[day] }
        })
        setFilmShowtime(filmInfo);
        setCinema(ele);
    }
    const getAddressContainer = () => {
        if (loc !== null) {
            return (
                <div className="address-container">
                    {cinema.map((ele, i) => {
                        if (ele.location.includes(loc)) {
                            return (
                                <div key={i} className="cinema-add address-box" onClick={() => { handleSelect(ele) }}>
                                    <h3>{ele.name}</h3>
                                    <div className="cinema-add-main">
                                        <p>{ele.location}</p>
                                    </div>
                                </div>
                            )
                        }
                        return true;
                    })}
                </div>
            )
        }
    }
    const getSlotContainer = () => {
        if (cinemaAdd !== null) {
            return (
                <div className="address-slot-container">
                    {filmShowtime.map((ele, i) => (
                        <div className="address-slot" key={i}>
                            <div className="address-slot-img">
                                <img src={poster} alt=""></img>
                            </div>
                            <div className="address-slot-content">
                                <div className="address-top-container">
                                    <div className="address-slot-info">
                                        <h3>{ele.name}</h3>
                                        <div className="film-classify-box">
                                            <h4>{ele.classify.split("-")[0]}</h4>
                                        </div>
                                    </div>
                                    <small>{cinemaAdd.name}</small>
                                </div>
                                <div className="film-slot">
                                    {ele.day.map((el, i) => (
                                        <div className="slot" key={i} onClick={() => { onClick({ data: { ...ele, idFilm: ele.id, idLocation: cinemaAdd.id }, slot: el, date: date }) }}>
                                            <h3>{el}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }
    if (cinema) {
        cinema.map(ele => {
            address.push((ele.location.split(", ")[ele.location.split(",").length - 1]))
            return 1;
        })
        address = [...new Set(address)];
        return (
            <div className="cinema-showtimes">
                <div className="select-address">
                    <h3>lựa chọn địa điểm</h3>
                    <div>
                        {address.map((ele, i) =>
                            <button className="btn-add" key={i} onClick={() => { handleClick(ele) }}>{ele}</button>
                        )}
                    </div>
                </div>
                {getAddressContainer()}
                {getSlotContainer()}
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}
export default CinemaShowtimes;