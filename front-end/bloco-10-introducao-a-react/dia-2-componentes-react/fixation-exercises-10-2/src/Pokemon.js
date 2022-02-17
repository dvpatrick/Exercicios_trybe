import React, { Component } from "react";
// import data from "./data"
// console.log(data[0].id);

class Pokemon extends Component {
    render() {
        const {name, type, averageWeight, image} = this.props.pokemonData;
        return (
            <section className="pok">
                <div className="statsPoc">
                <p>{name}</p>
                <p>{ type }</p>
                <p>{ `averageWeight: ${averageWeight.value} ${averageWeight.measurementUnit}` }</p>
                </div>
                <div className="imgpok">
                <img src={image} alt=""/>
                </div>
            </section>
        )
    }
}

export default Pokemon;