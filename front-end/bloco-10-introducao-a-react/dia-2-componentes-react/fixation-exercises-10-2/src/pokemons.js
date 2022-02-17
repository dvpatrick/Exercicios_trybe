import React, { Component } from "react";
import data from "./data";
import Pokemon from "./Pokemon";

class PokemonsList extends Component {
    render() {
        return(
            <article className="containner">
                {
                    data.map((pokemon) => {
                        return <Pokemon pokemonData={pokemon} key={pokemon.id}/>
                    })
                }
            </article>
        )
    }
}

export default PokemonsList;