import React from 'react';

import './phone-picture.css';

const PhonePictureComponent = props => {
    // const phonePicture = props.priceInfo && props.priceInfo.bundlePrice.monthlyPrice.gross;
    // const oneOffDiscount = props.priceInfo && props.priceInfo.hardwarePrice.oneOffDiscountPrice.gross;
    // <pre>{JSON.stringify(props, null, 2)}</pre>
    return (
        <div className="phone-picture__wrapper">
            <img src={props.merchandisingMedia && props.merchandisingMedia[0].value} alt='phones'/>
        </div>
    );
}

export default PhonePictureComponent;