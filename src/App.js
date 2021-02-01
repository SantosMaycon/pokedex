import React from 'react'
import './App.css'
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from './Components/Footer';
import SearchPokemons from './Components/SearchPokemons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
  )
}

export default App
