import React from "react";

export function Items() {
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

export default function Item() {
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
  return <></>;
}

export function ItemAttributes() {
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

export function ItemAttribute() {
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
  return <></>;
}

export function ItemCategories() {
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

export function ItemCategory() {
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
  return <></>;
}

export function ItemFlingEffects() {
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

export function ItemFlingEffect() {
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
  return <></>;
}

export function ItemPockets() {
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

export function ItemPocket() {
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
  return <></>;
}
