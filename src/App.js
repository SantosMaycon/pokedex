import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SearchPokemons from "./components/SearchPokemons";
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
