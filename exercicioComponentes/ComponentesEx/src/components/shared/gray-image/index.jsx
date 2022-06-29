import React, { Fragment } from 'react';
import './style.css'

const GrayImage = (props) => {
    return (
        <img className="gray-img" src={props.img_url} alt="Planet Picture"></img>
    )
}

export default GrayImage;