import React from 'react';
import './star.css';


const StarComponent = props => {
    const starFront = { width: '0px'}
    if(props.width){
        starFront.width = props.width
    }
    return(
        <div className="star-wrapper">
            <div className="star-back">
            </div>
            <div className="star-front" style={starFront}>
            </div>
        </div>
    );
}

export default StarComponent;