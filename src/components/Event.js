import React from 'react';
import banner from '../img/banner.jpg';
const Event = () => {
    return (
        <div className='event-container'>
           <h1>khuyến mãi | sự kiện</h1>
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