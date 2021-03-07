import React, { useEffect } from "react";
const Information = ({ step, setInfo, info }) => {
    let check = (step === 4)
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInfo({ ...info, [name]: value })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [check]);
    return (
        <div className="info-container">
            <h1>Thông tin cá nhân</h1>
            <form>
                <div className="form-col">
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <input onChange={handleInput} type="text" name="name" className="form-control" disabled={step > 4} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={handleInput} type="text" name="email" className="form-control" disabled={step > 4} />
                    </div>
                </div>
                <div className="form-col">
                    <div className="form-group">
                        <label>Tuổi</label>
                        <input onChange={handleInput} type="text" name="age" className="form-control" disabled={step > 4} />
                    </div>
                    <div className="form-check-box">
                        <label>Giới tính</label>
                        <div className="form-check">
                            <input onChange={handleInput} type="radio" name="gender" value="Male" checked={info.gender === "Male"} disabled={step > 4} />Nam
                            <input onChange={handleInput} type="radio" name="gender" value="Female" checked={info.gender === "Female"} disabled={step > 4} />Nữ
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}
export default Information;