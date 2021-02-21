import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Home from "./components/Home/index";
import Footer from "./components/Footer/index";
import SearchPokemons from "./components/SearchPokemons/index";
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
