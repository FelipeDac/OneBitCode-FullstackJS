import React, { Fragment } from 'react';
import GrayImage from '../../shared/gray-image';
import DescriptionWithLink from '../../shared/gray-image/DescriptionLink';

const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.planet_link}/>
            <GrayImage img_url={props.img_url}/>
        </div>
    )
}

export default Planet;