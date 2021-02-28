import React, { useState, useRef } from 'react';
import poster from '../img/HO00002213.jpg'
const FilmContent = ({ film }) => {
    let days = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    if (film) {
        let classify = film.classify.split("-");
        let getFinish = film.dateFinish.split('-');
        let dateFinish = new Date(Date.UTC(getFinish[0], getFinish[1] - 1, getFinish[2]));
        let dateRange = [];
        for (let i = new Date(); i <= dateFinish; i.setDate(i.getDate() + 1)) {
            dateRange.push(new Date(i))
        }
        const rightClick = () => {
            let number = count;
            if (number <= (dateRange.length - 10) * 115.19) {
                number = number + 115.19;
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
                number = number - 115.19;
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
            <div className="film-content">
                <div className='film-content-top'>
                    <div className='film-content-img'>
                        <img src={poster} alt=""></img>
                    </div>
                    <div className='film-content-main'>
                        <h3>{film.name}</h3>
                        <span><h4>Đạo diễn: </h4>{film.director}</span>
                        <span><h4>Diễn viên: </h4>{film.cast.map(ele => ele + ", ")}</span>
                        <span><h4>Thể loại: </h4>{film.type.map(ele => ele + ", ")}</span>
                        <span><h4>Khởi chiếu: </h4>{film.dateStart}</span>
                        <span><h4>Thời lượng: </h4>100 phút</span>
                        <span><h4>Ngôn ngữ: </h4>{film.languages.map(ele => ele + " ")}</span>
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
                                    <div className='schedule' key={i}>
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

                    <div className="option-box">
                        <div className="option option-active">
                            <p>2D Phụ đề Việt</p>
                        </div>
                        <div className="option">
                            <p>2D Lồng tiếng Việt</p>
                        </div>
                    </div>
                    <div className="film-content-slot">
                        <div className="cinema-add">
                            <h3>Nexw Cine The Garden</h3>
                            <div className="cinema-add-main">
                                <p>Tầng 4 TTTM The Garden, Khu đô thị Mỹ Đình, Hà Nội</p>
                            </div>
                        </div>
                        <div className="film-slot">
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                        </div>
                    </div>
                    <div className="film-content-slot">
                        <div className="cinema-add">
                            <h3>Nexw Cine The Garden</h3>
                            <div className="cinema-add-main">
                                <p>Tầng 4 TTTM The Garden, Khu đô thị Mỹ Đình, Hà Nội</p>
                            </div>
                        </div>
                        <div className="film-slot">
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                        </div>
                    </div>
                    <div className="film-content-slot">
                        <div className="cinema-add">
                            <h3>Nexw Cine The Garden</h3>
                            <div className="cinema-add-main">
                                <p>Tầng 4 TTTM The Garden, Khu đô thị Mỹ Đình, Hà Nội</p>
                            </div>
                        </div>
                        <div className="film-slot">
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                        </div>
                    </div>
                    <div className="film-content-slot">
                        <div className="cinema-add">
                            <h3>Nexw Cine The Garden</h3>
                            <div className="cinema-add-main">
                                <p>Tầng 4 TTTM The Garden, Khu đô thị Mỹ Đình, Hà Nội</p>
                            </div>
                        </div>
                        <div className="film-slot">
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                            <div className="slot">
                                <h3>12:20 PM</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <div></div>
    }
}
export default FilmContent;