import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Credits from './pages/Credits';

function App() {
  // const [apiData, setApiData] = useState([]);

  // useEffect(() => {
  //   document.title = 'React Poke API';

  //   fetch('https://pokeapi.co/api/v2/')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setApiData(data);
  //     console.log({apiData})
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
  // }, []);

  return (
    <>
        <Credits />
    </>
  );
}

export default App;
