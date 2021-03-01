import React from 'react';
import banner from '../img/banner.jpg';
const Event = () => {
    return (
        <div className='event-container'>
            <div className='btn-container'>
                <button className='btn'>Khuyến mãi</button>
                <button className='btn'>Sự kiện</button>
            </div>
            <div className='event-box'>
                <div className='event'>
                    <img src={banner} alt=""></img>
                </div>
                <div className='event'>
                    <img src={banner} alt=""></img>
                </div>
            </div>
        </div>
    )
}
export default Event;