import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Voting from "./pages/Voting";
import Breeds from "./pages/Breeds";
import Gallery from "./pages/Gallery";
import Navigation from "./components/Navigation";
import MainContent from "./pages/MainContent";
import Likes from "./pages/Likes";
import Dislikes from "./pages/Dislikes";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="container">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/voting"
              element={
                <MainContent>
                  <Voting />
                </MainContent>
              }
            />
            <Route
              path="/breeds"
              element={
                <MainContent>
                  <Breeds />
                </MainContent>
              }
            />
            <Route
              path="/gallery"
              element={
                <MainContent>
                  <Gallery />
                </MainContent>
              }
            />
            <Route
              path="/likes"
              element={
                <MainContent>
                  <Likes />
                </MainContent>
              }
            />
            <Route
              path="/dislikes"
              element={
                <MainContent>
                  <Dislikes />
                </MainContent>
              }
            />
            <Route
              path="/favourites"
              element={
                <MainContent>
                  <Favourites />
                </MainContent>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
