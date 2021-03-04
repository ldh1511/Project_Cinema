import React, { useEffect, useRef, useState } from "react";
const SelectSeat = ({ bill }) => {
    const ref = useRef();
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
    const prevSeat=useRef(seat);
    const handleSelect = (e, x) => {
        let curCount = count;
        let curSeat = seat;
        e.target.classList.add("seat-active");
        let code = e.target.textContent + e.currentTarget.parentNode.id;
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
                if(ref.current.children[i].id===prevSeat.current[0].split("")[1]){
                    let arrChildNodes=ref.current.children[i].childNodes;
                    for (let j = i; j < arrChildNodes.length; j++) {
                       if(arrChildNodes[j].textContent===prevSeat.current[0].split("")[0]){
                           arrChildNodes[j].childNodes[0].className="";
                       }
                    }
                }
            }
        }
    }
    useEffect(()=>{
        prevSeat.current=seat;
    },[seat]);
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
                    <h3>Tổng số ghế đã chọn : 0/{countSeat.total}</h3>
                    <p>Standard : <span>0/{countSeat.standard}</span></p>
                    <p>Premium : <span>0/{countSeat.premium}</span></p>
                </div>
            </div>
            <div className="seat-container-bottom">
                <div className="seat-alphabet">
                    <ul>
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                        <span>D</span>
                        <span>E</span>
                        <span>F</span>
                        <span>G</span>
                        <span>H</span>
                        <span>I</span>
                    </ul>
                </div>
                <div className="seat-box">
                    <div className="screen"><p>screen</p></div>
                    <div className="seat-box-bottom" ref={ref}>
                        <div className="seat-box-row" id="a">
                            <div className="seat" onClick={handleSelect}><span>1</span></div>
                            <div className="seat" onClick={handleSelect}><span>2</span></div>
                            <div className="seat" onClick={handleSelect}><span>3</span></div>
                            <div className="seat" onClick={handleSelect}><span>4</span></div>
                            <div className="seat" onClick={handleSelect}><span>5</span></div>
                            <div className="seat" onClick={handleSelect}><span>6</span></div>
                            <div className="seat" onClick={handleSelect}><span>7</span></div>
                            <div className="seat" onClick={handleSelect}><span>8</span></div>
                            <div className="seat" onClick={handleSelect}><span>9</span></div>
                            <div className="seat" onClick={handleSelect}><span>10</span></div>
                            <div className="seat" onClick={handleSelect}><span>11</span></div>
                            <div className="seat" onClick={handleSelect}><span>12</span></div>
                            <div className="seat" onClick={handleSelect}><span>13</span></div>
                            <div className="seat" onClick={handleSelect}><span>14</span></div>
                            <div className="seat" onClick={handleSelect}><span>15</span></div>
                        </div>
                        <div className="seat-box-row">
                            <div className="seat"><span>1</span></div>
                            <div className="seat"><span>2</span></div>
                            <div className="seat"><span>3</span></div>
                            <div className="seat"><span>4</span></div>
                            <div className="seat"><span>5</span></div>
                            <div className="seat"><span>6</span></div>
                            <div className="seat"><span>7</span></div>
                            <div className="seat"><span>8</span></div>
                            <div className="seat"><span>9</span></div>
                            <div className="seat"><span>10</span></div>
                            <div className="seat"><span>11</span></div>
                            <div className="seat"><span>12</span></div>
                            <div className="seat"><span>13</span></div>
                            <div className="seat"><span>14</span></div>
                            <div className="seat"><span>15</span></div>
                        </div>
                        <div className="seat-box-row">
                            <div className="seat"><span>1</span></div>
                            <div className="seat"><span>2</span></div>
                            <div className="seat"><span>3</span></div>
                            <div className="seat"><span>4</span></div>
                            <div className="seat"><span>5</span></div>
                            <div className="seat"><span>6</span></div>
                            <div className="seat"><span>7</span></div>
                            <div className="seat"><span>8</span></div>
                            <div className="seat"><span>9</span></div>
                            <div className="seat"><span>10</span></div>
                            <div className="seat"><span>11</span></div>
                            <div className="seat"><span>12</span></div>
                            <div className="seat"><span>13</span></div>
                            <div className="seat"><span>14</span></div>
                            <div className="seat"><span>15</span></div>
                        </div>
                        <div className="seat-box-row">
                            <div className="seat"><span>1</span></div>
                            <div className="seat"><span>2</span></div>
                            <div className="seat"><span>3</span></div>
                            <div className="seat"><span>4</span></div>
                            <div className="seat"><span>5</span></div>
                            <div className="seat"><span>6</span></div>
                            <div className="seat"><span>7</span></div>
                            <div className="seat"><span>8</span></div>
                            <div className="seat"><span>9</span></div>
                            <div className="seat"><span>10</span></div>
                            <div className="seat"><span>11</span></div>
                            <div className="seat"><span>12</span></div>
                            <div className="seat"><span>13</span></div>
                            <div className="seat"><span>14</span></div>
                            <div className="seat"><span>15</span></div>
                        </div>
                        <div className="seat-box-row">
                            <div className="seat"><span>1</span></div>
                            <div className="seat"><span>2</span></div>
                            <div className="seat"><span>3</span></div>
                            <div className="seat"><span>4</span></div>
                            <div className="seat"><span>5</span></div>
                            <div className="seat"><span>6</span></div>
                            <div className="seat"><span>7</span></div>
                            <div className="seat"><span>8</span></div>
                            <div className="seat"><span>9</span></div>
                            <div className="seat"><span>10</span></div>
                            <div className="seat"><span>11</span></div>
                            <div className="seat"><span>12</span></div>
                            <div className="seat"><span>13</span></div>
                            <div className="seat"><span>14</span></div>
                            <div className="seat"><span>15</span></div>
                        </div>
                        <div className="seat-box-row">
                            <div className="seat"><span>1</span></div>
                            <div className="seat"><span>2</span></div>
                            <div className="seat"><span>3</span></div>
                            <div className="seat"><span>4</span></div>
                            <div className="seat"><span>5</span></div>
                            <div className="seat"><span>6</span></div>
                            <div className="seat"><span>7</span></div>
                            <div className="seat"><span>8</span></div>
                            <div className="seat"><span>9</span></div>
                            <div className="seat"><span>10</span></div>
                            <div className="seat"><span>11</span></div>
                            <div className="seat"><span>12</span></div>
                            <div className="seat"><span>13</span></div>
                            <div className="seat"><span>14</span></div>
                            <div className="seat"><span>15</span></div>
                        </div>
                        <div className="seat-box-row">
                            <div className="seat"><span>1</span></div>
                            <div className="seat"><span>2</span></div>
                            <div className="seat"><span>3</span></div>
                            <div className="seat"><span>4</span></div>
                            <div className="seat"><span>5</span></div>
                            <div className="seat"><span>6</span></div>
                            <div className="seat"><span>7</span></div>
                            <div className="seat"><span>8</span></div>
                            <div className="seat"><span>9</span></div>
                            <div className="seat"><span>10</span></div>
                            <div className="seat"><span>11</span></div>
                            <div className="seat"><span>12</span></div>
                            <div className="seat"><span>13</span></div>
                            <div className="seat"><span>14</span></div>
                            <div className="seat"><span>15</span></div>
                        </div>
                        <div className="seat-box-row">
                            <div className="seat"><span>1</span></div>
                            <div className="seat"><span>2</span></div>
                            <div className="seat"><span>3</span></div>
                            <div className="seat"><span>4</span></div>
                            <div className="seat"><span>5</span></div>
                            <div className="seat"><span>6</span></div>
                            <div className="seat"><span>7</span></div>
                            <div className="seat"><span>8</span></div>
                            <div className="seat"><span>9</span></div>
                            <div className="seat"><span>10</span></div>
                            <div className="seat"><span>11</span></div>
                            <div className="seat"><span>12</span></div>
                            <div className="seat"><span>13</span></div>
                            <div className="seat"><span>14</span></div>
                            <div className="seat"><span>15</span></div>
                        </div>
                        <div className="seat-box-row">
                            <div className="seat"><span>1</span></div>
                            <div className="seat"><span>2</span></div>
                            <div className="seat"><span>3</span></div>
                            <div className="seat"><span>4</span></div>
                            <div className="seat"><span>5</span></div>
                            <div className="seat"><span>6</span></div>
                            <div className="seat"><span>7</span></div>
                            <div className="seat"><span>8</span></div>
                            <div className="seat"><span>9</span></div>
                            <div className="seat"><span>10</span></div>
                            <div className="seat"><span>11</span></div>
                            <div className="seat"><span>12</span></div>
                            <div className="seat"><span>13</span></div>
                            <div className="seat"><span>14</span></div>
                            <div className="seat"><span>15</span></div>
                        </div>
                    </div>
                </div>
                <div className="seat-alphabet">
                    <ul>
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                        <span>D</span>
                        <span>E</span>
                        <span>F</span>
                        <span>G</span>
                        <span>H</span>
                        <span>I</span>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SelectSeat;