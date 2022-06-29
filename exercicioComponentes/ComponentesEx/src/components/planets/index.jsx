import React, { Fragment } from 'react';
import Planet from './planet';


const Planets = () => {
    return (
        <Fragment>
            <h3> Planet List</h3>
            <hr/>
            <Planet name="Mercúrio"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, nam soluta. Dolores quam quia sapiente, sunt dicta mollitia nulla temporibus."
                    img_url="./images/jupiter.jpg"
                    planet_link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            />
            <hr/>
            <Planet name="Júpiter"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate eius pariatur aliquam molestias tenetur consectetur nobis cupiditate eveniet laboriosam dignissimos fugit, molestiae laborum quibusdam esse soluta amet praesentium? Sint!"
                    img_url="https://pt.wikipedia.org/wiki/J%C3%BApiter_%28planeta%29#/media/Ficheiro:Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
                    planet_link="https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)"
            />
        </Fragment>
    )
}

export default Planets;