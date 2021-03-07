import React,{useRef} from 'react';
import logo from './../img/logo (2).png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const ref=useRef();
    const handleClick=()=>{
        ref.current.classList.toggle("active");
    }
    return (
        <header>
            <div className='logo-box'>
                <img src={logo} alt=""></img>
            </div>
            <ul className='header-nav'>
                <li>
                    <NavLink to='/'>Trang chủ</NavLink>
                </li>
                <li>
                    <NavLink to='/film-schedule/movie-showtimes'>Lịch chiếu</NavLink>
                </li>
                <li><NavLink to='/cinema'>Hệ thống rạp</NavLink> </li>
                <li>Khuyến mãi | Sự kiện</li>
            </ul>
            <div className="right-menu" >
                <i className="fas fa-bars" onClick={handleClick}></i>
                <ul ref={ref}>
                    <li>
                        <NavLink to='/'>Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to='/film-schedule/movie-showtimes'>Lịch chiếu</NavLink>
                    </li>
                    <li><NavLink to='/cinema'>Hệ thống rạp</NavLink> </li>
                    <li>Khuyến mãi | Sự kiện</li>
                </ul>
            </div>
        </header>
    )
}
export default Header;