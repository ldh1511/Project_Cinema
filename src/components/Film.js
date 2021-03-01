import React, { useRef, useState } from 'react';
import Poster from './Poster';
const Film = ({ data, filmSelect }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const rightClick = () => {
        let number = count;
        if (number <= (data.length - 5) * 300) {
            number = number + 300;
        }
        else {
            number = 0;
        }
        setCount(number);
        ref.current.style.transform = `translateX(-${number}px)`;
        ref.current.style.transition = 'all .2s';
    }
    const leftClick = () => {
        let number = count;
        if (count > 0) {
            number = number - 300;
        }
        setCount(number);
        ref.current.style.transform = `translateX(-${number}px)`;
        ref.current.style.transition = 'all .2s';
    }
    return (
        <div className='film-container'>
            <div className='film-bottom'>
                <div className='btn-direct' onClick={leftClick}>
                    <i className="fas fa-angle-left"></i>
                </div>
                <div className='list-film-box'>
                    <div ref={ref}>
                        <div className='list-film-container' >
                            {
                                data.map((ele,i) =>
                                    <Poster data={ele} filmInfo={filmSelect} key={i}/>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className='btn-direct' onClick={rightClick}>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        </div>
    )
}
export default Film;