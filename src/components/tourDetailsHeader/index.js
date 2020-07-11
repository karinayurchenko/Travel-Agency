import React from 'react';
import './index.scss';

const TourHeader = () => (
  <div className="header__container">

    <div className="leftBlock">
      <div className="leftBlockHotel">
        <div className="leftBlockHotel__name">Armir Resort (Ex.Kemer Millenium Resort) 5*</div>
        <div className="leftBlockHotel__address">Kemer, Turkey</div>
      </div>

    </div>

    <div className="rightBlock">
      <div className="rightBlock__header">
        <div className="tourIdNumber">
          <div className="idNumber">Tour ID:123456</div>
          <div className="idDescr">Tour relevant</div>
        </div>
        <div className="tourCurrency">
          <div className="tourCurrencyItem">EUR</div>
          <div className="tourCurrencyItem">UAH</div>
          <div className="tourCurrencyItem">USD</div>
        </div>
      </div>

      <div className="rightBlock__price">
        <div className="totalPrice">23 567 UAH</div>
        <div className="totalPriceDescr">for person</div>
      </div>

      <div className="rightBlock__details">
        <div className="shadowBlock" />
        <div className="shadowBlockInfo">
          <div className="blockForDetails">
            <div className="detailsDuration">
              <div className="detailsDurationLabel"> Duration:</div>
              <div className="detailsDurationDays"> 6 days</div>
            </div>
            <div className="detailsRoom">
              <div className="roomTypeLabel"> Room Type:</div>
              <div className="roomType"> Promo Room</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TourHeader;
