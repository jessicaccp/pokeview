import React from 'react';
import { Navbar, Header, Main, Footer } from './layout.js'

function App() {
  const dataMain = '';

 
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
