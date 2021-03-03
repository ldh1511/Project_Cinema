import React, { useState } from 'react';
import Bill from './Bill';
import OrderFilm from './OrderFim';
import Price from './Price';
const Order = () => {
    // const [step, setStep] = useState(1);
    const [bill, setBill] = useState([]);
    const handleClick =(dt) => {
        if (bill.length === 0) {
            setBill([dt]);
        }
        else {
            let x = bill;
            x = x.map((ele) => { return ele = ele.type === dt.type ? dt : ele });
            let y = x.filter((ele) => ele.type === dt.type);
            if (y.length === 0) { x.push(dt) };
            setBill(x);
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
            <OrderFilm />
            <div className="price-container">
                <Price price={90000} type={'standard'} handleClick={handleClick} />
                <Price price={149000} type={'premium'} handleClick={handleClick} />
            </div>
            <div className="bill-container">
                <Bill bill={bill} />
                <div className="next-button">
                    <button>Chọn ghế</button>
                </div>
            </div>
        </div>
    )
}
export default Order;