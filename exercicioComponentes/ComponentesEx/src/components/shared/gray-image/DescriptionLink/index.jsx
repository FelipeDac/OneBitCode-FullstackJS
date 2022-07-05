import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
    if(!props.description){
        return null;
    }

    if(props.link) {
        return (
            <Fragment>
                <p>{props.description}</p>
                <p><a href={props.planet_link}>Clique aqui para saber mais!</a></p>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p>{props.description}</p>
                <p><u>Sem link disponível...</u></p>
            </Fragment>
        )
    }
    
}

export default DescriptionWithLink;