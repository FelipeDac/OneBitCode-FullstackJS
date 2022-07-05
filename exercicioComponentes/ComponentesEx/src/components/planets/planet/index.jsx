import React, { Component, Fragment } from 'react';
import GrayImage from '../../shared/gray-image';
import DescriptionWithLink from '../../shared/gray-image/DescriptionLink';

async function getSat(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();
    return data;
}

class Planet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            satellites: []
        }
    }

    componentDidMount() {
        getSat(this.props.id).then(data => {
            this.setState(state => ({
                satellites: data['satellites']
            }))
        })
    }


    render() {
        let title;
        if (this.props.title_with_underline) {
            title = <h4><u>{this.props.name}</u></h4>
        } else {
            title = <h4>{this.props.name}</h4>
        }

        return (
            <div onClick={() => props.clickOnPlanet(this.props.name)}>
                {title}
                <DescriptionWithLink description={this.props.description} link={this.props.planet_link} />
                <GrayImage img_url={this.props.img_url} />
                <h4>Satélites</h4>
                <ul>
                    {this.state.satellites.map((satellites, index) =>
                        <li key={index}>{satellites.name}</li>
                    )}
                </ul>
                <hr />
            </div>
        )
    }
}



export default Planet;