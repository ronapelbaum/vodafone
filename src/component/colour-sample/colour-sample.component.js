import React from 'react';

import './colour-sample.css';

const ColourSampleComponent = props => {
    const background = {
        backgroundColor: props.item.colourHex
    }

    const param = typeof props.item === "number" ? props.item : props.item.colourHex;

    const handleClick = () => {props.callBackFunction(param)}    

    return (
        <div onClick={handleClick} className={props.selected ? "colour-sample__selected" : "colour-sample" } style={background}>
            {typeof props.item === "number" && props.item}
        </div>
    )
}

export default ColourSampleComponent;