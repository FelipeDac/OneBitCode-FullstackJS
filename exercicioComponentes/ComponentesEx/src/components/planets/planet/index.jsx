import React, { useState, Fragment, useEffect } from 'react';
import GrayImage from '../../shared/gray-image';
import DescriptionWithLink from '../../shared/gray-image/DescriptionLink';

async function getSat(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();
    return data;
}

const Planet = (props) => {
    const [satellites, setSatellites] = useState([]);

    useEffect(() => {
        getSat(props.id).then(data => {
            setSatellites(data['satellites'])
        })
    }, []);

    let title;
    if (props.title_with_underline) {
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }

    return (
        <div onClick={() => props.clickOnPlanet(planet.name)}>
            {title}
            <DescriptionWithLink description={props.description} link={props.planet_link} />
            <GrayImage img_url={props.img_url} />
            <h4>Satélites</h4>
            <ul>
                {satellites.map((satellites, index) =>
                    <li key={index}>{satellites.name}</li>
                )}
            </ul>
            <hr />
        </div>
    )
}



export default Planet;