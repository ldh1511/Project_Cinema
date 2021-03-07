import React, { useState } from "react";
import food from './../img/food2.png';
const Food = ({ selectFood }) => {
    const menu = [
        { name: "combo1", price: 79000, number: 0 },
        { name: "combo2", price: 129000, number: 0 },
        { name: "combo3", price: 149000, number: 0 }
    ]
    const [foodSelect, setFood] = useState(menu);
    const handlePlus = (data) => {
        setFood(foodSelect.map((ele) => {
            if (ele.name === data.name) { ele.number = ele.number + 1; }
            return ele;
        }))
        selectFood(foodSelect);
    }
    const handleMinus = (data) => {
        if (data.number > 0) {
            setFood(foodSelect.map((ele) => {
                if (ele.name === data.name) { ele.number = ele.number - 1; }
                return ele;
            }))
            selectFood(foodSelect)
        }
    }
    return (
        <div className="food-container">
            {foodSelect.map((ele, i) => (
                <div className="food-box" key={i}>
                    <div className="food-img">
                        <img src={food} alt=""></img>
                    </div>
                    <h2>{ele.name}</h2>
                    <h2>{ele.price} VNĐ</h2>
                    <div className="price-amount">
                        <div className="amount-icon" onClick={() => { handleMinus(ele) }}>
                            <span>-</span>
                        </div>
                        <div className="amount-total">
                            <span>{ele.number}</span>
                        </div>
                        <div className="amount-icon" onClick={() => { handlePlus(ele) }}>
                            <span>+</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Food;