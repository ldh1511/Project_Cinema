import React, { useState } from 'react';
import Bill from './Bill';
import OrderFilm from './OrderFim';
import Price from './Price';
import SelectSeat from './SelectSeat';
const Order = (prop) => {
    const info = prop.match.params.slug.split("_");
    const [step, setStep] = useState(1);
    const [bill, setBill] = useState([]);
    const [seat, setSeat] = useState("");
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
    const getBill = () => {
        if (bill.length !== 0) {
            return (<div className="bill-container">
                <Bill bill={bill} seat={seat}/>
                <div className="next-button">
                    <button onClick={handleClickStep}>Chọn ghế</button>
                </div>
            </div>)
        }
        else { return <div></div> }
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
            return (
                <SelectSeat bill={bill} cinema={prop.cinema} id={info[2]} selectSeat={selectSeat} />
            )
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
            <OrderFilm info={info} film={prop.data} cinema={prop.cinema} />
            {getSelect()}
            {getBill()}
        </div>
    )
}
export default Order;