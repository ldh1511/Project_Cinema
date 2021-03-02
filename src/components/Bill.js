import React from "react";
const Bill = () => {
    return (
        <div className="bill-box">
            <div className="bill-row">
                <h4>standard</h4>
                <h4>1</h4>
                <h4>90.000</h4>
            </div>
            <div className="bill-row">
                <h4>standard</h4>
                <h4>1</h4>
                <h4>90.000</h4>
            </div>
            <div className="bill-total">
                <div className="bill-row">
                    <h4>tổng cộng</h4>
                    <h4>2</h4>
                    <h4>239.000</h4>
                </div>
            </div>
        </div>
    )
}
export default Bill;