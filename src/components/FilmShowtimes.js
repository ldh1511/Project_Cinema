import React, { useState, useRef } from 'react';
import poster from '../img/HO00002213.jpg';
import Film from './Film';
const FilmShowtimes = ({ film_cinema, cinema, data, onClick }) => {
    let days = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [filmSelect, setFilmSelect] = useState(data[0]);
    const ref = useRef(null);
    const getDate = (day) => {
        setDate(day);
    }
    const handleSelect = (dt) => {
        setFilmSelect(dt);
    }
    const getWidth=()=>{
        return ref.current.childNodes[0].clientWidth
    }
    if (filmSelect && film_cinema && cinema) {
        let x = film_cinema.filter((ele) => parseInt(ele.idFilm) === parseInt(filmSelect.id));
        x.map((ele, i) => {
            let t = cinema.filter((e) => parseInt(e.id) === parseInt(ele.idLocation));
            return x[i] = { ...x[i], location: t[0].location, locationName: t[0].name }
        })
        let classify = filmSelect.classify.split("-");
        let getFinish = filmSelect.dateFinish.split('-');
        let dateFinish = new Date(Date.UTC(getFinish[0], getFinish[1] - 1, getFinish[2]));
        let dateRange = [];
        for (let i = new Date(); i <= dateFinish; i.setDate(i.getDate() + 1)) {
            dateRange.push(new Date(i))
        }
        const rightClick = () => {
            let number = count;
            number <= (dateRange.length - 10) * getWidth() ? number = number + getWidth() : number = 0;
            setCount(number);
            ref.current.style.transform = `translateX(-${number}px)`;
            ref.current.style.transition = 'all .2s';
        }
        const leftClick = () => {
            let number = count;
            if (count > 0) {
                number = number - getWidth();
            }
            setCount(number);
            ref.current.style.transform = `translateX(-${number}px)`;
            ref.current.style.transition = 'all .2s';
        }
        const getBtnLeft = () => {
            if (count !== 0) {
                return (
                    <div className="schedule-btn-right" onClick={leftClick}>
                        <i className="fas fa-angle-left"></i>
                    </div>
                )
            }
            else return (
                <div className="schedule-btn-right">
                </div>
            )
        }
        return (
            <div>
                <Film data={data} filmSelect={handleSelect} />
                <div className="film-content">
                    <div className='film-content-top'>
                        <div className='film-content-img'>
                            <img src={poster} alt=""></img>
                        </div>
                        <div className='film-content-main'>
                            <h3>{filmSelect.name}</h3>
                            <span><h4>Đạo diễn: </h4>{filmSelect.director}</span>
                            <span><h4>Diễn viên: </h4>{filmSelect.cast.map(ele => ele + ", ")}</span>
                            <span><h4>Thể loại: </h4>{filmSelect.type.map(ele => ele + ", ")}</span>
                            <span><h4>Khởi chiếu: </h4>{filmSelect.dateStart}</span>
                            <span><h4>Thời lượng: </h4>100 phút</span>
                            <span><h4>Ngôn ngữ: </h4>{filmSelect.languages.map(ele => ele + " ")}</span>
                            <div className='film-classify'>
                                <div className='film-classify-box'>
                                    <h4>{classify[0]}</h4>
                                </div>
                                <h3>{classify[1]}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='film-content-bottom'>
                        <div className="schedule-bars">
                            {getBtnLeft()}
                            <div className="schedule-container">
                                <div className='schedule-box' ref={ref}>
                                    {dateRange.map((ele, i) =>
                                        <div className='schedule' key={i} onClick={() => { getDate(ele) }}>
                                            <span>{days[ele.getDay()]}</span>
                                            <span>{ele.getDate() + "-" + (parseInt(ele.getMonth()) + 1)}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="schedule-btn-right" onClick={rightClick}>
                                <i className="fas fa-angle-right"></i>
                            </div>
                        </div>
                        {/* <div className="option-box">
                            {filmSelect.languages.map((ele, i) =>
                                <div className={i === 0 ? "option option-active" : "option"} key={i}>
                                    <p>{ele}</p>
                                </div>
                            )
                            }
                        </div> */}
                        {x.map((ele, i) => (
                            <div className="film-content-slot" key={i}>
                                <div className="cinema-add">
                                    <h3>{ele.locationName}</h3>
                                    <div className="cinema-add-main">
                                        <p>{ele.location}</p>
                                    </div>
                                </div>
                                <div className="film-slot">
                                    {ele.set[date.getDay()].map((el, j) => (
                                        <div className="slot" key={j} onClick={()=>{onClick({data:ele, slot: el, date:date})}}>
                                            <h3>{el}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <div></div>
    }
}
export default FilmShowtimes;