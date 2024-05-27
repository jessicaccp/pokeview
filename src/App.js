import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'React Poke API';
  });

  return (
    <p>Teste.</p>
  );
}

export default App;
