import React, { Fragment, useEffect, useState } from 'react';
import Planet from './planet';
import Form from './form'

const clickOnPlanet = (name) => {
    console.log(`Um click no planeta: ${name}`)
}

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

const Planets = () => {
    const [planets, setPlanets] = useState([]);


    //Similar ao didMount e didUpdate, pode se passar o [] vazio para atualizar apenas ao montar, ou passar outros estados à serem observados.
    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }

    const removeLast = () => {
        let new_planets = [...planets];
        new_planets.pop();
        setPlanets(new_planets);
    }

    const duplicateLast = () => {
        let last_planet = planets[planets.length - 1];
        setPlanets(...planets, last_planet);
    }

    return (
        <Fragment>
            <h3> Planet List</h3>
            <button onClick={removeLast}>Remover o ultimo planeta!</button>
            <button onClick={duplicateLast}>Duplicar o ultimo planeta!</button>
            <Form addPlanet={addPlanet}/>
            <hr/>
            {planets.map((planet, index) =>
                <Planet
                    key={index}
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    clickOnPlanet={clickOnPlanet}
                />
            )}
        </Fragment>
    )
}

export default Planets;