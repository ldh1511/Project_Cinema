import React from 'react';
import banner from './../img/banner01.jpg';
const BannerBox = () => {
    return (
        <div className='banner-box'>
            <h1>it's movie time!</h1>
            <img src={banner} alt=""></img>
        </div>
    )
}
export default BannerBox;