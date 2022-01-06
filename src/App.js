import './App.css';
import React from "react";
import Home from './components/home/Home';
import PageCard from './components/pageCard/PageCard';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/details/:id" element={<PageCard/>} />
        </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
