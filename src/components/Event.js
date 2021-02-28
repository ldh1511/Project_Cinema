import React from 'react';
import banner from '../img/banner.jpg';
import Button from './Button';
const Event = () => {
    return (
        <div className='event-container'>
            <div className='btn-container'>
                <Button content='Khuyến mãi'/>
                <Button content='Sự kiện'/>
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