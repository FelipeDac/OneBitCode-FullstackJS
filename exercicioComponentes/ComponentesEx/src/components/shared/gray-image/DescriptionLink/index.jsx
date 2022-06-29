import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
    return (
        <Fragment>
            <p>{props.description}</p>
            <p><a href={props.planet_link}>Clique aqui para saber mais!</a></p>
        </Fragment>
    )
}

export default DescriptionWithLink;