import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Voting from "./pages/Voting";
import Breeds from "./pages/Breeds";
import Gallery from "./pages/Gallery";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="container">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
