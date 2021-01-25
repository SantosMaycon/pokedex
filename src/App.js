import React from 'react'
import './App.css'
import Header from "./components/Header";
// import Home from "./components/Home";
import Footer from './components/Footer';
import SearchPokemons from './components/SearchPokemons';

const App = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <SearchPokemons />
      <Footer />
    </>
  )
}

export default App
