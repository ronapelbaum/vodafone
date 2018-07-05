import React from 'react';
import './phone-price.css';

const PhonePriceComponent = props => {
    const monthlyPrice = props.priceInfo && props.priceInfo.bundlePrice.monthlyPrice.gross;
    const oneOffDiscount = props.priceInfo && props.priceInfo.hardwarePrice.oneOffDiscountPrice.gross;
    return (
        <div className="price-wrapper">
            <div className="price-monthly">When you pay <span className="phone-price">£{monthlyPrice}</span> a month</div>
            {oneOffDiscount ? <div className="price-upfront">From <span className="phone-price">£{oneOffDiscount}</span> upfront cost</div> : ''}
        </div>
    );
}

export default PhonePriceComponent;