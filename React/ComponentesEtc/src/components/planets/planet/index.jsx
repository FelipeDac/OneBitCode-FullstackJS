import React, { useState, Fragment, useEffect } from 'react';
import GrayImage from '../../shared/gray-image';
import DescriptionWithLink from '../../shared/gray-image/DescriptionLink';

import { Link } from 'react-router-dom';

const Planet = (props) => {
    
    let title;
    if (props.title_with_underline) {
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }

    return (
        <div>
            <Link to={`planet/${props.id}`}>{title}</Link>
            <DescriptionWithLink description={props.description} link={props.planet_link} />
            <GrayImage img_url={props.img_url} />
        </div>
    )
}



export default Planet;