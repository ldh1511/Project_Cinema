import React from "react";
import poster from '../img/HO00002213.jpg';
const OrderFilm = ({ info, film, cinema }) => {
    let time = "";
    let nameFilm, location;
    info[0].split("").map((ele, i) => {
        if (i === 2) { time += ":" + ele; }
        else if (i === 4) { time += " " + ele; }
        else { time += ele; }
        return ele;
    });
    if (film && cinema) {
        nameFilm = film.filter((ele) => ele.id === info[1])[0];
        location = cinema.filter((ele) => parseInt(ele.id) === parseInt(info[2]))[0];
        return (
            <div className="order-info-film">
                <div className="order-info-img">
                    <img src={poster} alt=""></img>
                </div>
                <div className="order-info-content">
                    <h2>{nameFilm.name}</h2>
                    <p><i className="far fa-clock"></i> {info[3]} | {time} </p>
                    <p><i className="fas fa-map-marker-alt"></i> {location.name}</p>
                </div>
            </div>
        )
    }
    else{
        return <div></div>
    }
}
export default OrderFilm;