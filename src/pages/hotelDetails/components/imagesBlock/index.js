import React from 'react';
import Images from '../../../../constants/imgNewHotel';
import './index.scss';


const HotelDetailsImgs = () => {
    return (
        <div>
            <div className='block__title'>Images</div> 
            <div className="hotelDetails__imgs">
                {Images.map((el) => (
                    <div className="hotelDetailsImgs">
                    <img src={el.url} className="hotelImage" alt="" />
                    </div>
                ))}
            </div>   
        </div>
    );
};

export default HotelDetailsImgs;