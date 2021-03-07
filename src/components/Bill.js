import React from "react";
const Bill = ({ bill, seat, food }) => {
    const getTotal = () => {
        let total = bill.reduce((total, ele) => {
            return total += ele.total
        }, 0)
        let amount = bill.reduce((amount, ele) => {
            return amount += ele.number
        }, 0)
        if (food.length !== 0) {
            let totalFood = food.reduce((total, ele) => {
                return total += (ele.number * ele.price)
            }, 0)
            total += totalFood;
        }
        return { total: total, amount: amount }
    }
    const getSeat = () => {
        if (seat.length !== 0) {
            return seat.map((ele) => " " + ele.replace("_", ""))
        }
        else {
            return "";
        }
    }
    const getFood = () => {
        if (food.length !== 0) {
            return food.map((ele, i) => {
                if (ele.number !== 0) {
                    return (
                        <div className="bill-row" key={i}>
                            <h4>{ele.name}</h4>
                            <h4>{ele.number}x</h4>
                            <h4>{ele.number * ele.price}</h4>
                        </div>
                    )
                }
                return true;
            })
        }
        else {
            return true;
        }
    }
    return (
        <div className="bill-box">
            {bill.map((ele, i) => (
                <div className="bill-row" key={i}>
                    <h4>{ele.type}</h4>
                    <h4>{ele.number}x</h4>
                    <h4>{ele.total}</h4>
                </div>
            ))}
            {getFood()}
            <div className="bill-row">
                <h4>Seat: </h4>
                <h4>{""}</h4>
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