import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    const [pokemonData, setPokemonData] = useState([]);
    const [limit, setLimit] = useState(12);
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(0);
    const [order, setOrder] = useState('id');

    // order select
    const selectOptions = [
        {value: 'id', title: ''},
        {value: 'height', title: ''},
        {value: 'weight', title: ''},
        {value: 'order', title: ''},
        {value: 'name', title: ''}
    ];

    const selectOptionsList = selectOptions.map(
        (option, key) =>
            <option key={key} value={option.value}>{option.value}</option>
    );

    function handleSelectOrder(event) {
        setOrder(event.target.value);
    }
    // end

    // pagination buttons
    function handlePrevButton() {
        if (offset > 0) {
            setOffset((offset - limit < 0) ? 0 : offset - limit);
        }
    }

    function handleNextButton() {
        if (offset < count) {
            setOffset(offset + limit);
        }
    }
    // end

    // pokemon data
    useEffect(() => {
        setPokemonData([]);
        fetch(`${apiUrl}?limit=${count}`)
        .then(response =>
             response.json())
        .then(data => {
            if (count !== 0) {
                data.results.forEach(
                    result => {
                        fetch(`${result.url}`)
                        .then(resultResponse =>
                            resultResponse.json())
                        .then(resultData =>
                            setPokemonData(prev =>
                                [...prev, resultData]));
                    }
                );
            }
            setCount(data.count);
        })
        .catch(error => console.error(error.message));
    }, [apiUrl, limit, offset, count]);
    // end

    // page content
    let pageContent = '';

    function setPageContent() {
        pageContent = pokemonData.map(
            pokemon => <PokemonCard
                key={pokemon.id}
                id={pokemon.id} 
                name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.front_default}
                height={pokemon.height}
                weight={pokemon.weight}
                stats={pokemon.stats.map(
                    (stat, key) =>
                         <li key={key}>{stat.stat.name}: {stat.base_stat}</li>
                )}
                types={pokemon.types.map(
                    (type, key) =>
                         <li key={key}>{type.type.name}</li>
                )} />
        );

        pageContent.sort(
            function (a, b) {
                let c, d;
                switch (order) {
                    case 'id':
                        c = a.props.id;
                        d = b.props.id;
                        break;
                    case 'name':
                        c = a.props.name;
                        d = b.props.name;
                        break;
                    case 'order':
                        c = a.props.order;
                        d = b.props.order;
                        break;
                    case 'height':
                        d = a.props.height;
                        c = b.props.height;
                        break;
                    case 'weight':
                        d = a.props.weight;
                        c = b.props.weight;
                        break;
                    default:
                        c = a.key;
                        d = b.key;
                        break;
                }

                if (c < d)
                    return -1;
                if (c > d)
                    return 1;
                return 0;
            }
        );
    }

    setPageContent();
    // end
    
    return(
        <>
            <div id='options'>
                <div id='filter-by'></div>
                <div id='order-by'>
                    <select default='id' name='order-by' id='order-select' onChange={handleSelectOrder}>{selectOptionsList}</select>
                </div>
                <div id='pagination'>
                    <button className='prev' onClick={handlePrevButton}></button>
                    <button className='next' onClick={handleNextButton}></button>
                </div>
            </div>
            <div id='pokemon-list'>
                {pageContent}
            </div>
        </>
    );

}

export default PokemonList;