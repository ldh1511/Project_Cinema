import React, { useState, useEffect } from 'react';
const Price = ({ price, type, handleClick }) => {
    const [amount, setAmount] = useState({
        priceTicket: price,
        type: type,
        number: 0,
        total: 0
    });
    const handlePlus = () => {
        let curNumber = amount.number;
        curNumber++;
        setAmount({ ...amount, number: curNumber, total: curNumber * amount.priceTicket });
    }
    const handleMinus = () => {
        let curNumber = amount.number;
        if (curNumber > 0) {
            curNumber--;
            setAmount({ ...amount, number: curNumber, total: curNumber * amount.priceTicket });
        }
    }
    useEffect(() => { handleClick(amount) }, [amount])
    return (
        <div className="price-box">
            <div className="price-type"><h3>{type}</h3></div>
            <div className="price-info-box">
                <div className="price-info">
                    <h5>Giá tiền</h5>
                    <h4>{price}VNĐ</h4>
                </div>
                <div className="price-info">
                    <h5>Số lượng</h5>
                    <div className="price-amount">
                        <div className="amount-icon" onClick={handleMinus}>
                            <span>-</span>
                        </div>
                        <div className="amount-total">
                            <span>{amount.number}</span>
                        </div>
                        <div className="amount-icon" onClick={handlePlus}>
                            <span>+</span>
                        </div>
                    </div>
                </div>
                <div className="price-info">
                    <h5>Thành tiền</h5>
                    <h4>{amount.total}VNĐ</h4>
                </div>
            </div>
        </div>
    )
}
export default Price;