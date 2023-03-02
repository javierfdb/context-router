import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";

function App() {

  return (
    
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Favoritos' element={<Favoritos/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
        
    </div>
  )
}

export default App
