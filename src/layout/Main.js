import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Data from '../pages/Data';
import Credits from '../pages/Credits';
import Pokemon from "../components/Pokemon";

function Main() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/data' element={<Data />} />
                    <Route path='/credits' element={<Credits />} />
                </Routes>
            </BrowserRouter>
            {/* <Pokemon id='1' name='' /> */}
        </main>
    );
}

export default Main;