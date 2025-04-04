import React, { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setwatchlist] = useState([]);

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchlist));
    setwatchlist(newWatchlist);
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist));
    setwatchlist(filteredWatchlist);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (moviesFromLocalStorage) {
      setwatchlist(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies 
                watchlist={watchlist}
                handleAddtoWatchlist={handleAddtoWatchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            </>
          }
        />
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setwatchlist={setwatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
