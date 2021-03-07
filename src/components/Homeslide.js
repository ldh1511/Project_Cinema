import React,{useRef, useState} from "react";
import Poster from './Poster';
const Homeslide=({ data})=>{
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const filmConatiner=useRef();
    const rightClick = () => {
        let number = count;
        if (number <= (data.length - 5) * getWidth()) {
            number = number + getWidth();
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
        if (count > 0) { number = number - getWidth(); }
        setCount(number);
        ref.current.style.transform = `translateX(-${number}px)`;
        ref.current.style.transition = 'all .2s';
    }
    const getWidth=()=>{
        return filmConatiner.current.childNodes[0].clientWidth + 10;
    }
    return (
        <div className='film-container'>
            <h1>Thịnh hành</h1>
            <div className='film-bottom'>
                <div className='btn-direct' onClick={leftClick}>
                    <i className="fas fa-angle-left"></i>
                </div>
                <div className='list-film-box'>
                    <div ref={ref}>
                        <div className='list-film-container' ref={filmConatiner}>
                            {data.map((ele, i) =>
                                <Poster data={ele} key={i} />
                            )}
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
export default Homeslide;