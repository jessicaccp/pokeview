import { ResourceCard } from "./Resource";

export default function Random() {
  const maxIndex = 1024;
  const randomIndex = Math.floor(Math.random() * maxIndex);
  console.log(randomIndex);
  return <ResourceCard resource="pokemon" id={randomIndex} />;
}
