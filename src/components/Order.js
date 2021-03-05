import React, { useState } from 'react';
import Bill from './Bill';
import Food from './Food';
import Information from './Information';
import OrderFilm from './OrderFim';
import Price from './Price';
import SelectSeat from './SelectSeat';
import { Redirect } from 'react-router-dom';
const Order = (prop) => {
    const info = prop.match.params.slug.split("_");
    const [step, setStep] = useState(1);
    const [bill, setBill] = useState([]);
    const [seat, setSeat] = useState("");
    const [food, setFood] = useState([]);
    const selectSeat = (st) => {
        setSeat(st)
    }
    const handleBill = (dt) => {
        let x = bill;
        x = x.map((ele) => { return ele = ele.type === dt.type ? dt : ele });
        let y = x.filter((ele) => ele.type === dt.type);
        if (y.length === 0) { x.push(dt) };
        return x;
    }
    const handleClick = (dt) => {
        let curBill = bill;
        if (bill.length === 0 && dt.number !== 0) {
            curBill = [dt];
        }
        else if (bill.length === 0 && dt.number === 0) {
            curBill = [];
        }
        else if (bill.length !== 0 && dt.number === 0) {
            let x = handleBill(dt);
            x = x.filter((ele) => ele.number !== 0);
            curBill = x;
        }
        else {
            let x = handleBill(dt)
            curBill = x;
        }
        setBill(curBill);
    }
    const handleClickStep = () => {
        setStep(step + 1);
    }
    const handleSelectFood = (dt) => {
        setFood(dt);
    }
    const getStep = () => {
        if (step === 1) {
            return "Chọn ghế"
        }
        else if (step === 2) {
            return "Chọn đồ ăn"
        }
        else if (step === 3) {
            return "Xác nhận"
        }
        else if (step === 4) {
            return "Đặt vé"
        }
        else {
            return "Trang chủ"
        }
    }
    const getBtn = () => {
        if (step > 5) { return <Redirect to='/'></Redirect> }
        else {
            return (<div className="next-button">
                <button onClick={handleClickStep}>{getStep()}</button>
            </div>)
        }
    }
    const getBill = () => {
        if (bill.length !== 0) {
            return (<div className="bill-container">
                <Bill bill={bill} seat={seat} food={food} />
                {getBtn()}
            </div>)
        }
        else { return <div></div> }
    }
    const getTitle = () => {
        if (step > 4) {
            return (<div className="confim-title">
                <h1>đặt vé thành công</h1>
                <p>Quý khách vui lòng đến trước giờ chiếu phim 10 phút để hoàn tất thủ tục!</p>
            </div>)
        }
    }
    const getSelect = () => {
        if (step === 1) {
            return (
                <div className="price-container">
                    <Price price={90000} type={'standard'} handleClick={handleClick} />
                    <Price price={149000} type={'premium'} handleClick={handleClick} />
                </div>
            )
        }
        else if (step === 2) {
            return (<SelectSeat bill={bill} cinema={prop.cinema} id={info[2]} selectSeat={selectSeat} />)
        }
        else if (step === 3) {
            return (<Food selectFood={handleSelectFood} />)
        }
        else {
            return (<Information step={step} />)
        }
    }
    return (
        <div className="order-container">
            <div className="status-bar">
                <div className="status status-active">
                    <h3>Chọn vé</h3>
                </div>
                <div className="status">
                    <h3>Chọn ghế</h3>
                </div>
                <div className="status">
                    <h3>Chọn đồ ăn</h3>
                </div>
                <div className="status">
                    <h3>Xác nhận</h3>
                </div>
                <div className="status">
                    <h3>Đặt vé thành công</h3>
                </div>
            </div>
            {getTitle()}
            <OrderFilm info={info} film={prop.data} cinema={prop.cinema} />
            {getSelect()}
            {getBill()}
        </div>
    )
}
export default Order;