import React from "react";
import poster from '../img/HO00002213.jpg';
const OrderFilm = ({info, film, cinema}) => {
    let time="";
    info[0].split("").map((ele,i)=>{
        if(i===2){time+=":"+ele;}
        else if(i===4){time+=" "+ele;}
        else{time+=ele;}
        return ele;
    });
    let name=film.filter((ele)=>ele.id===info[1]);
    let location=cinema.filter((ele)=>parseInt(ele.id)===parseInt(info[2]));
    return (
        <div className="order-info-film">
            <div className="order-info-img">
                <img src={poster} alt=""></img>
            </div>
            <div className="order-info-content">
                <h2>{name[0].name}</h2>
                <p><i className="far fa-clock"></i> {info[3]} | {time} </p>
                <p><i className="fas fa-map-marker-alt"></i> {location[0].name}</p>
            </div>
        </div>
    )
}
export default OrderFilm;