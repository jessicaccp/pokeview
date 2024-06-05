import React from 'react';

function PokemonCard(props) {
    return(
        <section className='pokemon-card'>
            <div id='card-info'>
                <h2>#{props.id} {props.name}</h2>
                <ul id='card-types'>{props.types}</ul>
                <ul id='card-stats'>
                    <li>Height: {props.height}</li>
                    <li>Weight: {props.weight}</li>
                    {props.stats}
                </ul>
            </div>
            <div id='card-img'>
                <img src={props.image} alt={props.name} />
            </div>
        </section>
    );
}

export default PokemonCard;