import React from "react";
import "./App.css";
import Header from "./Components/Header/index";
import Home from "./Components/Home/index";
import Footer from "./Components/Footer/index";
import SearchPokemons from "./Components/SearchPokemons/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<SearchPokemons />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
