import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isObjEmpty } from "../utils";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Search() {
  const { option, keyword } = useParams();
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";
  const options = ["name", "id", "type", "ability", "version", "item", "move"];
  const [optionSelected, setOptionSelected] = useState(option);
  // const [keywords, setKeywords] = useState(keyword);
  const [count, setCount] = useState(0);
  const [urls, setUrls] = useState([]);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Sets the initial values
  useEffect(() => {
    if (options.includes(option)) setOptionSelected(option);
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
    setIsLoading(true);
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
      setIsLoading(true);
      setData([]);
      urls.forEach((url) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setData((prev) => [...prev, data]))
          .catch((error) => {
            console.error(error);
            setIsError(true);
          });
      });
      setIsLoading(false);
    }
  }, [count, urls]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  function handleInputChange(event) {
    doSearch(optionSelected, event.target.value);
  }

  function handleOptionChange(event) {
    setOptionSelected(event.target.value);
    doSearch(event.target.value, document.getElementById("search-input").value);
  }

  function doSearch(option, keyword) {
    if (!options.includes(option)) {
      option = "name";
    }
    console.log(option, keyword);
  }

  //show options with input
  //display results based on option and data
  // /search/:option/:keyword?

  return (
    <div id="search">
      <form id="search-form" role="search">
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
          name="s"
          type="search"
          placeholder="Search pokémons"
          aria-label="Search pokémons"
          defaultValue={keyword}
          onChange={handleInputChange}
        />
      </form>

      <div id="search-result">{result}</div>
    </div>
  );
}
