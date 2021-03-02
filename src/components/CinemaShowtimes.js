import React, { useState } from "react";
import poster from '../img/HO00002213.jpg';
const CinemaShowtimes = ({ cinema, film_cinema, film }) => {
    const [loc, setLoc] = useState(null);
    const [filmShowtime, setFilmShowtime]=useState(null);
    let address = [];
    const handleClick = (ele) => {
        setLoc(ele)
    }
    const handleSelect=(ele)=>{
        let day = new Date().getDay();
        let newArr=[];
        let filmInfo=[]
        film_cinema.map((el)=>{
            if(parseInt(el.idLocation) === parseInt(ele.id))
            {
                newArr.push(el);
            }
            return true;
        })
        newArr.map((ele)=>{
            let x=film.filter(el=>parseInt(el.id)===parseInt(ele.idFilm));
            filmInfo.push(x[0]);
            return true;
        })
        filmInfo=filmInfo.map((ele, i)=>{
            return ele={...ele, day:newArr[i].set[day]}
        })
        setFilmShowtime(filmInfo);
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
                <div className="address-container">
                    {cinema.map(ele => {
                        if (ele.location.includes(loc)) {
                            return (
                                <div className="cinema-add address-box" onClick={()=>{handleSelect(ele)}}>
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
                <div className="address-slot-container">
                    <div className="address-slot">
                        <div className="address-slot-img">
                            <img src={poster} alt=""></img>
                        </div>
                        <div className="address-slot-content">
                            <div className="address-top-container">
                                <div className="address-slot-info">
                                    <h3>tom & jerry: quậy tung new york</h3>
                                    <div className="film-classify-box">
                                        <h4>P</h4>
                                    </div>
                                </div>
                                <small>NexwCine Vincom Royal City</small>
                            </div>
                            <div className="film-slot">
                                <div className="slot">
                                    <h3>12:20 PM</h3>
                                </div>
                                <div className="slot">
                                    <h3>12:20 PM</h3>
                                </div>
                                <div className="slot">
                                    <h3>12:20 PM</h3>
                                </div>
                                <div className="slot">
                                    <h3>12:20 PM</h3>
                                </div>
                                <div className="slot">
                                    <h3>12:20 PM</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (<div></div>)
    }
}
export default CinemaShowtimes;