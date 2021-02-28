import React from 'react';
import BannerBox from './BannerBox';
import Event from './Event';
import Film from './Film';
import Loading from './Loading';
const Home = ({data}) => {
    const renderData = () => {
        if (data) {
            return (
                <div className='home-container'>
                    <BannerBox />
                    <Film data={data} />
                    <Event />
                </div>
            )
        }
        else {
            return <Loading />
        }
    }
    return (
        renderData()
    )
}
export default Home;