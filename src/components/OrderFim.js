import React from "react";
import poster from '../img/HO00002213.jpg';
const OrderFilm = () => {
    return (
        <div className="order-info-film">
            <div className="order-info-img">
                <img src={poster} alt=""></img>
            </div>
            <div className="order-info-content">
                <h2>tom & jerry: quậy tung new york</h2>
                <p><i className="far fa-clock"></i> 3 - 3 - 2021 | 20:40 PM </p>
                <p><i className="fas fa-map-marker-alt"></i> nexwcine phạm ngọc thạch</p>
            </div>
        </div>
    )
}
export default OrderFilm;