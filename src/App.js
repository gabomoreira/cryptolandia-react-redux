import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            exact
            path="/cryptocurrencies"
            element={<Cryptocurrencies />}
          />
          <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
        </Routes>
        <div className="footer">Created by Gabriel Moreira</div>
      </div>
    </Router>
  );
}

export default App;
