import React, { Fragment } from 'react';
import './style.css'

const GrayImage = (props) => {
    return (
        <img className={props.gray ? 'gray-img' : 'color-img'} src={props.img_url} alt="Planet Picture"></img>
    )
}

export default GrayImage;