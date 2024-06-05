import React from 'react';

function PokemonCard(props) {
    return(
        <section className='pokemon-card'>
            <div id='card-info'>
                <h2>#{props.id} {props.name}</h2>
                <ul id='card-types'>{props.types}</ul>
                <ul id='card-stats'>{props.stats}</ul>
            </div>
            <div id='card-img'>
                <img src={props.image} alt={props.name} />
            </div>

            {/* <div class='pokemon-info'>
                <div class='pokemon-id'>{props.id}</div>
                <div class='pokemon-name'>{props.name}</div>
                <div class='pokemon-base-experience'>{props.base_experience}</div>
                <div class='pokemon-height'>{props.height}</div>
                <div class='pokemon-is-default'>{props.is_default}</div>
                <div class='pokemon-order'>{props.order}</div>
                <div class='pokemon-weight'>{props.weight}</div>
                <div class='pokemon-abilities'>{props.abilities}</div>
                <div class='pokemon-past-abilities'>{props.past_abilities}</div>
                <div class='pokemon-forms'>{props.forms}</div>
                <div class='pokemon-game-indices'>{props.game_indices}</div>
                <div class='pokemon-held-items'>{props.held_items}</div>
                <div class='pokemon-location-area-encounters'>{props.location_area_encounters}</div>
                <div class='pokemon-moves'>{props.moves}</div>
                <div class='pokemon-past-types'>{props.past_types}</div>
                <div class='pokemon-sprites'>{props.sprites}</div>
                <div class='pokemon-cries'>{props.cries}</div>
                <div class='pokemon-species'>{props.species}</div>
                <div class='pokemon-stats'>{props.stats}</div>
                <div class='pokemon-types'>{props.types}</div>
            </div> */}
        </section>
    );
}

export default PokemonCard;