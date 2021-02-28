import React, { useRef, useState } from 'react';
import Button from './Button';
import ListFilm from './ListFilm';
const Film = ({data, filmInfo}) => {
    const [count, setCount] = useState(0);
    const ref=useRef(null);
    const rightClick = () => {
        let number = count;
        if (number <= (data.length - 5)*300) {
            number=number+300;
        }
        else {
            number=0;
        }
        setCount(number);
        ref.current.style.transform=`translateX(-${number}px)`;
        ref.current.style.transition='all .2s';
    }
    const leftClick=()=>{
        let number=count;
        if(count >0){
            number=number - 300;
        }
        setCount(number);
        ref.current.style.transform=`translateX(-${number}px)`;
        ref.current.style.transition='all .2s';
    }
    return (
        <div className='film-container'>
            <div className='btn-container'>
                <Button content='Phim đang chiếu' />
                <Button content='Phim sắp chiếu' />
                <Button content='Vé bán trước' />
            </div>
            <div className='film-bottom'>
                <div className='btn-direct' onClick={leftClick}>
                    <i className="fas fa-angle-left"></i>
                </div>
                <div className='list-film-box'>
                    <div ref={ref}>
                        <ListFilm data={data} filmInfo={filmInfo}/>
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