import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Random from "./Random";
import Lists from "./Lists";
import Resource from "./Resource";
import NotFound from "../components/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/search/:option/:keyword" element={<Search />} />
        <Route path="/random" element={<Random />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/:resource" element={<Resource />} />
        <Route path="/:resource/:id" element={<Resource />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
