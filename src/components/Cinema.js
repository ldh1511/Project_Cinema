import React from "react";
import logo from "../img/logo (2).png";
const Cinema = ({ cinema }) => {
    const getCinema = () => {
        return cinema.map((ele, i) => {
            return (
                <div className="cinema-box" key={i}>
                    <div className="cinema-box-img">
                        <img src={logo} alt=""></img>
                    </div>
                    <h3>{ele.name}</h3>
                    <p>{ele.location}</p>
                </div>
            )
        })
    }
    return (
        <div className="cinema-container">
            <h1>Hệ thống rạp</h1>
            <div className="cinema-bottom">
                {getCinema()}
            </div>

        </div>
    )
}
export default Cinema;