import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Data from '../pages/Data';
import Credits from '../pages/Credits';
import NotFound from '../components/NotFound';

function Main() {
    return (
        <main>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/data' element={<Data />} />
                <Route path='/credits' element={<Credits />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default Main;