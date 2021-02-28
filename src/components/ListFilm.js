import React from 'react';
import poster from '../img/HO00002213.jpg'
const ListFilm = ({ data,filmInfo }) => {
    const getData = () => {
        return data.map((ele, i) => {
            let name="";
            ele.name.split("").map((el,i)=>{
                if(i<20){
                    name+=el
                }
                return name;
            })
            name+="...";
            return (
                <div className='film-box' key={i} onClick={()=>filmInfo(ele)}>
                    <div className='film-box-img'>
                        <img src={poster} alt=""></img>
                    </div>
                    <h3 className='film-box-title'>
                        {name}
                    </h3>
                </div>
            )
        })
    }
    return (
        <div className='list-film-container' >
            {getData()}
        </div>
    )
}
export default ListFilm;