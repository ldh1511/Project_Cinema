import React, { useState } from 'react';
import Bill from './Bill';
import OrderFilm from './OrderFim';
import Price from './Price';
const Order = () => {
    const [step, setStep] = useState(1);
    const [bill, setBill]=useState([]);
    const handleClick=(dt)=>{
        console.log(dt)
        // setBill([...bill, dt])
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
                <Price price={90000} type={'standard'} onClick={handleClick}/>
                <Price price={149000} type={'premium'} onClick={handleClick}/>
            </div>
            <div className="bill-container">
                <Bill />
                <div className="next-button">
                    <button>Chọn ghế</button>
                </div>
            </div>
        </div>
    )
}
export default Order;