import React from "react";

export function GenderList() {
  const apiUrl = "https://pokeapi.co/api/v2/gender";
  const [genderListCount, setGenderListCount] = useState(0);
  const [genderListData, setGenderListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setGenderListCount(data.count))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}?limit=${genderListCount}`)
      .then((response) => response.json())
      .then((data) => setGenderListData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [genderListCount]);

  if (isLoading || isEmpty(genderListData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="gender-list">
      <ul>
        {genderListData.results.map((gender, key) => (
          <li key={key}>
            <a href={`/gender/${gender.name}`} alt={gender.name}>
              {gender.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Gender() {
  const { id } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/gender/${id}/`;
  const [genderData, setGenderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setGenderData(data))
      .then(setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [apiUrl]);

  if (isLoading || isEmpty(genderData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <div id="gender">
      <div id="gender-id">
        <p>#{genderData.id}</p>
      </div>
      <div id="gender-name">
        <h2>{genderData.name}</h2>
      </div>
      <div id="gender-pokemon-species-details">
        <h3>Pokemon species details</h3>
        <ul>
          {genderData.pokemon_species_details.map((pokemon, key) => (
            <li key={key}>
              <a
                href={`/pokemon-species/${pokemon.pokemon_species.name}`}
                alt={pokemon.pokemon_species.name}
              >
                {pokemon.pokemon_species.name}
              </a>{" "}
              - Rate: {pokemon.rate}
            </li>
          ))}
        </ul>
      </div>
      <div id="gender-required-for-evolution">
        <h3>Required for evolution</h3>
        <ul>
          {genderData.required_for_evolution.map((pokemon, key) => (
            <li key={key}>
              <a href={`/pokemon-species/${pokemon.name}`} alt={pokemon.name}>
                {pokemon.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
