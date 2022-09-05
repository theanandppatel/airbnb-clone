import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
function App() {
  return (

    <>
    <div>
      <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<SearchPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
