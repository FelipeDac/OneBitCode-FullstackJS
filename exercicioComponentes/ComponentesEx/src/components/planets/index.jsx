import React, { Fragment } from 'react';
import Planet from './planet';

const clickOnPlanet = (name) => {
    console.log(`Um click no planeta: ${name}`)
}

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
            /*planets: [
                {
                    name: "Mercúrio",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, nam soluta. Dolores quam quia sapiente, sunt dicta mollitia nulla temporibus.",
                    img_url: "./images/jupiter.jpg",
                    link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                },
                {
                    name: "Júpiter",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate eius pariatur aliquam molestias tenetur consectetur nobis cupiditate eveniet laboriosam dignissimos fugit, molestiae laborum quibusdam esse soluta amet praesentium? Sint!",
                    img_url: "https://pt.wikipedia.org/wiki/J%C3%BApiter_%28planeta%29#/media/Ficheiro:Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
                    link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                }
            ] */
        }
    }

    componentDidMount() {
        getPlanets().then(data => {
            this.setState(state => ({
                planets: data['planets']
            }))
        })
    }

    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLast = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3> Planet List</h3>
                <button onClick={this.removeLast}>Remover o ultimo planeta!</button>
                <button onClick={this.duplicateLast}>Duplicar o ultimo planeta!</button>
                {this.state.planets.map((planet, index) =>
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
}

export default Planets;