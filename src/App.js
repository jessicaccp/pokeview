import React, { useEffect, useState } from 'react';
import { Navbar, Header, Main, Footer } from './layout.js'
// import Card from './components/Card.js';

function App() {
  const api = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    limit: 12,
    offset: 0
  };

  const [data, setData] = useState('');

  // async function load() {
  //   const response = await fetch(`${api.url}`);
  //   const responseData = await response.json();
  //   console.log(responseData, responseData.results[0]);
  // }

  // load();

  useEffect(() => {
    fetch(`${api.url}`)
    .then(response => response.json())
    .then(dataJson => setData(dataJson))
    .catch((error) => console.error(error.message));
  }, [api.url]);

  let dataMain = '';

  if (data) {
    dataMain = data;
  }

  return (
    <>
      <Navbar />
      <Header />
      <Main data={dataMain}/>
      <Footer />
    </>
  );
}

export default App;
