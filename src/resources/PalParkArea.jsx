import { useState, useEffect } from "react";
import { isObjEmpty } from "../utils";
import { useParams } from "react-router-dom";

export default function PalParkArea() {
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

  if (isLoading || isObjEmpty(genderData)) return <p>Loading</p>;
  if (isError) return <p>Error</p>;
  return <></>;
}
