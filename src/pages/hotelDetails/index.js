import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import HotelLocation from '../../constants/hotelLocation';
import Card from '../../components/home/card';
import HotelDetailsBtn from '../../constants/hotelDetailsbtn';
import HotelDetailsImgs from './components/imagesBlock';
import './index.scss';


/**
   * Render map jvectormap
   * @param selector -- container selector
   * docs:
   *    http://jvectormap.com/documentation/
   *    http://jvectormap.com/documentation/javascript-api/jvm-map/
   */
const renderMap = (selector) => {
  window.$(selector).vectorMap({
    map: 'world_mill_en',
    backgroundColor: 'white',
    regionStyle: {
      initial: {
        fill: '#e1e4e7',
        'fill-opacity': 1,
        stroke: 'none',
        'stroke-width': 0,
        'stroke-opacity': 1,
      },
    },
    markerStyle: {
      initial: {
        fill: '#F8E23B',
        stroke: '#383f47'
      }
    },
    backgroundColor: 'rgba(45, 134, 252, 0.897)',
    markers: [
      {latLng: [41.90, 12.45], name: 'Vatican City'},
      {latLng: [43.73, 7.41], name: 'Monaco'},
      {latLng: [-0.52, 166.93], name: 'Nauru'},
      {latLng: [-8.51, 179.21], name: 'Tuvalu'},
      {latLng: [43.93, 12.46], name: 'San Marino'},
      {latLng: [47.14, 9.52], name: 'Liechtenstein'},
      {latLng: [7.11, 171.06], name: 'Marshall Islands'},
      {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
      {latLng: [3.2, 73.22], name: 'Maldives'},
      {latLng: [35.88, 14.5], name: 'Malta'},
      {latLng: [12.05, -61.75], name: 'Grenada'},
      {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
      {latLng: [13.16, -59.55], name: 'Barbados'},
      {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
      {latLng: [-4.61, 55.45], name: 'Seychelles'},
      {latLng: [7.35, 134.46], name: 'Palau'},
      {latLng: [42.5, 1.51], name: 'Andorra'},
      {latLng: [14.01, -60.98], name: 'Saint Lucia'},
      {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
      {latLng: [1.3, 103.8], name: 'Singapore'},
      {latLng: [1.46, 173.03], name: 'Kiribati'},
      {latLng: [-21.13, -175.2], name: 'Tonga'},
      {latLng: [15.3, -61.38], name: 'Dominica'},
      {latLng: [-20.2, 57.5], name: 'Mauritius'},
      {latLng: [26.02, 50.55], name: 'Bahrain'},
      {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
    ]
  });
};


const HotelDetails = () => {

    useEffect(() => {
        renderMap('#hotelDetails-world-map');
      }, []);

  const [activeBtn, setActiveBtn] = useState('view');  

  return(
    <div className='hotelDetails__container'>
      <div className='hotelDetails__header'>
          <div className='hotelName'> Hotel Name</div>
          <div className='hotelDetails__buttons'>
            {HotelDetailsBtn.map((el)=> (
          <button  
            onClick={() => setActiveBtn(el.name)} 
            type='button' 
            className={cn({
              hotelDetails__btn: true,
              activeBtn: activeBtn === el.name })} 
            >
           {el.label} 
          </button> 
             ))}
          </div>  
      </div>
      
      <HotelDetailsImgs /> 

        <div className="descriptionBlock">
                <textarea  name="description" placeholder="Hotel description*" rows="5" required />
        </div> 
        <div className='block__title'>Room Number:
          <div className='roomNumber'> 100 </div>
        </div> 
        
        <div className="locationBlock">
            <div className="locationBlock_label">Location:</div>
            <div className="location_container">
            {HotelLocation.map((el) => (
              <div className="hotelDetails__location">
                <div className="hotelLocationLabel">{el.label} </div>
                <div className="hotelLocationValue">{el.value} </div>
              </div>
            ))}
            </div>
        
            <div className="locationBlock_label"> Hotel location on a map:</div>
                <div className="location_container">
                <div className="hotelDetails__location">
                    <div className="latitude">
                        <div className="hotelLocationLabel">Latitude</div>
                        <div className="hotelLocationValue">30.6</div>
                    </div>
                    <div className="longitude">
                        <div className="hotelLocationLabel">Longitude</div>
                        <div className="hotelLocationValue">30.6</div>
                    </div>
                </div>
                </div>
        </div>
        <div className="hotelDetails__map">
            <div className="map" id="hotelDetails-world-map" />
        </div>
  </div>
)};

export default HotelDetails;
