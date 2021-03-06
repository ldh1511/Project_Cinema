import React, { useEffect, useRef, useState } from "react";
const SelectSeat = ({ bill, cinema, id, selectSeat }) => {
    const ref = useRef();
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const getLayout = () => {
        let layout = cinema.filter((ele) => parseInt(ele.id) === parseInt(id));
        return layout;
    }
    const getCol = () => {
        let sst = alphabet.filter((ele, i) => i < getLayout()[0].layout[0]);
        return sst.map((ele, i) => {
            return (
                <span key={i}>{ele}</span>
            )
        })
    }
    const getSeatRow = () => {
        let seatArr = [];
        for (let i = 0; i < getLayout()[0].layout[1]; i++) {
            seatArr.push(
                <div className="seat"  key={i} onClick={handleSelect}><span>{i + 1}</span></div>
            )
        }
        return seatArr;
    }
    const getSeatCol = () => {
        let seatCol = alphabet.slice(0, getLayout()[0].layout[0]);
        return seatCol.map((ele, i) => {
            return (
                <div className="seat-box-row" id={ele} key={i}>
                    {getSeatRow()}
                </div>
            )
        })
    }
    const getTotal = () => {
        let standard = bill.filter((ele) => ele.type === 'standard')[0];
        let premium = bill.filter((ele) => ele.type === 'premium')[0];
        standard = standard !== undefined ? standard.number : 0;
        premium = premium !== undefined ? premium.number : 0;
        let total = bill.reduce((count, ele) => {
            return count += ele.number
        }, 0)
        return { standard: standard, premium: premium, total: total }
    }
    let countSeat = getTotal();
    const [seat, setSeat] = useState([]);
    const [count, setCount] = useState(0);
    const prevSeat = useRef(seat);
    const handleSelect = (e) => {
        let curCount = count;
        let curSeat = seat;
        e.target.classList.add("seat-active");
        let code = e.target.textContent + "_" + e.currentTarget.parentNode.id;
        if (count < countSeat.total && seat.length < countSeat.total) {
            setCount(count + 1);
            setSeat([...seat, code]);
        }
        else {
            if (count === countSeat.total) {
                setCount(1);
                curCount = 1;
            }
            else {
                setCount(count + 1);
                curCount += 1;
            }
            curSeat = curSeat.map((ele, i) => {
                if ((curCount - 1) === i) {
                    ele = code;
                }
                return ele;
            })
            setSeat(curSeat);
            for (let i = 0; i < ref.current.children.length; i++) {
                if (ref.current.children[i].id === prevSeat.current[curCount - 1].split("_")[1]) {
                    let arrChildNodes = ref.current.children[i].childNodes;
                    for (let j = 0; j < arrChildNodes.length; j++) {
                        if (arrChildNodes[j].textContent === prevSeat.current[curCount - 1].split("_")[0]) {
                            arrChildNodes[j].childNodes[0].classList.remove("seat-active");
                        }
                    }
                }
            }
        }
    }
    useEffect(() => {
        prevSeat.current = seat;
        console.log(prevSeat.current);
        selectSeat(seat);
    }, [seat]);
    return (
        <div className="seat-conatiner">
            <div className="seat-container-top">
                <div className="seat-status-box">
                    <div className="seat-status">
                        <div className="seat"></div>
                        <span>Ghế trống</span>
                    </div>
                    <div className="seat-status">
                        <div className="seat seat-selecting"></div>
                        <span>Ghế đang chọn</span>
                    </div>
                    <div className="seat-status">
                        <div className="seat seat-selected"></div>
                        <span>Ghế đã bán</span>
                    </div>
                </div>
                <div className="seat-select-info">
                    <h3>Tổng số ghế đã chọn : {seat.length}/{countSeat.total}</h3>
                    <p>
                        {seat.map((ele, i) => {
                            return <span key={i}>{ele.replace("_", "")}</span>
                        })}
                    </p>
                </div>
            </div>
            <div className="seat-container-bottom">
                <div className="seat-alphabet">
                    <ul>
                        {getCol()}
                    </ul>
                </div>
                <div className="seat-box">
                    <div className="screen"><p>screen</p></div>
                    <div className="seat-box-bottom" ref={ref}>
                        {getSeatCol()}
                    </div>
                </div>
                <div className="seat-alphabet">
                    <ul>
                        {getCol()}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SelectSeat;