import React from 'react';
import StarComponent from '../star'

import './phone-description.css';

const PhoneDescriptionComponent = props => {
    return(
        <div> 
            <h1>{props.title}</h1>
            <StarComponent width={props.rating}/>
            <p>{props.description}</p>
         </div>
    )
}

export default PhoneDescriptionComponent;