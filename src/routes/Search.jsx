import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import PokemonMiniCard from "../components/PokemonMiniCard";

export default function Search() {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";
  const options = ["name", "id", "type", "ability", "version", "item", "move"];
  const [option, setOption] = useState("name");
  const [count, setCount] = useState(0);
  const [urls, setUrls] = useState([]);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Clears result list when option changes
  useEffect(() => {
    setResult([]);
  }, [option]);

  // Gets the number of pokémons
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setCount(data.count);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
    return () => {
      isMounted = false;
    };
  }, [apiUrl]);

  // Gets the urls to fetch each pokémon data
  useEffect(() => {
    let isMounted = true;
    setUrls([]);
    fetch(`${apiUrl}?limit=${count}`)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          data.results.forEach((result) => {
            setUrls((prev) => [...prev, result.url]);
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
    return () => {
      isMounted = false;
    };
  }, [count]);

  // Gets the data of each pokémon
  useEffect(() => {
    let isMounted = true;
    if (urls) {
      setIsLoading(true);
      setData([]);
      urls.forEach((url) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            if (isMounted) {
              setData((prev) => [...prev, data]);
              setIsError(false);
            }
          })
          .catch((error) => {
            console.error(error);
            setIsError(true);
          });
      });
      setIsLoading(false);
    }
    return () => {
      isMounted = false;
    };
  }, [count, urls]);

  // Handles page loading and error
  if (isLoading) return <Loading />;
  if (isError) return <Loading />;

  // Does search when keyword changes
  function handleInputChange(event) {
    if (event.target.value === "") setResult([]);
    else doSearch(option, event.target.value);
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
    setOption(event.target.value.toLowerCase());
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
    <div id="search-page">
      <form id="search-form" autoComplete="off">
        <fieldset id="search-fieldset">
          {options.map((label) => (
            <label key={label} id={`search-label-${label}`}>
              <input
                type="radio"
                value={label}
                id={`search-radio-${label}`}
                checked={label === option}
                onChange={handleOptionChange}
              />{" "}
              {label}
            </label>
          ))}
        </fieldset>

        <input
          id="search-input"
          name="search"
          type="search"
          placeholder="Search pokémons"
          aria-label="Search pokémons"
          onChange={handleInputChange}
          onKeyDown={preventEnterSubmit}
        />
      </form>

      <div id="search-result">
        <p>{result.length} result(s)</p>
        <ul>
          {result.map((r, key) => {
            return <li key={key}>{r}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
