import React, { useState, Fragment, useEffect } from 'react';
import GrayImage from '../shared/gray-image';
import DescriptionWithLink from '../shared/gray-image/DescriptionLink';
import Form from './form';

import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';

async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();
    return data;
}

const Planet = () => {
    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanet] = useState({});
    const [navigate, setNavigate] = useState(false);

    let { id } = useParams();
    let navigateTo = useNavigate();

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites']);
            setPlanet(data['data']);
        }, error => {
            setNavigate(true);
        })
    }, []);

    const goToHome = () => {
        navigateTo('/');
    }

    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite])
    }

    let title;
    if (planet.title_with_underline) {
        title = <h4><u>{planet.name}</u></h4>
    } else {
        title = <h4>{planet.name}</h4>
    }

    if(navigate) {
        return (
            <Navigate to="/"/>
        )
    }

    return (
        <div>
            {title}
            <DescriptionWithLink description={planet.description} link={planet.planet_link} />
            <GrayImage img_url={planet.img_url} />
            <h4>Satélites</h4>
            <hr/>
            <Form addSatellite={addSatellite}/>
            <hr/>
            <ul>
                {satellites.map((satellites, index) =>
                    <li key={index}>{satellites.name}</li>
                )}
            </ul>
            <hr/>
            {
                //<Link to="/">Voltar a listagem</Link>
            }
            <button type="button" onClick={goToHome}>Voltar a listagem!</button>
            
        </div>
    )
}



export default Planet;