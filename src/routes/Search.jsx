import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import PokemonMiniCard from "../components/PokemonMiniCard";

export default function Search() {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";
  const { option, keyword } = useParams();
  const options = ["name", "id", "type", "ability", "version", "item", "move"];
  const [optionSelected, setOptionSelected] = useState(option);
  const [count, setCount] = useState(0);
  const [urls, setUrls] = useState([]);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Sets the initial values
  useEffect(() => {
    if (options.includes(String(option).toLowerCase()))
      setOptionSelected(String(option).toLowerCase());
    else setOptionSelected("name");
  }, [option]);

  // Get the initial results if there are params
  useEffect(() => {
    if (keyword) {
      if (option) {
        doSearch(option, keyword);
      } else {
        doSearch("name", keyword);
      }
    }
  }, [option, keyword]);

  // Gets the number of pokémons
  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  // Gets the urls to fetch each pokémon data
  useEffect(() => {
    setUrls([]);
    fetch(`${apiUrl}?limit=${count}`)
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((result) => {
          setUrls((prev) => [...prev, result.url]);
        });
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [count]);

  // Gets the data of each pokémon
  useEffect(() => {
    if (urls) {
      setData([]);
      urls.forEach((url) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setData((prev) => [...prev, data]);
            setIsError(false);
          })
          .catch((error) => {
            console.error(error);
            setIsError(true);
          });
      });
    }
  }, [count, urls]);

  // useEffect(() => {
  // data.sort((a, b) => a.id - b.id);
  // }, [data]);

  useEffect(() => {
    if (data.length === count) {
      setIsLoading(false);
    }
  }, [data]);

  // Handles page loading and error
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  // Does search when keyword changes
  function handleInputChange(event) {
    if (event.target.value === "") setResult([]);
    else doSearch(optionSelected, event.target.value);
  }

  // Blocks the form submit with Enter key
  function preventEnterSubmit(event) {
    if (
      event.key === "Enter" ||
      event.keyCode === 13 ||
      event.which === 13 ||
      event.keyIdentifier === "U+000A" ||
      event.keyIdentifier === "Enter"
    )
      event.preventDefault();
    return false;
  }

  // Does search when option changes and set new value
  function handleOptionChange(event) {
    setOptionSelected(event.target.value.toLowerCase());
    doSearch(
      event.target.value.toLowerCase(),
      document.getElementById("search-input").value
    );
  }

  // Search the pokémon data based on the option and keyword
  function doSearch(option, keyword) {
    setResult([]);
    option = option.toLowerCase();
    if (!options.includes(option)) {
      option = "name";
    }

    switch (option) {
      case "name":
        data.forEach((pokemon) => {
          if (pokemon.name.includes(keyword)) {
            setResult((prev) => [...prev, <PokemonMiniCard data={pokemon} />]);
          }
        });
        break;

      case "id":
        data.forEach((pokemon) => {
          if (pokemon.id === Number(keyword)) {
            setResult((prev) => [...prev, <PokemonMiniCard data={pokemon} />]);
          }
        });
        break;

      case "type":
        data.forEach((pokemon) => {
          pokemon.types.forEach((type) => {
            if (type.type.name === keyword) {
              setResult((prev) => [
                ...prev,
                <PokemonMiniCard data={pokemon} />,
              ]);
            }
          });
        });
        break;

      case "ability":
        data.forEach((pokemon) => {
          pokemon.abilities.forEach((ability) => {
            if (ability.ability.name === keyword) {
              setResult((prev) => [
                ...prev,
                <PokemonMiniCard data={pokemon} />,
              ]);
            }
          });
        });
        break;

      case "version":
        data.forEach((pokemon) => {
          pokemon.game_indices.forEach((game) => {
            if (game.version.name === keyword) {
              setResult((prev) => [
                ...prev,
                <PokemonMiniCard data={pokemon} />,
              ]);
            }
          });
        });
        break;

      case "item":
        data.forEach((pokemon) => {
          pokemon.held_items.forEach((item) => {
            if (item.item.name === keyword) {
              setResult((prev) => [
                ...prev,
                <PokemonMiniCard data={pokemon} />,
              ]);
            }
          });
        });
        break;

      case "move":
        data.forEach((pokemon) => {
          pokemon.moves.forEach((move) => {
            if (move.move.name === keyword) {
              setResult((prev) => [
                ...prev,
                <PokemonMiniCard data={pokemon} />,
              ]);
            }
          });
        });
        break;

      default:
        setResult([]);
        break;
    }
  }

  return (
    <div id="search">
      <form id="search-form">
        <fieldset id="search-fieldset">
          {options.map((option) => (
            <label key={option} id={`search-label-${option}`}>
              <input
                type="radio"
                value={option}
                id={`search-radio-${option}`}
                checked={optionSelected === option}
                onChange={handleOptionChange}
              />{" "}
              {option}
            </label>
          ))}
        </fieldset>

        <input
          id="search-input"
          name="search"
          type="search"
          placeholder="Search pokémons"
          aria-label="Search pokémons"
          defaultValue={keyword}
          onChange={handleInputChange}
          onKeyDown={preventEnterSubmit}
        />
      </form>

      <div id="search-result">
        <ul>
          {result.map((r, key) => {
            return <li key={key}>{r}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
