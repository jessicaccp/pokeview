import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./Search";
import NotFound from "./NotFound";
import Home from "./Home";
import Lists from "./Lists";
import { Path } from "./Resource";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/random" element={}/> */}
        <Route path="/lists" element={<Lists />} />
        {/* <Route path="/search/:keyword" element={} /> */}

        <Route path="/:resource" element={<Path />} />
        <Route path="/:resource/:id" element={<Path />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
