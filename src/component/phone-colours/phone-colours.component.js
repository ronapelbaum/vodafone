import React from 'react';
import ColourSampleComponent from '../colour-sample';

import './phone-colours.css'

const PhoneColoursComponent = props => {

    const renderSquares = props.collection.map((item, key) => {
        const selectedInPCC = typeof props.colour === 'number' ? 
            // if true memory will show selected
            props.colour === item :
            // when undefined always return false
            props.colour === undefined ? false : 
            // if true colour will show selected
            props.colour === item.colourHex 
            return <ColourSampleComponent callBackFunction={props.callBackFunction} key={key} item={item} selected={selectedInPCC}/>
        }
    );

    const searchResult = props.collection
        .filter(item => typeof props.colour === 'number' ? 
            props.colour === item :
            item.colourHex === props.colour)
        .map(item => typeof props.colour === 'number' ?
            item :
            item.colourName)

    const colourName  = searchResult.length ? searchResult.reduce(a => a) : ''

    return (
    <div>
        <label>{props.label}: <span className="phone-colours">{colourName}</span></label>
        <div>{renderSquares}</div>
    </div>);
}

export default PhoneColoursComponent;