import { useState } from 'react'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import './App.css'
import {
  Homepage,
  Navbar,
  Checkout,
  SearchResults,
  ProductPage,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
