import React from "react";
const Bill = ({ bill, seat }) => {
    const getTotal = () => {
        let total = bill.reduce((total, ele) => {
            return total += ele.total
        }, 0)
        let amount = bill.reduce((amount, ele) => {
            return amount += ele.number
        }, 0)
        return { total: total, amount: amount }
    }
    const getSeat = () => {
        if (seat.length !== 0) {
           return seat.map((ele) =>  " "+ ele.replace("_", ""))
        }
        else{
            return ""
        }
    }
    return (
        <div className="bill-box">
            {bill.map((ele, i) => (
                <div className="bill-row" key={i}>
                    <h4>{ele.type}</h4>
                    <h4>{ele.number}</h4>
                    <h4>{ele.total}</h4>
                </div>
            ))}
            <div className="bill-row">
                <h4>Seat: </h4>
                <h4></h4>
                <h4>{getSeat()}</h4>
            </div>
            <div className="bill-total">
                <div className="bill-row">
                    <h4>tổng cộng</h4>
                    <h4>{getTotal().amount}</h4>
                    <h4>{getTotal().total}</h4>
                </div>
            </div>
        </div>
    )
}
export default Bill;