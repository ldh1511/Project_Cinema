import React from 'react';
import poster from '../img/HO00002213.jpg'
const Poster = ({ data, filmInfo }) => {
    const getName = () => {
        let name = "";
        data.name.split("").map((el, i) => {
            if (i < 20) {
                name += el
            }
            return name;
        })
        name += "...";
        return name
    }
    return (
        <div className='film-box' onClick={() => filmInfo(data)}>
            <div className='film-box-img'>
                <img src={poster} alt=""></img>
            </div>
            <h3 className='film-box-title'>
                {getName()}
            </h3>
        </div>
    )
}
export default Poster;